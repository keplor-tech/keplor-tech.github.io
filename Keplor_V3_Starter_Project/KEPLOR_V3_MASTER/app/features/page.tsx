import type { Metadata } from "next";
import { PageHero, ClosingCTA } from "@/components/Sections";
export const metadata: Metadata = { title: "Capabilities" };
export default function Page() {
  return <><PageHero label="CAPABILITIES" title="A thoughtful system, not a feature checklist." description="Our capabilities are assembled around the problem, team, and operating context. The right combination is determined during discovery." /><section className="page-content"><div className="container content-prose"><h2>Applied intelligence</h2><p>Explore where models, automation, or predictive methods can improve a specific workflow.</p><h2>Software shaped to context</h2><p>Build around user needs, operational constraints, and maintainable architecture.</p><h2>Data into decisions</h2><p>Create clearer paths from raw information to analysis, visualization, and action.</p><h2>Cloud-aware engineering</h2><p>Consider deployment, scaling, security, and ongoing ownership as part of system design.</p></div></section><ClosingCTA /></>;
}
