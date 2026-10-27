"use client";

import { MotionConfig } from "framer-motion";
import SiteShell from "@/components/SiteShell";
import LenisWrapper from "@/components/LenisWrapper";
import { useReducedMotion, motionConfig } from "@/lib/motion";

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();
  return (
    <MotionConfig {...motionConfig(reducedMotion)}>
      <LenisWrapper>
        <SiteShell>{children}</SiteShell>
      </LenisWrapper>
    </MotionConfig>
  );
}
