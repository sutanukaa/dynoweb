"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { createNoise2D } from "simplex-noise";

import { cn } from "@/lib/utils";

export interface AnimatedWaveProps {
  className?: string;
  /** Primary wave color from (CSS hex or RGB) */
  colorFrom?: string;
  /** Secondary wave color to (CSS hex or RGB) */
  colorTo?: string;
  /** Wave animation speed factor (default: 0.8) */
  speed?: number;
  /** Wave amplitude scale (default: 25) */
  amplitude?: number;
  /** Show wireframe mesh lines (default: true) */
  wireframe?: boolean;
  /** Show floating particle points (default: true) */
  showParticles?: boolean;
  /** Size of the particle dots (default: 5) */
  particleSize?: number;
  /** Grid segments resolution (default: 70) */
  resolution?: number;
  /** Enable mouse interactive sways and ripples (default: true) */
  mouseInteraction?: boolean;
  /** Background color override (default: transparent) */
  backgroundColor?: string;
  /** Wave opacity (default: 0.6) */
  opacity?: number;
  /** Camera X coordinate (default: 0) */
  cameraX?: number;
  /** Camera Y coordinate (default: 160) */
  cameraY?: number;
  /** Camera Z coordinate (default: 250) */
  cameraZ?: number;
}

// Circular sprite for the particles — a square point texture reads as pixels.
const createCircleTexture = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.8)");
    gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.2)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
  }
  return new THREE.CanvasTexture(canvas);
};

