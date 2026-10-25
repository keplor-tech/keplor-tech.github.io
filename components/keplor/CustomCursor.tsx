'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export function CustomCursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState('');
  const ringRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: -100, y: -100, tx: -100, ty: -100 });
  const raf = useRef(0);

  useEffect(() => {
    if (reduced) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: PointerEvent) => {
      pos.current.tx = e.clientX;
      pos.current.ty = e.clientY;
    };

    const onOver = (e: Event) => {
      const el = (e.target as HTMLElement | null)?.closest('[data-cursor]') as HTMLElement | null;
      if (el) {
        setActive(true);
        setLabel(el.dataset.cursor ?? '');
      } else {
        setActive(false);
        setLabel('');
      }
    };

    const tick = () => {
      raf.current = requestAnimationFrame(tick);
      const p = pos.current;
      p.x += (p.tx - p.x) * 0.16;
      p.y += (p.ty - p.y) * 0.16;
      const el = ringRef.current;
      if (el) el.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, -50%)`;
    };

    raf.current = requestAnimationFrame(tick);
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, true);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('mouseover', onOver, true);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={ringRef} className={`custom-cursor${active ? ' custom-cursor--active' : ''}`} aria-hidden="true">
      <span className="custom-cursor__dot" />
      <span className="custom-cursor__label">{label}</span>
    </div>
  );
}
