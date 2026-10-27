"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

export function HeroEyebrow({ children, className = "", ...props }: { children: React.ReactNode; className?: string; [key: string]: unknown }) {
  return (
    <motion.div
      className={`eyebrow ${className}`}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {children}
    </motion.div>
  );
}
