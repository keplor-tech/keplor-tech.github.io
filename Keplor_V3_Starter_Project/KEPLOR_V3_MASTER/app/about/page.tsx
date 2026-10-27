"use client";

import { useEffect } from "react";
import { PageHero, ClosingCTA } from "@/components/Sections";
import { motion } from "framer-motion";

const principles = [
  {
    title: "Start with context",
    description: "Every engagement begins by mapping the real problem space—constraints, stakeholders, success criteria, and the human dynamics around the work. We don't propose solutions until we understand the landscape.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    )
  },
  {
    title: "Make the problem explicit",
    description: "Ambiguity is the enemy of good systems. We invest in problem framing—writing it down, drawing it out, and getting alignment—before any technical decisions are made. A well-defined problem is half-solved.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    )
  },
  {
    title: "Choose technology for a reason",
    description: "No default stacks. Every architectural choice—language, framework, cloud, model—is justified by the problem, the team, and the operating context. We prefer boring technology that works over exciting technology that might.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M12 17v4M12 3v4" strokeWidth="1" opacity="0.4" />
        <path d="M3 12h4M17 12h4" strokeWidth="1" opacity="0.4" />
      </svg>
    )
  },
  {
    title: "Build in reviewable steps",
    description: "Large changes are decomposed into small, verifiable increments. Continuous integration, automated testing, and observable deployments are not optional—they're how we keep risk visible and progress real.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" y1="6" x2="12" y2="18" strokeWidth="1" opacity="0.4" />
      </svg>
    )
  },
  {
    title: "Validate assumptions",
    description: "Intuition is a starting point, not evidence. We design experiments, shadow evaluations, A/B tests, and load tests to prove or disprove our hypotheses before committing to a direction.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    )
  },
  {
    title: "Keep the outcome in view",
    description: "Technical elegance serves the outcome, not the reverse. We regularly revisit whether the system is moving the metric that matters—and course-correct when it isn't.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    )
  }
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "Define the real problem, context, constraints, and desired outcome through stakeholder interviews, data audits, technical discovery, and competitive landscaping.",
    activities: ["Stakeholder interviews & workshops", "Data & system audits", "Technical feasibility assessment", "Success criteria definition"],
    deliverables: ["Problem statement", "Context map", "Feasibility memo", "Engagement plan"]
  },
  {
    number: "02",
    title: "Design",
    description: "Shape the experience and architecture—user flows, system boundaries, data models, interface concepts, and technical specifications—before committing to the build.",
    activities: ["User journey mapping", "Architecture & data modeling", "Interface design systems", "Technical specification"],
    deliverables: ["Design system", "Architecture decision records", "Interactive prototypes", "Implementation roadmap"]
  },
  {
    number: "03",
    title: "Build",
    description: "Develop the system in clear, reviewable increments. Continuous integration, automated testing, and observable deployments from day one. Code reviews and pair programming as standard practice.",
    activities: ["Incremental feature development", "Automated testing (unit, integration, e2e)", "CI/CD pipeline setup", "Observability instrumentation"],
    deliverables: ["Working software", "Test coverage reports", "Deployment pipelines", "Runbooks & documentation"]
  },
  {
    number: "04",
    title: "Validate",
    description: "Test assumptions against reality. A/B experiments, shadow evaluations, load testing, and iterative refinement against success metrics. Measure what matters, not what's easy.",
    activities: ["Production validation", "A/B & multivariate testing", "Performance & load testing", "User feedback loops"],
    deliverables: ["Validation reports", "Performance baselines", "Iteration recommendations", "Handoff documentation"]
  }
];

const teamValues = [
  { label: "Curiosity over certainty", description: "We ask better questions before proposing answers." },
  { label: "Craft over speed", description: "Sustainable pace produces better outcomes than heroics." },
  { label: "Transparency over comfort", description: "Hard truths early prevent expensive surprises later." },
  { label: "Ownership over assignment", description: "Everyone owns the outcome, not just their ticket." },
  { label: "Learning over knowing", description: "The best solution today may not be the best tomorrow." }
];

