"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion as useRm } from "@/lib/motion";

/**
 * ProcessFilament - reveals as the process section enters view.
 *
 * A subtle vertical line that fills in as the user scrolls through the process
 * section. Respects reduced motion and cleans up its observer on unmount.
 */

export function ProcessFilament({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reducedMotion = useRm();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -15% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <motion.div
      ref={ref}
      className={`process-filament ${className}`}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: visible ? 1 : 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "bottom" }}
    />
  );
}
