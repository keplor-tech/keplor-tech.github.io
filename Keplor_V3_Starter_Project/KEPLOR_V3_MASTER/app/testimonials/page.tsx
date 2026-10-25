import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";
export const metadata: Metadata = { title: "Testimonials" };
export default function TestimonialsPage() {
 return <><PageHero label="CLIENT PERSPECTIVES" title="Trust is earned through the work." description="Strong partnerships are built through clear communication, thoughtful decisions, and delivery that respects the problem."/><section className="page-content"><div className="container"><div className="empty-state"><h2>Verified feedback will appear here.</h2><p>We do not publish fabricated testimonials, anonymous endorsements, or unverified customer claims. This page will be updated when approved feedback is available.</p></div></div></section></>;
}
