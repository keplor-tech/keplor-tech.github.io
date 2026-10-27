"use client";

import { useReducedMotion as useRm } from "@/lib/motion";

/**
 * GlassPanel - selective glass surface with backdrop-filter, translucent fill,
 * and a subtle border. Intended for the sticky header, small floating controls,
 * and limited highlight panels. NOT applied to every card.
 */

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "aside";
}

export function GlassPanel({
  children,
  className = "",
  as: Comp = "div",
}: GlassPanelProps) {
  const reducedMotion = useRm();

  return (
    <div
      className={`glass-panel ${className}`}
      style={{
        opacity: reducedMotion ? 1 : 0,
        transition: reducedMotion ? "none" : "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}
