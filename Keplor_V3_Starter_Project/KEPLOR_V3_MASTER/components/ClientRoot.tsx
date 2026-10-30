"use client";

import SiteShell from "@/components/SiteShell";

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}
