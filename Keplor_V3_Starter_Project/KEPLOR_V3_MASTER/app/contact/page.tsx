import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";
export const metadata: Metadata = { title: "Contact" };
export default function ContactPage() {
 return <><PageHero label="CONTACT" title="Start with the problem." description="Tell us what you’re trying to solve, what you’ve considered, and what a useful outcome would look like."/><section className="page-content"><div className="container"><div className="empty-state"><h2>Let’s begin a conversation.</h2><p>This starter site does not yet have a configured contact inbox or form backend. Before launch, add a verified contact method or connect a form provider and test it end-to-end. Do not publish an invented email address or imply that a message has been sent.</p></div></div></section></>;
}
