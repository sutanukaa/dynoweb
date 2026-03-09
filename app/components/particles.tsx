'use client';

import { useEffect, useRef } from 'react';

interface ParticlesProps {
  className?: string;
  style?: React.CSSProperties;
  quantity?: number;
  color?: string;
  ease?: number;
  staticity?: number;
  size?: number;
}

export const Particles: React.FC<ParticlesProps> = ({
  className = '',
  style = {},
  quantity = 30,
  color = '#ffffff',
  ease = 500,
  staticity = 200,
  size = 0.5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Parse color to RGB
    const parseColor = (c: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = 1;
      const ctx = canvas.getContext('2d');
      if (!ctx) return [255, 255, 255];
      ctx.fillStyle = c;
      ctx.fillRect(0, 0, 1, 1);
      const imageData = ctx.getImageData(0, 0, 1, 1).data;
      return [imageData[0], imageData[1], imageData[2]];
    };

    const [r, g, b] = parseColor(color);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      size: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5; // Slow movement
        this.vy = (Math.random() - 0.5) * 0.5; // Slow movement
        this.alpha = Math.random() * 0.5 + 0.3;
        this.size = size + Math.random() * 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;

        // Slowly oscillate alpha
        this.alpha += (Math.random() - 0.5) * 0.02;
        this.alpha = Math.max(0.1, Math.min(0.8, this.alpha));
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < quantity; i++) {
      particles.push(new Particle());
    }

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [quantity, color, size]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={style}
    />
  );
};
