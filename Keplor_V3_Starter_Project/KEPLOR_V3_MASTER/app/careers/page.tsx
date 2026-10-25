import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";
import Link from "next/link";
export const metadata: Metadata = { title: "Careers" };
export default function CareersPage() {
 return <><PageHero label="CAREERS" title="Make room for better questions." description="We value curiosity, careful thinking, and the craft of building useful technology."/><section className="page-content"><div className="container"><div className="empty-state"><h2>No open roles are listed right now.</h2><p>We’ll publish opportunities here when they are confirmed. We don’t list speculative openings as active jobs.</p><p style={{marginTop:"1.5rem"}}><Link className="button secondary" href="/contact/">Get in touch <span aria-hidden="true">↗</span></Link></p></div></div></section></>;
}