function MissionVision() {
  return (
    <section className="mission-vision" aria-labelledby="mission-heading">
      <div className="container">
        <div className="section-head">
          <div className="section-index">
            <span>01</span>
            <span>FOUNDATION</span>
          </div>
          <div>
            <h2 id="mission-heading" className="section-title">
              Why we exist. <em>Where we're going.</em>
            </h2>
          </div>
        </div>
        
        <div className="mv-grid">
          <article className="mv-card">
            <div className="mv-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3>Mission</h3>
            <p>Help organizations use AI, machine learning, and software to improve how they understand problems, make decisions, and deliver useful services.</p>
          </article>
          
          <article className="mv-card">
            <div className="mv-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3>Vision</h3>
            <p>Contribute to a future where intelligent, scalable, data-informed systems help people and organizations do better work.</p>
          </article>
          
          <article className="mv-card">
            <div className="mv-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 9h6v6H9z" />
              </svg>
            </div>
            <h3>Approach</h3>
            <p>Start with context. Make the problem explicit. Choose technology for a reason. Build in reviewable steps, validate assumptions, and keep the outcome in view.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function PrinciplesSection() {
  return (
    <section className="principles-section" aria-labelledby="principles-heading">
      <div className="container">
        <div className="section-head">
          <div className="section-index">
            <span>02</span>
            <span>PRINCIPLES</span>
          </div>
          <div>
            <h2 id="principles-heading" className="section-title">
              How we work. <em>What we stand for.</em>
            </h2>
            <p className="section-intro">
              These principles guide every engagement, every technical decision, and every interaction. They're not aspirational—they're operational.
            </p>
          </div>
        </div>
        
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.title}
              className="principle-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="principle-icon">{principle.icon}</div>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessNarrative() {
  return (
    <section className="process-narrative" aria-labelledby="process-heading">
      <div className="container">
        <div className="section-head">
          <div className="section-index">
            <span>03</span>
            <span>PROCESS</span>
          </div>
          <div>
            <h2 id="process-heading" className="section-title">
              From uncertainty to a <em>system you can trust</em>.
            </h2>
            <p className="section-intro">
              A clear process keeps decisions grounded, makes trade-offs visible, and gives every phase a purpose. This is how we consistently deliver.
            </p>
          </div>
        </div>
        
        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.number}
              className="process-step"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="process-step-header">
                <span className="process-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p className="process-description">{step.description}</p>
                </div>
              </div>
              
              <div className="process-details">
                <div className="process-column">
                  <h4>Key activities</h4>
                  <ul>
                    {step.activities.map((activity, i) => (
                      <li key={i}>{activity}</li>
                    ))}
                  </ul>
                </div>
                <div className="process-column">
                  <h4>Typical deliverables</h4>
                  <ul>
                    {step.deliverables.map((deliverable, i) => (
                      <li key={i}>{deliverable}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {index < processSteps.length - 1 && (
                <div className="process-connector" aria-hidden="true" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamValues() {
  return (
    <section className="team-values" aria-labelledby="values-heading">
      <div className="container">
        <div className="section-head">
          <div className="section-index">
            <span>04</span>
            <span>VALUES</span>
          </div>
          <div>
            <h2 id="values-heading" className="section-title">
              The culture <em>behind the work</em>.
            </h2>
            <p className="section-intro">
              Values show up in the small decisions—how we review code, how we disagree, how we prioritize. These are the ones we return to.
            </p>
          </div>
        </div>
        
        <div className="values-grid">
          {teamValues.map((value, index) => (
            <motion.div
              key={value.label}
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3>{value.label}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
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
        label="ABOUT KEPLOR" 
        title="Build with purpose. Think beyond the obvious." 
        description="We bring research, design, and engineering together to help solve meaningful problems with intelligent technology."
      />
      <MissionVision />
      <PrinciplesSection />
      <ProcessNarrative />
      <TeamValues />
      <ClosingCTA />
    </>
  );
}
