"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { spring, useReducedMotion as useRm } from "@/lib/motion";

/**
 * DirectionalArrow - a button with a directional arrow that moves on hover.
 *
 * Desktop: arrow translates slightly on hover/press for a directional feel.
 * Touch / reduced motion: minimal movement, focus-visible preserved.
 */

interface DirectionalArrowProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  label: string;
  direction?: "next" | "prev";
}

export function DirectionalArrow({
  href,
  label,
  direction = "next",
  className = "",
  ...props
}: DirectionalArrowProps) {
  const reducedMotion = useRm();
  const isLink = !!href;

  const hover = reducedMotion ? {} : { x: direction === "next" ? 6 : -6 };
  const press = reducedMotion ? {} : { x: direction === "next" ? 3 : -3 };

  const arrow = (
    <motion.span
      className="arrow-button"
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--color-violet)", fontSize: "1.25rem", lineHeight: 1 }}
      whileHover={hover}
      whileTap={press}
      transition={spring}
    >
      →
    </motion.span>
  );

  return (
    <div className={`directional-arrow ${className}`} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <motion.span
        className="arrow-label"
        style={{ display: "inline-block" }}
        whileHover={hover}
        whileTap={press}
        transition={spring}
      >
        {label}
      </motion.span>
      {isLink ? (
        <Link href={href} className="arrow-button" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--color-violet)", fontSize: "1.25rem", lineHeight: 1 }}>
          {arrow}
        </Link>
      ) : (
        <button className="arrow-button" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--color-violet)", fontSize: "1.25rem", lineHeight: 1 }} {...props}>
          {arrow}
        </button>
      )}
    </div>
  );
}
