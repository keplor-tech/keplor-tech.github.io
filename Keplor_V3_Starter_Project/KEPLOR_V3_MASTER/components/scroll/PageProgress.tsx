"use client";

import { useEffect, useState, useCallback } from "react";

/**
 * PageProgress - thin page-progress indicator.
 *
 * Shows scroll progress as a thin line at the top of the page. Respects
 * reduced motion (no animation) and uses requestAnimationFrame for efficiency.
 */

export function PageProgress({ className = "" }: { className?: string }) {
  const [progress, setProgress] = useState(0);

  const onScroll = useCallback(() => {
    const win = window;
    const doc = document.documentElement;
    const top = win.pageYOffset || doc.scrollTop;
    const max = doc.scrollHeight - win.innerHeight;
    setProgress(max ? top / max : 0);
  }, []);

  useEffect(() => {
    let raf: number;
    const loop = () => {
      onScroll();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [onScroll]);

  return (
    <div
      className={`page-progress ${className}`}
      style={{ transform: `scaleX(${progress})`, transformOrigin: "left" }}
      aria-hidden="true"
    />
  );
}
