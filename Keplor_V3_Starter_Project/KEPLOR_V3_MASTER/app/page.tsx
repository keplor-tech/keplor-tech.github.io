"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { useReducedMotion } from "@/lib/motion";
import { MasterParticleScene } from "@/components/cinematic/particle/MasterParticleScene";
import { StaticPortal } from "@/components/cinematic/fallback/StaticPortal";
import { selectQualityTier, type QualityTier } from "@/lib/cinematic/quality-tiers";
import { useContinuousScrollProgress } from "@/lib/cinematic/scroll-progress";
import caseStudies from "@/lib/content/case-studies";

export default function HomePage() {
  const reducedMotion = useReducedMotion();
  const [tierResolved, setTierResolved] = useState<QualityTier>("static");
  const [webglFailed, setWebglFailed] = useState(false);

  const handleWebGLError = useCallback(() => {
    setWebglFailed(true);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setTierResolved("static");
      return;
    }
    const canvas = document.createElement("canvas");
    const webgl = !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
    const lowMemory =
      typeof window !== "undefined" &&
      (navigator as any).deviceMemory &&
      (navigator as any).deviceMemory < 4;
    setTierResolved(selectQualityTier(false, webgl, lowMemory));
  }, [reducedMotion]);

  const useWebGL = !reducedMotion && !webglFailed && tierResolved !== "static";

    // Continuous scroll progress - replaces IntersectionObserver
    const scrollProgress = useContinuousScrollProgress();

    return (
    <>
      <main id="home">
        <section className="hero" id="home" style={{ borderTop: 0 }}>
          <div className="hero-main">
            <div className="eyebrow reveal">AI / Software / Real impact</div>
            <h1 className="reveal">
              Intelligent systems.<br />
              Built around your <span className="accent">business.</span>
            </h1>
            <p className="hero-copy reveal">
              AI/ML, custom software, cloud and analytics solutions designed around real business needs.
            </p>
            <div className="hero-actions reveal">
              <a href="#contact" className="button button-primary">
                Discuss a project <span>→</span>
              </a>
              <a href="#services" className="text-link">
                Explore capabilities <span>←</span>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="arc-canvas" />
          </div>
          <div className="hero-bottom">
            <div className="scroll-indicator">
              <span className="index">01</span>
              <span className="dash"></span>
              <span>Scroll to explore</span>
            </div>
            <span>AI & Software Solutions</span>
          </div>
        </section>

        <section id="services">
          <div className="section-top reveal">
            <div>
              <div className="section-label">01 / Services</div>
              <h2 className="section-title">
                Ideas into intelligent <span className="accent">solutions.</span>
              </h2>
            </div>
            <p className="section-intro">
              From AI and software to cloud systems and analytics, we design and build technology around your
              needs, constraints, and goals.
            </p>
          </div>
          <div className="services">
            <article className="service reveal">
              <div className="service-no">01 / AI & ML</div>
              <h3>AI & Machine Learning</h3>
              <p>
                Predictive analytics, natural language processing, computer vision, recommendation systems, and
                intelligent automation.
              </p>
              <a className="arrow" href="#contact" aria-label="Discuss AI and machine learning">
                →
              </a>
            </article>
            <article className="service reveal">
              <div className="service-no">02 / SOFTWARE</div>
              <h3>Custom Software</h3>
              <p>
                Tailored web, mobile, and enterprise applications shaped around specific business requirements.
              </p>
              <a className="arrow" href="#contact" aria-label="Discuss custom software">
                →
              </a>
            </article>
            <article className="service reveal">
              <div className="service-no">03 / CLOUD</div>
              <h3>Cloud Solutions</h3>
              <p>
                Cloud infrastructure and applications, including scalable, hybrid, and multi-cloud architectures.
              </p>
              <a className="arrow" href="#contact" aria-label="Discuss cloud solutions">
                →
              </a>
            </article>
            <article className="service reveal">
              <div className="service-no">04 / DATA</div>
              <h3>Research & Analytics</h3>
              <p>
                Data science, visualization, reporting, real-time and batch processing, and research-driven models.
              </p>
              <a className="arrow" href="#contact" aria-label="Discuss research and analytics">
                →
              </a>
            </article>
          </div>
        </section>

        <section id="industries">
          <div className="industries">
            <div className="reveal">
              <div className="section-label">02 / Industries</div>
              <h2 className="section-title">
                Technology for <span className="accent">real-world</span> complexity.
              </h2>
              <p className="hero-copy">
                We work across sectors where better software, data, and intelligent systems can make a meaningful
                difference.
              </p>
            </div>
            <div className="industry-list reveal">
              <a className="industry" href="#contact">
                <span>
                  Healthcare <span className="note">Diagnostics, research & process automation</span>
                </span>
                <span>→</span>
              </a>
              <a className="industry" href="#contact">
                <span>
                  Finance <span className="note">Fraud detection, risk & predictive analysis</span>
                </span>
                <span>→</span>
              </a>
              <a className="industry" href="#contact">
                <span>
                  Education <span className="note">Personalized learning & student insights</span>
                </span>
                <span>→</span>
              </a>
              <a className="industry" href="#contact">
                <span>
                  Retail & E-Commerce <span className="note">Customer intelligence & supply chains</span>
                </span>
                <span>→</span>
              </a>
              <a className="industry" href="#contact">
                <span>
                  Manufacturing <span className="note">Predictive maintenance & demand forecasting</span>
                </span>
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        <section id="work" className="work-showcase" aria-labelledby="work-heading">
          <div className="section-top reveal">
            <div>
              <div className="section-label">03 / Illustrative work</div>
              <h2 id="work-heading" className="section-title">
                Systems that make <span className="accent">progress visible.</span>
              </h2>
            </div>
            <p className="section-intro">
              Fictional project scenarios that show how Keplor connects research, engineering, and practical
              outcomes without inventing client claims or metrics.
            </p>
          </div>
          <div className="work-grid">
            {caseStudies.map((study, index) => (
              <article className="work-card reveal" key={study.id}>
                <div className="work-card-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{study.context}</span>
                </div>
                <h3>{study.title}</h3>
                <p>{study.outcome}</p>
                <div className="work-tags">
                  {study.themes.map((theme) => <span key={theme}>{theme}</span>)}
                </div>
                <Link className="text-link" href="/contact/">
                  Discuss a similar challenge <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="approach">
          <div className="process">
            <div className="reveal">
              <div className="section-label">03 / Approach</div>
              <h2 className="section-title">
                A collaborative path from idea to <span className="accent">impact.</span>
              </h2>
              <p className="hero-copy">
                We work closely with you to understand the challenge, explore options, and build a practical
                solution that fits your business.
              </p>
              <a href="#contact" className="text-link">
                Start a conversation <span>→</span>
              </a>
            </div>
            <div className="steps">
              <div className="step reveal">
                <span className="step-no">01</span>
                <div>
                  <h3>Understand</h3>
                  <p>
                    We learn your goals, context, constraints, and the problem worth solving.
                  </p>
                </div>
              </div>
              <div className="step reveal">
                <span className="step-no">02</span>
                <div>
                  <h3>Design</h3>
                  <p>We shape the right approach, architecture, and path forward.</p>
                </div>
              </div>
              <div className="step reveal">
                <span className="step-no">03</span>
                <div>
                  <h3>Build</h3>
                  <p>
                    We develop, test, and refine the solution around real requirements.
                  </p>
                </div>
              </div>
              <div className="step reveal">
                <span className="step-no">04</span>
                <div>
                  <h3>Improve</h3>
                  <p>
                    We help evolve, optimize, and scale the solution as needs change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="belief">
            <div className="reveal">
              <div className="section-label">04 / About Keplor</div>
              <h2 className="belief-statement">
                Technology with purpose. <span className="accent">Built for what's next.</span>
              </h2>
            </div>
            <div className="reveal">
              <p className="belief-copy">
                Keplor delivers AI/ML and software solutions designed to help businesses navigate complexity, work
                more effectively, and build for the future.
              </p>
              <p className="belief-copy">
                We combine technical thinking with a practical understanding of business needs—turning ideas into
                intelligent, scalable, and data-driven solutions.
              </p>
            </div>
          </div>
          <div className="mission-vision">
            <div className="reveal">
              <h3>Our mission</h3>
              <p>
                To empower businesses across sectors through AI/ML technologies and custom software solutions that
                drive innovation, efficiency, and growth.
              </p>
            </div>
            <div className="reveal">
              <h3>Our vision</h3>
              <p>
                To deliver AI/ML-driven software solutions that help businesses navigate the digital future with
                intelligent, scalable, and data-driven strategies.
              </p>
            </div>
          </div>
        </section>

        <section id="explore" className="section" aria-labelledby="explore-heading">
          <div className="container">
            <div className="section-top reveal">
              <div>
                <div className="section-label">06 / Explore</div>
                <h2 id="explore-heading" className="section-title">
                  Continue reading. <em>Explore further.</em>
                </h2>
                <p className="section-intro">
                  Deeper dives into our capabilities, thinking, and what we could build together.
                </p>
              </div>
            </div>
            <div className="explore-grid stagger-children">
              <article className="explore-card reveal">
                <div className="explore-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="2" />
                    <path d="M8 12h8M12 8v8" />
                  </svg>
                </div>
                <h3>Features</h3>
                <p>Technical and functional capabilities—from intelligent agents to cloud-native architecture.</p>
                <Link className="explore-link" href="/features/">
                  View features <span aria-hidden="true">→</span>
                </Link>
              </article>
              <article className="explore-card reveal">
                <div className="explore-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="2" />
                    <path d="M8 12h8M12 8v8" />
                    <rect x="4" y="4" width="8" height="8" rx="1" strokeWidth="1" opacity="0.4" />
                  </svg>
                </div>
                <h3>Products</h3>
                <p>Illustrative product concepts—concept previews for design demonstration.</p>
                <Link className="explore-link" href="/products/">
                  View products <span aria-hidden="true">→</span>
                </Link>
              </article>
              <article className="explore-card reveal">
                <div className="explore-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <h3>Blog</h3>
                <p>Notes on AI, software, research, and the decisions that turn emerging technology into useful systems.</p>
                <Link className="explore-link" href="/blog/">
                  Read the journal <span aria-hidden="true">→</span>
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-grid">
            <div className="reveal">
              <div className="section-label">05 / Contact</div>
              <h2>
                Let's build what's <span className="accent">next.</span>
              </h2>
            </div>
            <div className="reveal">
              <p className="contact-copy">
                Have a challenge to solve, a workflow to improve, or an idea to explore? Tell us what you're
                working on.
              </p>
              <a
                className="button button-primary"
                id="contactButton"
                href="mailto:hello@keplor.tech?subject=Project%20enquiry%20for%20Keplor"
              >
                Start a conversation <span>→</span>
              </a>
            </div>
          </div>
          <div className="contact-details">
            <span>Project enquiries</span>
            <a href="mailto:hello@keplor.tech">hello@keplor.tech</a>
            <a href="https://keplor.tech" target="_blank" rel="noopener">
              keplor.tech →
            </a>
          </div>
          <footer className="footer">
            <a className="brand" href="/" aria-label="Keplor home">
              <Image src="/assets/keplor-primary.png" alt="" width={31} height={31} priority />
              <span>Keplor</span>
            </a>
            <nav className="footer-nav" aria-label="Footer navigation">
              <a href="/about/">About</a>
              <a href="/services/">Services</a>
              <a href="/features/">Features</a>
              <a href="/products/">Products</a>
              <a href="/blog/">Blog</a>
              <a href="/careers/">Careers</a>
              <a href="/contact/">Contact</a>
            </nav>
            <span>© <span id="year">2026</span> Keplor</span>
          </footer>
        </section>
      </main>
    </>
  );
}
