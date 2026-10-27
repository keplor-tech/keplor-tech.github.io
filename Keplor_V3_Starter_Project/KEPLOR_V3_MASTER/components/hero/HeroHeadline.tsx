"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

export function HeroHeadline({ children, className = "", ...props }: { children: React.ReactNode; className?: string; [key: string]: unknown }) {
  return (
    <motion.h1
      className={`hero-headline ${className}`}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {children}
    </motion.h1>
  );
}
