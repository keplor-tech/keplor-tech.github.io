"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

export function HeroLede({ children, className = "", ...props }: { children: React.ReactNode; className?: string; [key: string]: unknown }) {
  return (
    <motion.p
      className={`hero-lede ${className}`}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {children}
    </motion.p>
  );
}