export const AnimatedWave: React.FC<AnimatedWaveProps> = ({
  className,
  colorFrom = "#6366f1",
  colorTo = "#06b6d4",
  speed = 0.8,
  amplitude = 25,
  wireframe = true,
  showParticles = true,
  particleSize = 5,
  resolution = 70,
  mouseInteraction = true,
  backgroundColor = "transparent",
  opacity = 0.6,
  cameraX = 0,
  cameraY = 160,
  cameraZ = 250,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLFailed, setWebGLFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respect reduced-motion: a full-bleed animated 3D field is exactly the kind
    // of thing that setting exists for. Render nothing rather than a still frame,
    // so we also skip the per-frame vertex work entirely.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 3000);
    camera.position.set(cameraX, cameraY, cameraZ);
    camera.lookAt(0, 0, 0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, precision: "mediump" });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);
    } catch (e) {
      // Deferred a tick: setState synchronously inside an effect body triggers a
      // cascading render, and the lint rule that catches it is right to.
      console.error("WebGL initialization failed", e);
      queueMicrotask(() => setWebGLFailed(true));
      return;
    }

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const pointLight = new THREE.PointLight(0xffffff, 0.8, 1000);
    pointLight.position.set(0, 300, 200);
    scene.add(pointLight);

    const gridSize = resolution;
    const gridSpacing = 45;

    const geometry = new THREE.BufferGeometry();
    const count = gridSize * gridSize;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const cFrom = new THREE.Color(colorFrom);
    const cTo = new THREE.Color(colorTo);
    const mixed = new THREE.Color();

    let index = 0;
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        positions[index] = (x - gridSize / 2) * gridSpacing;
        positions[index + 1] = 0;
        positions[index + 2] = (y - gridSize / 2) * gridSpacing;

        mixed.lerpColors(cFrom, cTo, x / gridSize);
        colors[index] = mixed.r;
        colors[index + 1] = mixed.g;
        colors[index + 2] = mixed.b;

        index += 3;
      }
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const disposables: { dispose(): void }[] = [geometry];

    if (wireframe) {
      const indices: number[] = [];
      for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
          const currentIdx = x * gridSize + y;
          if (x < gridSize - 1) indices.push(currentIdx, (x + 1) * gridSize + y);
          if (y < gridSize - 1) indices.push(currentIdx, x * gridSize + (y + 1));
        }
      }
      geometry.setIndex(indices);

      const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: opacity * 0.4,
        blending: THREE.NormalBlending,
      });
      disposables.push(lineMaterial);
      scene.add(new THREE.LineSegments(geometry, lineMaterial));
    }

    if (showParticles) {
      const sprite = createCircleTexture();
      const pointsMaterial = new THREE.PointsMaterial({
        size: particleSize,
        vertexColors: true,
        transparent: true,
        opacity,
        sizeAttenuation: true,
        map: sprite,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      disposables.push(sprite, pointsMaterial);
      scene.add(new THREE.Points(geometry, pointsMaterial));
    }

    const noise2D = createNoise2D();
    const clock = new THREE.Clock();

    const mouse = new THREE.Vector2(0, 0);
    const targetMouse = new THREE.Vector3(0, 0, 0);
    const raycaster = new THREE.Raycaster();
    const planeXZ = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    if (mouseInteraction) container.addEventListener("mousemove", onMouseMove);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (!w || !h) continue;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    });
    resizeObserver.observe(container);

    // Only animate while the hero is actually on screen — this loop rewrites
    // ~4,900 vertices a frame and would otherwise keep running down the page.
    let onScreen = true;
    const io = new IntersectionObserver(([e]) => {
      onScreen = e.isIntersecting;
      if (onScreen && !animationFrameId) animationFrameId = requestAnimationFrame(animate);
    });
    io.observe(container);

    const targetCamera = new THREE.Vector3(cameraX, cameraY, cameraZ);

    let animationFrameId = 0;
    const animate = () => {
      animationFrameId = onScreen ? requestAnimationFrame(animate) : 0;
      const time = clock.getElapsedTime() * speed;

      if (mouseInteraction) {
        raycaster.setFromCamera(mouse, camera);
        raycaster.ray.intersectPlane(planeXZ, targetMouse);

        targetCamera.x = cameraX + mouse.x * 90;
        targetCamera.y = cameraY + mouse.y * 50;
        camera.position.x += (targetCamera.x - camera.position.x) * 0.05;
        camera.position.y += (targetCamera.y - camera.position.y) * 0.05;
        camera.lookAt(0, -30, 0);
      }

      const posArray = geometry.attributes.position.array as Float32Array;
      let idx = 0;
      for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
          const posX = posArray[idx];
          const posZ = posArray[idx + 2];

          const n1 = noise2D(posX * 0.0004, posZ * 0.0004 + time) * amplitude;
          const n2 =
            Math.sin(posX * 0.001 + time * 2) * Math.cos(posZ * 0.001 + time) * (amplitude * 0.4);
          let height = n1 + n2;

          if (mouseInteraction) {
            const dx = posX - targetMouse.x;
            const dz = posZ - targetMouse.z;
            const dist = Math.sqrt(dx * dx + dz * dz);
            if (dist < 280) {
              height += Math.sin(dist * 0.04 - time * 6) * (amplitude * 1.5) * (1 - dist / 280);
            }
          }

          posArray[idx + 1] = height;
          idx += 3;
        }
      }

      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      io.disconnect();
      if (mouseInteraction) container.removeEventListener("mousemove", onMouseMove);

      // The original only disposed the geometry, which leaks the materials, the
      // sprite texture and the GL context on every remount.
      for (const d of disposables) d.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, [
    colorFrom,
    colorTo,
    speed,
    amplitude,
    wireframe,
    showParticles,
    particleSize,
    resolution,
    mouseInteraction,
    opacity,
    cameraX,
    cameraY,
    cameraZ,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 z-0 h-full w-full select-none overflow-hidden",
        !mouseInteraction && "pointer-events-none",
        className,
      )}
      style={{ backgroundColor }}
    >
      {webGLFailed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <p className="text-sm font-semibold text-[var(--ink)]">WebGL not available</p>
          <p className="mt-1 max-w-xs text-xs text-[var(--ink-muted)]">
            Enable hardware acceleration to see the animated background.
          </p>
        </div>
      )}
    </div>
  );
};

export default AnimatedWave;
