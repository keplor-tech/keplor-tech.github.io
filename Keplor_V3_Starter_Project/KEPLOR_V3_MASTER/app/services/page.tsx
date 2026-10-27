"use client";

import { useEffect, useState } from "react";
import { PageHero, ClosingCTA } from "@/components/Sections";
import { motion } from "framer-motion";

// Service data with rich content for each discipline
const serviceDetails = [
  {
    id: "ai-ml",
    number: "01",
    label: "AI & Machine Learning",
    tagline: "Models that serve decisions, not demos.",
    description: "We design, train, and deploy machine learning systems that integrate with real workflows—predictive analytics, natural language processing, computer vision, recommendation engines, and practical automation. Every model is scoped to a defined business need, evaluated against measurable criteria, and built for maintainability from day one.",
    problems: [
      "Manual decisions that could be augmented with predictive signals",
      "Unstructured text, documents, or communications at scale",
      "Visual inspection, quality control, or spatial reasoning tasks",
      "Personalization and discovery that static rules cannot capture",
      "Repetitive workflows where automation compounds value over time"
    ],
    scope: [
      "Problem framing & data audits — assess feasibility before modeling",
      "Data preparation, labeling strategy, and feature engineering",
      "Model selection, training, hyperparameter optimization, and evaluation",
      "Deployment architecture — batch, real-time, edge, or hybrid",
      "Monitoring, drift detection, retraining pipelines, and governance"
    ],
    value: "Reduce decision latency, unlock insight from unstructured data, and automate judgment-intensive work—without creating black boxes your team cannot operate.",
    accent: "var(--color-violet)",
    glow: "rgba(167, 139, 250, 0.15)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M8 12h8M12 8v8" />
        <path d="M8 8l8 8M16 8l-8 8" strokeWidth="1" opacity="0.5" />
      </svg>
    )
  },
  {
    id: "custom-software",
    number: "02",
    label: "Custom Software Development",
    tagline: "Software shaped to the work, not the other way around.",
    description: "We build purposeful web applications, mobile experiences, and business systems around how your teams and customers actually operate. From greenfield products to platform modernization, we focus on maintainable architecture, thoughtful UX, and delivery practices that keep the system healthy as it grows.",
    problems: [
      "Off-the-shelf tools that force workarounds and shadow processes",
      "Legacy systems that block new capabilities or pose security risk",
      "Disconnected tools creating data silos and manual reconciliation",
      "Customer-facing experiences that don't reflect your actual value",
      "Internal workflows held together by spreadsheets and tribal knowledge"
    ],
    scope: [
      "Discovery & architecture — domain modeling, system boundaries, tech selection",
      "UX design — user flows, interface systems, accessibility, prototyping",
      "Full-stack development — React/Next.js, TypeScript, Node.js, Python, PostgreSQL",
      "API design — REST, GraphQL, tRPC, event-driven integration patterns",
      "Quality — automated testing, CI/CD, observability, performance budgets"
    ],
    value: "Replace workarounds with software that models your domain, accelerates your team, and evolves with your organization—without accumulating technical debt.",
    accent: "var(--color-blue)",
    glow: "rgba(99, 123, 255, 0.15)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <rect x="6" y="6" width="6" height="6" rx="1" strokeWidth="1" opacity="0.5" />
        <rect x="14" y="6" width="6" height="6" rx="1" strokeWidth="1" opacity="0.5" />
      </svg>
    )
  },
  {
    id: "cloud-solutions",
    number: "03",
    label: "Cloud Solutions",
    tagline: "Infrastructure that disappears into reliability.",
    description: "We design and implement cloud-native applications and infrastructure on AWS, GCP, and Azure—focused on resilience, maintainability, and responsible scale. From container orchestration and serverless architectures to infrastructure-as-code and cost-aware operations, we treat the cloud as an engineering discipline, not a checkbox.",
    problems: [
      "Unpredictable costs and opaque resource utilization",
      "Manual deployments that create risk and slow iteration",
      "Single points of failure or insufficient disaster recovery",
      "Infrastructure drift between environments",
      "Scaling challenges — either over-provisioned or under-prepared"
    ],
    scope: [
      "Architecture review — workload analysis, cloud selection, migration strategy",
      "Infrastructure as Code — Terraform, Pulumi, CloudFormation, CDK",
      "Container platforms — EKS, GKE, AKS, ECS, serverless containers",
      "Observability — logging, metrics, tracing, alerting, SLOs",
      "Security & compliance — IAM, network segmentation, encryption, audit readiness"
    ],
    value: "Gain confidence in your foundation. Deploy faster, spend intentionally, and operate systems that heal themselves—so your team builds product, not firefights.",
    accent: "var(--color-cyan)",
    glow: "rgba(120, 217, 239, 0.15)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 12 20h8a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2z" />
        <path d="M12 18v-4M12 14v-4" />
        <path d="M8 18h8M8 14h8" strokeWidth="1" opacity="0.4" />
      </svg>
    )
  },
  {
    id: "research-analytics",
    number: "04",
    label: "Research & Analytics",
    tagline: "Turn signal into decisions.",
    description: "We build data workflows, visualization systems, reporting platforms, and research-led model development that make complex information actionable. Whether it's exploratory analysis, production dashboards, or novel research prototypes, we focus on the path from raw data to confident decisions.",
    problems: [
      "Data scattered across systems with no unified view",
      "Reports that answer yesterday's questions, not today's",
      "Analytical work that cannot be reproduced or audited",
      "Research prototypes that never reach production",
      "Stakeholders who cannot explore data on their own terms"
    ],
    scope: [
      "Data strategy — inventory, quality assessment, governance framework",
      "Pipeline engineering — ingestion, transformation, warehousing, streaming",
      "Analytics & BI — dashboards, self-serve exploration, embedded analytics",
      "Research & prototyping — hypothesis-driven experiments, novel methods",
      "Communication — automated reporting, narrative visualization, stakeholder alignment"
    ],
    value: "Shorten the distance between a question and a trustworthy answer. Build an evidence culture where data informs strategy, not just retrospectives.",
    accent: "var(--color-emerald)",
    glow: "rgba(52, 211, 153, 0.15)",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <path d="M3 20h18" strokeWidth="1" opacity="0.4" />
        <circle cx="18" cy="10" r="3" strokeWidth="1" opacity="0.4" />
        <circle cx="12" cy="4" r="3" strokeWidth="1" opacity="0.4" />
        <circle cx="6" cy="14" r="3" strokeWidth="1" opacity="0.4" />
      </svg>
    )
  }
];

