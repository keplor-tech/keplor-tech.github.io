import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";
export const metadata: Metadata = { title: "Field Notes" };
export default function BlogPage() {
 return <><PageHero label="FIELD NOTES" title="Thinking in public, with care." description="Notes on AI, software, research, and the decisions that turn emerging technology into useful systems."/><section className="page-content"><div className="container"><div className="empty-state"><h2>The first notes are taking shape.</h2><p>There are no published articles here yet. We’ll add this section when there are real, reviewed pieces to share—no placeholder posts or invented publication dates.</p></div></div></section></>;
}
