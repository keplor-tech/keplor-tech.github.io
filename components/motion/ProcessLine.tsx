'use client';

import { useEffect, useRef, useState } from 'react';

interface ProcessLineProps {
  className?: string;
  length?: number;
  duration?: number;
}

export function ProcessLine({ className, length = 100, duration = 1.5 }: ProcessLineProps) {
  const lineRef = useRef<SVGLineElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const element = lineRef.current;
    if (!element) return;

    const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (reduce) {
              setDrawn(true);
            } else {
              const totalLength = element.getTotalLength();
              element.style.strokeDasharray = `${totalLength} ${totalLength}`;
              element.style.strokeDashoffset = `${totalLength}`;
              element.style.transition = `stroke-dashoffset ${duration}s ease-out`;
              requestAnimationFrame(() => {
                element.style.strokeDashoffset = '0';
                setDrawn(true);
              });
            }
            io.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    io.observe(element);
    return () => io.disconnect();
  }, [duration]);

  return (
    <svg
      ref={lineRef}
      className={`w-full h-[1px] block ${className ?? ''}`}
      width="100%"
      height="1"
      fill="none"
    >
      <line
        x1="0"
        y1="0.5"
        x2={length}
        y2="0.5"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        className="transition-all duration-700 ease-out"
      />
    </svg>
  );
}
