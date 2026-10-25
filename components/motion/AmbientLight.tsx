'use client';

import { useEffect, useRef, useState } from 'react';

export function AmbientLight() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scroll, setScroll] = useState(0);
  const washRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      setMouse({ x, y });
    };

    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    const update = () => {
      if (washRef.current) {
        const driftX = Math.sin(scroll * 0.0007) * 9;
        const driftY = -scroll * 0.055;
        washRef.current.style.transform = `translate3d(${driftX + mouse.x}px, ${driftY + mouse.y}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(update);
    };

    const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      window.addEventListener('pointermove', handleMove, { passive: true });
      window.addEventListener('scroll', handleScroll, { passive: true });
      rafRef.current = requestAnimationFrame(update);
    }

    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [scroll, mouse.x, mouse.y]);

  return (
    <div className="ambient-field" aria-hidden="true">
      <div ref={washRef} className="ambient-wash" />
    </div>
  );
}
