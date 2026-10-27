"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

export function HeroActions({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`hero-actions ${className}`}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="hero-action-item"
        variants={staggerItem}
        initial="hidden"
        animate="visible"
      >
        <Link className="button lg" href="/contact/">
          Discuss a project <span aria-hidden="true">→</span>
        </Link>
      </motion.div>
      <motion.div
        className="hero-action-item"
        variants={staggerItem}
        initial="hidden"
        animate="visible"
      >
        <Link className="button secondary lg" href="/services/">
          Explore our services <span aria-hidden="true">→</span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
