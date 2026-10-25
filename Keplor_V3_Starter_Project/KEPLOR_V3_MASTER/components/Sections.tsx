import Link from "next/link";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}
export function PageHero({ label, title, description }: { label: string; title: string; description: string }) {
  return <section className="page-hero"><div className="container reveal"><Eyebrow>{label}</Eyebrow><h1>{title}</h1><p>{description}</p></div></section>;
}
export function ClosingCTA() {
  return <section className="closing-cta"><div className="container"><Eyebrow>Have a problem worth solving?</Eyebrow><h2>Let’s build something that moves you forward.</h2><p>Start with the challenge. We’ll work through the right solution together.</p><Link className="button" href="/contact/">Discuss a project <span aria-hidden="true">↗</span></Link></div></section>;
}
export const services = [
  { n:"01", title:"AI & Machine Learning", body:"Predictive analytics, language and vision systems, recommendations, and practical automation shaped around a defined business need." },
  { n:"02", title:"Custom Software", body:"Purpose-built web applications and digital systems designed around the way your teams and customers work." },
  { n:"03", title:"Cloud Solutions", body:"Cloud-ready applications and infrastructure planning focused on resilience, maintainability, and responsible scale." },
  { n:"04", title:"Research & Analytics", body:"Data workflows, visualization, reporting, and research-led model development to make complex information more useful." }
];
export function ServiceList() {
  return <div className="service-list">{services.map(s=><article className="service-row" key={s.n}><span className="service-num">{s.n}</span><h3>{s.title}</h3><p>{s.body}</p><span className="service-arrow" aria-hidden="true">↗</span></article>)}</div>;
}
