"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/motion";

export function StaticPortal({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const ctx = canvasEl.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    let time = 0;

    function draw() {
      const canvas = canvasEl!;
      const context = ctx!;
      const parent = canvas.parentElement;
      const width = parent ? parent.clientWidth : 400;
      const height = parent ? parent.clientHeight : 400;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      context.fillStyle = "#050507";
      context.fillRect(0, 0, width, height);

      // Only animate if NOT reduced motion
      if (!reducedMotion) {
        time += 0.015;
      }
      
      const cx = width / 2;
      const cy = height * 0.35;
      const arcWidth = width * 0.9;
      const arcHeight = height * 0.5;

      context.globalCompositeOperation = "lighter";
      for (let x = 0; x < width; x += 6) {
        const normX = (x - cx) / (arcWidth / 2);
        const curveY = cy + normX * normX * arcHeight;
        for (let y = 0; y < height; y += 6) {
          const dist = Math.abs(y - curveY);
          const thickness = 140 + (1 - Math.abs(normX)) * 80;
          if (dist >= thickness) continue;
          let intensity = 1 - dist / thickness;
          
          // Only add wave animation if NOT reduced motion
          if (!reducedMotion) {
            const waveX = Math.sin(x * 0.015 + time);
            const waveY = Math.cos(y * 0.02 + time);
            intensity = intensity * 0.7 + waveX * waveY * 0.3 * intensity;
          }
          
          intensity *= Math.max(0, 1 - Math.pow(Math.abs(normX), 2.5));
          if (intensity <= 0.02) continue;

          const r = Math.min(255, 60 * intensity + 100 * Math.pow(intensity, 3));
          const g = Math.min(255, 20 * intensity + 60 * Math.pow(intensity, 4));
          const b = Math.min(255, 120 * intensity + 135 * Math.pow(intensity, 2));
          context.fillStyle = `rgba(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)}, ${intensity * 0.6})`;
          context.beginPath();
          context.arc(x, y, 3 * intensity, 0, Math.PI * 2);
          context.fill();
        }
      }
      context.globalCompositeOperation = "source-over";

      if (!reducedMotion) {
        animationFrame = requestAnimationFrame(draw);
      }
    }

    draw();
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={`static-portal ${className}`}
      aria-hidden="true"
      style={{ width: "100%", height: "100%", display: "block", background: "#050507" }}
    />
  );
}