function ServiceCard({ service, index }: { service: typeof serviceDetails[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        '--service-accent': service.accent,
        '--service-glow': service.glow
      } as React.CSSProperties}
    >
      <div className="service-card-header">
        <div className="service-icon" style={{ background: `linear-gradient(135deg, ${service.accent}22, ${service.accent}11)` }}>
          {service.icon}
        </div>
        <div className="service-meta">
          <span className="service-number">{service.number}</span>
          <h2 className="service-title">{service.label}</h2>
        </div>
      </div>
      
      <p className="service-tagline">{service.tagline}</p>
      <p className="service-description">{service.description}</p>
      
      <div className="service-sections">
        <div className="service-section">
          <h3>Problems we address</h3>
          <ul>
            {service.problems.map((problem, i) => (
              <li key={i}>{problem}</li>
            ))}
          </ul>
        </div>
        
        <div className="service-section">
          <h3>Scope of work</h3>
          <ul>
            {service.scope.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        
        <div className="service-value">
          <h3>Potential value</h3>
          <p>{service.value}</p>
        </div>
      </div>
      
      <div className="service-glow" aria-hidden="true" />
    </motion.article>
  );
}

function ServiceOverview() {
  return (
    <section className="service-overview" aria-labelledby="overview-heading">
      <div className="container">
        <div className="section-head">
          <div className="section-index">
            <span>01</span>
            <span>OVERVIEW</span>
          </div>
          <div>
            <h2 id="overview-heading" className="section-title">
              Four disciplines. <em>One connected approach.</em>
            </h2>
            <p className="section-intro">
              From early exploration to production systems, each discipline reinforces the others. We don't hand off—we collaborate across the full lifecycle so context never gets lost in translation.
            </p>
          </div>
        </div>
        
        <div className="overview-grid">
          {serviceDetails.map((service, index) => (
            <motion.article
              key={service.id}
              className="overview-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ '--accent': service.accent } as React.CSSProperties}
            >
              <div className="overview-icon" style={{ background: `linear-gradient(135deg, ${service.accent}22, ${service.accent}11)` }}>
                {service.icon}
              </div>
              <span className="overview-number">{service.number}</span>
              <h3>{service.label}</h3>
              <p>{service.tagline}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceDeepDive() {
  return (
    <section className="service-deep-dive" aria-labelledby="deepdive-heading">
      <div className="container">
        <div className="section-head">
          <div className="section-index">
            <span>02</span>
            <span>DEEP DIVE</span>
          </div>
          <div>
            <h2 id="deepdive-heading" className="section-title">
              Each discipline, <em>in detail</em>.
            </h2>
            <p className="section-intro">
              Explore the problems we solve, the scope we cover, and the value each practice can unlock for your organization.
            </p>
          </div>
        </div>
        
        <div className="deep-dive-grid">
          {serviceDetails.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceIntegration() {
  const integrations = [
    {
      title: "AI + Software",
      description: "Models embedded in applications with clean APIs, feature flags, and observable inference paths—so ML ships like any other feature.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="2" />
          <path d="M8 12h8M12 8v8" />
          <rect x="4" y="4" width="8" height="8" rx="1" strokeWidth="1" opacity="0.4" />
        </svg>
      )
    },
    {
      title: "Software + Cloud",
      description: "Applications designed for their runtime from day one—container-native, observable, and cost-aware through infrastructure as code.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="M18 10h-1.26A8 8 0 1 0 12 20h8a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2z" strokeWidth="1" opacity="0.4" />
        </svg>
      )
    },
    {
      title: "Cloud + Analytics",
      description: "Data platforms on cloud-native warehouses and streaming—governed, scalable, and ready for both BI and ML workloads.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 12 20h8a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2z" />
          <line x1="18" y1="20" x2="18" y2="10" strokeWidth="1" opacity="0.4" />
          <line x1="12" y1="20" x2="12" y2="4" strokeWidth="1" opacity="0.4" />
          <line x1="6" y1="20" x2="6" y2="14" strokeWidth="1" opacity="0.4" />
        </svg>
      )
    },
    {
      title: "Analytics + AI",
      description: "Research pipelines that feed production models—experimentation, feature stores, and evaluation loops that close the gap between insight and deployment.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <rect x="2" y="2" width="20" height="20" rx="2" strokeWidth="1" opacity="0.4" />
          <path d="M8 12h8M12 8v8" strokeWidth="1" opacity="0.4" />
        </svg>
      )
    }
  ];

  return (
    <section className="service-integration" aria-labelledby="integration-heading">
      <div className="container">
        <div className="section-head">
          <div className="section-index">
            <span>03</span>
            <span>INTEGRATION</span>
          </div>
          <div>
            <h2 id="integration-heading" className="section-title">
              Where disciplines <em>compound</em>.
            </h2>
            <p className="section-intro">
              The highest leverage work happens at the boundaries. These are the intersections we navigate daily.
            </p>
          </div>
        </div>
        
        <div className="integration-grid">
          {integrations.map((item, index) => (
            <motion.article
              key={item.title}
              className="integration-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="integration-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngagementModels() {
  const models = [
    {
      title: "Project-Based",
      description: "Defined scope, timeline, and deliverables. Ideal for greenfield builds, migrations, and feature initiatives with clear boundaries.",
      details: ["Fixed timeline & budget", "Dedicated team", "Clear milestones", "Knowledge transfer included"],
      bestFor: "Greenfield products, migrations, defined feature initiatives"
    },
    {
      title: "Retainer Partnership",
      description: "Ongoing capacity for continuous discovery, development, and evolution. Best for long-term product ownership and platform growth.",
      details: ["Monthly capacity commitment", "Priority scheduling", "Strategic advisory included", "Flexible scope adjustment"],
      bestFor: "Long-term product ownership, platform evolution, continuous ML"
    },
    {
      title: "Technical Advisory",
      description: "Senior guidance on architecture, technology selection, team structure, and AI strategy. For leaders who need an experienced sounding board.",
      details: ["Fractional CTO/VP Eng level", "Architecture reviews", "Vendor evaluation", "Team mentoring"],
      bestFor: "Strategy decisions, architecture validation, team upskilling"
    }
  ];

  return (
    <section className="engagement-models" aria-labelledby="engagement-heading">
      <div className="container">
        <div className="section-head">
          <div className="section-index">
            <span>04</span>
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
        
        <div className="engagement-grid">
          {models.map((model, index) => (
            <motion.article
              key={model.title}
              className="engagement-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3>{model.title}</h3>
              <p className="engagement-desc">{model.description}</p>
              <ul className="engagement-details">
                {model.details.map((detail, i) => (
                  <li key={i}>
                    <span className="detail-dot" aria-hidden="true" />
                    {detail}
                  </li>
                ))}
              </ul>
              <p className="engagement-bestfor"><strong>Best for:</strong> {model.bestFor}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal, .stagger-children');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHero 
        label="SERVICES" 
        title="The right tools for the problem at hand." 
        description="A connected set of disciplines for exploring, building, and improving digital systems. Scope is defined around each project's requirements."
      />
      <ServiceOverview />
      <ServiceDeepDive />
      <ServiceIntegration />
      <EngagementModels />
      <ClosingCTA />
    </>
  );
}
