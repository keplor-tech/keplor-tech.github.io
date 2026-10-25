'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Prototype-faithful ambient: one diffuse wash layer driven by a single
 * shared pointer listener + rAF-throttled scroll drift. No per-section listeners.
 */
export function Ambient() {
  const reduced = useReducedMotion();
  const washRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduced) return;
    const wash = washRef.current;
    if (!wash) return;

    let raf = 0;
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

    const applyScroll = () => {
      const y = window.scrollY;
      wash.style.transform = `translate3d(calc(var(--mx, 0px) + ${Math.sin(y * 0.0007) * 9}px), calc(var(--my, 0px) + ${-y * 0.055}px), 0)`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = 0; applyScroll(); });
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      pointer.tx = (e.clientX / window.innerWidth - 0.5) * 10;
      pointer.ty = (e.clientY / window.innerHeight - 0.5) * 8;
    };

    const onLeave = () => { pointer.tx = 0; pointer.ty = 0; };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const dx = pointer.tx - pointer.x;
      const dy = pointer.ty - pointer.y;
      if (Math.abs(dx) > 0.05 || Math.abs(dy) > 0.05) {
        pointer.x += dx * 0.06;
        pointer.y += dy * 0.06;
        wash.style.setProperty('--mx', `${pointer.x.toFixed(2)}px`);
        wash.style.setProperty('--my', `${pointer.y.toFixed(2)}px`);
        applyScroll();
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [reduced]);

  return (
    <div className="ambient" aria-hidden="true">
      <div ref={washRef} className="ambient__wash" />
    </div>
  );
}
