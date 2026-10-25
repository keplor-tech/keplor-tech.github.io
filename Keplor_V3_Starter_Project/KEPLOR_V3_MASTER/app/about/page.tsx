import type { Metadata } from "next";
import { PageHero, ClosingCTA } from "@/components/Sections";
export const metadata: Metadata = { title: "About Keplor" };
export default function Page() {
  return <><PageHero label="ABOUT KEPLOR" title="Build with purpose. Think beyond the obvious." description="We bring research, design, and engineering together to help solve meaningful problems with intelligent technology." /><section className="page-content"><div className="container content-prose"><h2>Our mission</h2><p>Help organizations use AI, machine learning, and software to improve how they understand problems, make decisions, and deliver useful services.</p><h2>Our vision</h2><p>Contribute to a future where intelligent, scalable, data-informed systems help people and organizations do better work.</p><h2>Our approach</h2><p>Start with context. Make the problem explicit. Choose technology for a reason. Build in reviewable steps, validate assumptions, and keep the outcome in view.</p></div></section><ClosingCTA /></>;
}
