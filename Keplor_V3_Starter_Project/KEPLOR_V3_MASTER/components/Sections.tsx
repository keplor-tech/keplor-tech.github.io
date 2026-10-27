import Link from "next/link";
import { motion } from "framer-motion";

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`eyebrow ${className}`}>{children}</div>;
}

export function PageHero({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <section className="page-hero">
      <div className="container reveal">
        <Eyebrow>{label}</Eyebrow>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

export function ClosingCTA() {
  return (
    <section className="closing-cta">
      <div className="container">
        <Eyebrow>Have a problem worth solving?</Eyebrow>
        <h2>Let's build something that moves you forward.</h2>
        <p>Start with the challenge. We'll work through the right solution together.</p>
        <Link className="button lg" href="/contact/">
          Discuss a project <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

export const services = [
  { n: "01", title: "AI & Machine Learning", body: "Predictive analytics, language and vision systems, recommendations, and practical automation shaped around a defined business need." },
  { n: "02", title: "Custom Software", body: "Purpose-built web applications and digital systems designed around the way your teams and customers work." },
  { n: "03", title: "Cloud Solutions", body: "Cloud-ready applications and infrastructure planning focused on resilience, maintainability, and responsible scale." },
  { n: "04", title: "Research & Analytics", body: "Data workflows, visualization, reporting, and research-led model development to make complex information more useful." }
];

export function ServiceList() {
  return (
    <div className="service-list">
      {services.map(s => (
        <article className="service-row" key={s.n}>
          <span className="service-num">{s.n}</span>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
          <span className="service-arrow" aria-hidden="true">→</span>
        </article>
      ))}
    </div>
  );
}

// New components for homepage
export function PositioningSection() {
  return (
    <section className="section" aria-labelledby="positioning-heading">
      <div className="container">
        <div className="section-head">
          <div className="section-index">
            <span>01</span>
            <span>POSITIONING</span>
          </div>
          <div>
            <h2 id="positioning-heading" className="section-title">
              Technology should make the complex feel <em>clear</em>.
            </h2>
            <p className="section-intro">
              Good systems begin with understanding the problem, the people around it, and the outcome that matters. We bring research, design, and engineering into one thoughtful process—so every decision has a reason, and every layer serves a purpose.
            </p>
          </div>
        </div>
        <div className="grid-3 stagger-children">
          <article className="card">
            <div className="icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3>Research-led</h3>
            <p>We start by mapping the real problem space—constraints, stakeholders, success criteria—before writing a line of code.</p>
          </article>
          <article className="card">
            <div className="icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 9h6v6H9z" />
              </svg>
            </div>
            <h3>Design-first</h3>
            <p>Experience and architecture are shaped together. Interfaces, data flows, and system boundaries are resolved before implementation.</p>
          </article>
          <article className="card">
            <div className="icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3>Engineering rigor</h3>
            <p>Production-minded from day one. Clean architecture, observable systems, and maintainable code that scales with your organization.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function ServicePillarsSection() {
  return (
    <section className="section" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-head">
          <div className="section-index">
            <span>02</span>
            <span>WHAT WE DO</span>
          </div>
          <div>
            <h2 id="services-heading" className="section-title">
              Four disciplines. <em>One connected approach.</em>
            </h2>
            <p className="section-intro">
              From early exploration to production-minded software, the work is shaped around your context—not a one-size-fits-all stack. Each pillar reinforces the others.
            </p>
          </div>
        </div>
        <div className="service-list">
          {services.map(s => (
            <article className="service-row" key={s.n}>
              <span className="service-num">{s.n}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
              <span className="service-arrow" aria-hidden="true">→</span>
            </article>
          ))}
        </div>
        <p style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <Link className="button secondary" href="/services/">
            Explore services <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}

export function CapabilitiesSection() {
  const capabilities = [
    { title: "ML Model Development", desc: "End-to-end model lifecycle—data preparation, training, evaluation, deployment, and monitoring.", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    )},
    { title: "Natural Language Processing", desc: "Language understanding, generation, classification, and retrieval systems for real-world text data.", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 17H20" />
        <path d="M4 14.5A2.5 2.5 0 0 1 6.5 12H20" />
        <path d="M6.5 12H20" />
      </svg>
    )},
    { title: "Computer Vision", desc: "Object detection, segmentation, classification, and visual inspection pipelines for images and video.", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    )},
    { title: "Recommendation Systems", desc: "Personalization, ranking, and discovery engines that adapt to user behavior and business goals.", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    )},
    { title: "Custom Web Applications", desc: "Full-stack applications with thoughtful UX, robust APIs, and maintainable architecture.", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    )},
    { title: "API Design & Integration", desc: "REST, GraphQL, and event-driven architectures that connect systems reliably.", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14M5 12h14" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )},
    { title: "Cloud Infrastructure", desc: "AWS, GCP, Azure—infrastructure as code, container orchestration, and cost-aware scaling.", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 12 20h8a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2z" />
        <path d="M12 18v-4M12 14v-4" />
      </svg>
    )},
    { title: "Data Engineering", desc: "Pipelines, warehouses, streaming, and governance for trustworthy analytics and ML.", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )},
    { title: "Analytics & Visualization", desc: "Dashboards, reports, and exploratory tools that turn data into decisions.", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    )},
  ];

  return (
    <section className="section" aria-labelledby="capabilities-heading">
      <div className="container">
        <div className="section-head">
          <div className="section-index">
            <span>03</span>
            <span>CAPABILITIES</span>
          </div>
          <div>
            <h2 id="capabilities-heading" className="section-title">
              Deep capability across the <em>full stack</em> of intelligent systems.
            </h2>
            <p className="section-intro">
              These are the technical domains we work in daily. Not buzzwords—battle-tested expertise applied to your specific constraints.
            </p>
          </div>
        </div>
        <div className="grid-auto stagger-children">
          {capabilities.map((cap, i) => (
            <article className="card capability-card" key={i}>
              <div className="icon" aria-hidden="true">{cap.icon}</div>
              <h3>{cap.title}</h3>
              <p>{cap.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    { n: "01", title: "Understand", desc: "Define the real problem, context, constraints, and desired outcome through stakeholder interviews, data audits, and technical discovery." },
    { n: "02", title: "Design", desc: "Shape the experience and architecture—user flows, system boundaries, data models, and interface concepts—before committing to the build." },
    { n: "03", title: "Build", desc: "Develop the system in clear, reviewable increments. Continuous integration, automated testing, and observable deployments from day one." },
    { n: "04", title: "Validate", desc: "Test assumptions against reality. A/B experiments, shadow evaluations, load testing, and iterative refinement against success metrics." },
  ];

  return (
    <section className="section" aria-labelledby="process-heading">
      <div className="container">
        <div className="section-head">
          <div className="section-index">
            <span>04</span>
            <span>PROCESS</span>
          </div>
          <div>
            <h2 id="process-heading" className="section-title">
              Move from uncertainty to a <em>system you can trust</em>.
            </h2>
            <p className="section-intro">
              A clear process keeps decisions grounded, makes trade-offs visible, and gives every phase a purpose. This is how we consistently deliver.
            </p>
          </div>
        </div>
        <div className="approach-grid stagger-children">
          {steps.map(step => (
            <article className="approach-step" key={step.n}>
              <span>{step.n} / PROCESS</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  const industries = [
    "Healthcare & Life Sciences",
    "Financial Services",
    "Education & EdTech",
    "Retail & E-Commerce",
    "Manufacturing & Logistics",
    "Public Sector",
    "Media & Entertainment",
    "Professional Services"
  ];

  return (
    <section className="section" aria-labelledby="industries-heading">
      <div className="container">
        <div className="section-head">
          <div className="section-index">
            <span>05</span>
            <span>INDUSTRIES</span>
          </div>
          <div>
            <h2 id="industries-heading" className="section-title">
              Built around <em>real-world contexts</em>.
            </h2>
            <p className="section-intro">
              Our work supports teams across sectors, with scope and safeguards shaped to each environment's regulatory, technical, and human constraints.
            </p>
          </div>
        </div>
        <div className="industry-list stagger-children">
          {industries.map((industry, i) => (
            <span className="industry-chip" key={i}>{industry}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EngagementSection() {
  const models = [
    { title: "Project-Based", desc: "Defined scope, timeline, and deliverables. Ideal for greenfield builds, migrations, and feature initiatives with clear boundaries.", details: ["Fixed timeline & budget", "Dedicated team", "Clear milestones", "Knowledge transfer included"] },
    { title: "Retainer Partnership", desc: "Ongoing capacity for continuous discovery, development, and evolution. Best for long-term product ownership and platform growth.", details: ["Monthly capacity commitment", "Priority scheduling", "Strategic advisory included", "Flexible scope adjustment"] },
    { title: "Technical Advisory", desc: "Senior guidance on architecture, technology selection, team structure, and AI strategy. For leaders who need an experienced sounding board.", details: ["Fractional CTO/VP Eng level", "Architecture reviews", "Vendor evaluation", "Team mentoring"] },
  ];

  return (
    <section className="section" aria-labelledby="engagement-heading">
      <div className="container">
        <div className="section-head">
          <div className="section-index">
            <span>06</span>
            <span>ENGAGEMENT</span>
          </div>
          <div>
            <h2 id="engagement-heading" className="section-title">
              Work together in a way that <em>fits your reality</em>.
            </h2>
            <p className="section-intro">
              We structure engagements around your stage, budget, and internal capacity. No rigid templates—just the right model for the work at hand.
            </p>
          </div>
        </div>
        <div className="grid-3 stagger-children">
          {models.map((model, i) => (
            <article className="card" key={i}>
              <h3>{model.title}</h3>
              <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem", lineHeight: 1.7 }}>{model.desc}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {model.details.map((detail, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: ".75rem", color: "var(--color-text-dim)", fontSize: "var(--text-sm)" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--color-violet)", flexShrink: 0 }} />
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FieldNotesSection() {
  return (
    <section className="section" aria-labelledby="fieldnotes-heading">
      <div className="container">
        <div className="section-head">
          <div className="section-index">
            <span>07</span>
            <span>FIELD NOTES</span>
          </div>
          <div>
            <h2 id="fieldnotes-heading" className="section-title">
              Ideas are better when <em>they're shared</em>.
            </h2>
            <p className="section-intro">
              We're building a space for practical thinking on AI, software, research, and the choices that shape useful technology. Real articles coming soon.
            </p>
          </div>
        </div>
        <div className="empty-state">
          <div className="icon" aria-hidden="true">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <h3>Field Notes is coming soon</h3>
          <p>We're writing about the problems we solve, the tools we build, and the lessons we learn. Subscribe to be the first to read.</p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="button secondary" href="/blog/">Visit the archive</Link>
            <button className="button ghost" style={{ border: "1px solid var(--color-line)", padding: ".85rem 1.5rem" }}>
              Notify me <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
