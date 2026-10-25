'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <motion.div
      className={className}
      initial={mounted && !reduced ? { opacity: 0, y: 20 } : false}
      whileInView={mounted && !reduced ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function HeadlineMaskReveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.div
      className={`headline-mask ${className}`}
      initial={mounted && !reduced ? { opacity: 0, y: 24 } : false}
      whileInView={mounted && !reduced ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="headline-mask__line">{children}</span>
    </motion.div>
  );
}
