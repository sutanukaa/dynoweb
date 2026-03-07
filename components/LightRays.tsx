"use client";
import React, { useRef, useEffect, useCallback } from "react";

interface LightRaysProps {
  raysOrigin?: "top-center" | "top-left" | "top-right" | "center" | "bottom-center";
  raysColor?: string;
  raysSpeed?: number;
  lightSpread?: number;
  rayLength?: number;
  followMouse?: boolean;
  mouseInfluence?: number;
  noiseAmount?: number;
  distortion?: number;
  className?: string;
  pulsating?: boolean;
  fadeDistance?: number;
  saturation?: number;
}

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace("#", "");
  const full = clean.length === 3
    ? clean.split("").map(c => c + c).join("")
    : clean;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function getOriginCoords(
  raysOrigin: LightRaysProps["raysOrigin"],
  w: number, h: number
): [number, number] {
  switch (raysOrigin) {
    case "top-left":      return [0, 0];
    case "top-right":     return [w, 0];
    case "center":        return [w / 2, h / 2];
    case "bottom-center": return [w / 2, h];
    case "top-center":
    default:              return [w / 2, 0];
  }
}

const LightRays: React.FC<LightRaysProps> = ({
  raysOrigin = "top-center",
  raysColor = "#ffffff",
  raysSpeed = 1,
  lightSpread = 0.5,
  rayLength = 3,
  followMouse = false,
  mouseInfluence = 0.1,
  noiseAmount = 0,
  distortion = 0,
  className = "",
  pulsating = false,
  fadeDistance = 1,
  saturation = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0 });
  const targetMouseRef = useRef({ x: 0.5, y: 0 });
  const frameRef = useRef<number | null>(null);
  const timeRef = useRef(0);

  // Keep latest prop values accessible inside the animation loop
  const propsRef = useRef({
    raysOrigin, raysColor, raysSpeed, lightSpread, rayLength,
    followMouse, mouseInfluence, noiseAmount, distortion,
    pulsating, fadeDistance, saturation,
  });
  useEffect(() => {
    propsRef.current = {
      raysOrigin, raysColor, raysSpeed, lightSpread, rayLength,
      followMouse, mouseInfluence, noiseAmount, distortion,
      pulsating, fadeDistance, saturation,
    };
  });

  const getOrigin = useCallback(
    (w: number, h: number): [number, number] =>
      getOriginCoords(propsRef.current.raysOrigin, w, h),
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top)  / rect.height,
      };
    };
    canvas.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      const p = propsRef.current;
      timeRef.current += 0.004 * p.raysSpeed;
      const t = timeRef.current;

      // Smooth mouse lerp
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.04;

      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const [bx, by] = getOrigin(w, h);
      const ox = p.followMouse
        ? bx + (mouseRef.current.x * w - bx) * p.mouseInfluence
        : bx;
      const oy = p.followMouse
        ? by + (mouseRef.current.y * h - by) * p.mouseInfluence
        : by;

      const [r, g, b] = hexToRgb(p.raysColor);
      const sr = r + (128 - r) * (1 - p.saturation);
      const sg = g + (128 - g) * (1 - p.saturation);
      const sb = b + (128 - b) * (1 - p.saturation);

      const pulse = p.pulsating ? 0.88 + 0.12 * Math.sin(t * 1.4) : 1;

      // ── 1. Outer wide soft halo (fills the section top) ──────────────
      const outerR = w * (0.55 + p.lightSpread * 0.25) * pulse;
      const outerGrad = ctx.createRadialGradient(ox, oy, 0, ox, oy, outerR);
      outerGrad.addColorStop(0,    `rgba(${sr},${sg},${sb},0.045)`);
      outerGrad.addColorStop(0.3,  `rgba(${sr},${sg},${sb},0.018)`);
      outerGrad.addColorStop(0.65, `rgba(${sr},${sg},${sb},0.005)`);
      outerGrad.addColorStop(1,    `rgba(${sr},${sg},${sb},0)`);

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = outerGrad;
      // Stretch horizontally so it looks like light spreading across the top
      ctx.beginPath();
      ctx.ellipse(ox, oy, outerR * 1.6, outerR * 0.85, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // ── 2. Mid glow — brighter inner bloom ───────────────────────────
      const midR = w * (0.22 + p.lightSpread * 0.1) * pulse;
      const midGrad = ctx.createRadialGradient(ox, oy, 0, ox, oy, midR);
      midGrad.addColorStop(0,   `rgba(${sr},${sg},${sb},0.08)`);
      midGrad.addColorStop(0.4, `rgba(${sr},${sg},${sb},0.03)`);
      midGrad.addColorStop(1,   `rgba(${sr},${sg},${sb},0)`);

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = midGrad;
      ctx.beginPath();
      ctx.ellipse(ox, oy, midR * 1.2, midR * 0.9, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // ── 3. Tight bright core — the "light source" hotspot ───────────
      const coreR = w * 0.055 * pulse;
      const coreGrad = ctx.createRadialGradient(ox, oy, 0, ox, oy, coreR);
      coreGrad.addColorStop(0,   `rgba(${sr},${sg},${sb},0.55)`);
      coreGrad.addColorStop(0.3, `rgba(${sr},${sg},${sb},0.18)`);
      coreGrad.addColorStop(0.7, `rgba(${sr},${sg},${sb},0.04)`);
      coreGrad.addColorStop(1,   `rgba(${sr},${sg},${sb},0)`);

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(ox, oy, coreR, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMouseMove);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getOrigin]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
};

export default LightRays;
