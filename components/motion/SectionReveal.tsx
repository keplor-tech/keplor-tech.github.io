'use client';

import { useEffect, useRef, useState } from 'react';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export function SectionReveal({ children, className, threshold = 0.14, once = true }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (reduce) {
              setVisible(true);
            } else {
              const children = element.querySelectorAll('.reveal');
              children.forEach((el, i) => {
                (el as HTMLElement).style.transitionDelay = `${Math.min(i * 55, 260)}ms`;
                requestAnimationFrame(() => {
                  el.classList.add('visible');
                });
              });
            }
            if (once) {
              io.unobserve(element);
            }
          } else if (!once && !reduce) {
            // Reverse naturally when scrolling upward
            setVisible(false);
            element.querySelectorAll('.reveal.visible').forEach((el) => {
              el.classList.remove('visible');
            });
          }
        });
      },
      { threshold }
    );

    io.observe(element);
    return () => io.disconnect();
  }, [threshold, once]);

  return (
    <div ref={ref} className={`reveal-container ${inView ? 'in-view' : ''} ${className ?? ''}`}>
      {children}
    </div>
  );
}
