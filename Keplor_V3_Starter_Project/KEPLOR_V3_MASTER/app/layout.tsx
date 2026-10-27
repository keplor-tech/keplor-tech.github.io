import type { Metadata } from "next";
import "./globals.css";
import ClientRoot from "@/components/ClientRoot";

export const metadata: Metadata = {
  title: { default: "Keplor — Intelligent systems, thoughtfully built", template: "%s — Keplor" },
  description: "Keplor works across AI, machine learning and custom software to help businesses build thoughtful, scalable digital systems.",
  metadataBase: new URL("https://www.keplor.tech"),
  openGraph: {
    title: "Keplor — Intelligent systems, thoughtfully built",
    description: "AI, machine learning and custom software solutions.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><ClientRoot>{children}</ClientRoot></body></html>;
}
