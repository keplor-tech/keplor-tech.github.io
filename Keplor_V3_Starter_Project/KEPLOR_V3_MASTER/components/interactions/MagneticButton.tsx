"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, useReducedMotion as useRm } from "framer-motion";
import Link from "next/link";
import { spring } from "@/lib/motion";

/**
 * MagneticButton - a button with a subtle magnetic pointer response on desktop.
 *
 * On pointer move near the button, it gently pulls toward the cursor. On
 * touch devices and with reduced motion, the effect is disabled. Focus-visible
 * and pressed states are preserved.
 */

interface MagneticButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({
  href,
  children,
  className = "",
  strength = 0.4,
  ...props
}: MagneticButtonProps) {
  const reducedMotion = useRm();
  const ref = useRef<HTMLDivElement>(null);
  const isLink = !!href;

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (reducedMotion || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = (e.clientX - centerX) * strength;
      const dy = (e.clientY - centerY) * strength;
      ref.current.style.transform = `translate(${dx}px, ${dy}px)`;
    },
    [reducedMotion, strength]
  );

  const handleMouseLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = "";
      ref.current.style.transition = "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)";
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave, reducedMotion]);

  const linkProps = isLink ? { href } : {};
  const buttonProps = isLink ? {} : props;

  return (
    <motion.div
      ref={ref}
      className={`magnetic-button ${className}`}
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}
      whileHover={reducedMotion ? {} : { scale: 1.02 }}
      whileTap={reducedMotion ? {} : { scale: 0.96 }}
      transition={spring}
    >
      {isLink ? (
        <Link href={href} className="magnetic-button-inner">
          {children}
        </Link>
      ) : (
        <button className="magnetic-button-inner" {...buttonProps}>
          {children}
        </button>
      )}
    </motion.div>
  );
}
