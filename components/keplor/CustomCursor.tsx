'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export function CustomCursor() {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [label, setLabel] = useState('');
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [targetX, setTargetX] = useState(0);
  const [targetY, setTargetY] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Spring-damped cursor tracking
  useEffect(() => {
    if (reduced || !mounted) return;

    const handleMove = (e: MouseEvent) => {
      setTargetX(e.clientX);
      setTargetY(e.clientY);
    };

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement | null;
      const labelText = target?.closest('[data-cursor]') as HTMLElement | null;
      const cursorLabel = labelText?.dataset.cursor;
      if (cursorLabel) {
        setIsActive(true);
        setLabel(cursorLabel);
      }
    };

    const handleMouseOut = () => {
      setIsActive(false);
      setLabel('');
    };

    const loop = () => {
      const dx = targetX - x;
      const dy = targetY - y;
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        setX((prev) => prev + dx * 0.18);
        setY((prev) => prev + dy * 0.18);
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    document.addEventListener('pointermove', handleMove as EventListener, { passive: true });
    document.addEventListener('mouseover', handleMouseOver as EventListener, true);
    document.addEventListener('mouseout', handleMouseOut as EventListener, true);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.removeEventListener('pointermove', handleMove as EventListener);
      document.removeEventListener('mouseover', handleMouseOver as EventListener);
      document.removeEventListener('mouseout', handleMouseOut as EventListener);
    };
  }, [reduced, mounted, x, y, targetX, targetY]);

  if (reduced || !mounted) return null;

  // Only show on fine-pointer devices
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;
  if (!isFinePointer) return null;

  return (
    <div
      className={`custom-cursor ${isActive ? 'custom-cursor--active' : ''}`}
      style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
    >
      <div className="custom-cursor__dot" />
      <div className="custom-cursor__label">{label}</div>
    </div>
  );
}
