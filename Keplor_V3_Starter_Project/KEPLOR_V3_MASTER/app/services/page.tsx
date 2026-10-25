import type { Metadata } from "next";
import { PageHero, ClosingCTA } from "@/components/Sections";
export const metadata: Metadata = { title: "Services" };
export default function Page() {
  return <><PageHero label="SERVICES" title="The right tools for the problem at hand." description="A connected set of disciplines for exploring, building, and improving digital systems. Scope is defined around each project's requirements." /><section className="page-content"><div className="container content-prose"><h2>AI & Machine Learning</h2><p>Predictive analytics, natural language processing, computer vision, recommendation systems, and automation where they create practical value.</p><h2>Custom Software Development</h2><p>Purpose-built web experiences, mobile applications, and business systems tailored to real workflows.</p><h2>Cloud Solutions</h2><p>Cloud application development and infrastructure planning focused on maintainability, reliability, and growth.</p><h2>Research & Analytics</h2><p>Data science, visualization, reporting, data processing, and research-led model development.</p></div></section><ClosingCTA /></>;
}
