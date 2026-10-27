"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { motion, useReducedMotion as useRm } from "framer-motion";

/**
 * CardTilt - restrained card tilt effect on pointer devices only.
 *
 * - Only activates on devices with a pointer (mouse), not touch.
 * - Tilt is restrained (max ~4 degrees).
 * - Pauses/reduces offscreen rendering via IntersectionObserver.
 * - Cleans up all listeners on unmount.
 * - Respects prefers-reduced-motion (no tilt).
 */

interface CardTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export function CardTilt({
  children,
  className = "",
  maxTilt = 4,
}: CardTiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useRm();

  // Only tilt on pointer (mouse) devices, not touch
  const isPointer = window.matchMedia("(pointer: fine)").matches;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (reducedMotion || !isPointer || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * maxTilt;
      const rotateY = -((x - centerX) / centerX) * maxTilt;
      ref.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    },
    [reducedMotion, isPointer, maxTilt]
  );

  const handleMouseLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = "";
      ref.current.style.transition = "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)";
    }
  }, []);

  // Pause offscreen: only listen when the card is in/near viewport
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActive(entry.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "100px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !active || reducedMotion || !isPointer) return;
    el.addEventListener("mousemove", handleMouseMove as any);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove as any);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.style.transform = "";
    };
  }, [active, handleMouseMove, handleMouseLeave, reducedMotion, isPointer]);

  return (
    <motion.div
      ref={ref}
      className={`card-tilt ${className}`}
      whileHover={reducedMotion || !isPointer ? {} : { scale: 1.01 }}
      whileTap={reducedMotion || !isPointer ? {} : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      {children}
    </motion.div>
  );
}
