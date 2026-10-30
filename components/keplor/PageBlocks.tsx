'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Reveal, HeadlineMaskReveal } from './Reveal';
import { ContactComposer } from './ContactComposer';
import { MasterParticleScene } from '@/components/cinematic/particle/MasterParticleScene';
import { StaticPortal } from '@/components/cinematic/fallback/StaticPortal';
import { selectQualityTier, type QualityTier } from '@/lib/cinematic/quality-tiers';
import { useReducedMotion } from '@/lib/motion';

const SECTION_STAGES: Record<string, { stage: number }> = {
  home: { stage: 0 },
  services: { stage: 1 },
  industries: { stage: 2 },
  approach: { stage: 3 },
  contact: { stage: 4 },
};

export const services = [
  ['01 / AI & ML', 'AI & Machine Learning', 'Predictive analytics, natural language processing, computer vision, recommendation systems, and intelligent automation.'],
  ['02 / SOFTWARE', 'Custom Software', 'Tailored web, mobile, and enterprise applications shaped around specific business requirements.'],
  ['03 / CLOUD', 'Cloud Solutions', 'Cloud infrastructure and applications, including scalable, hybrid, and multi-cloud architectures.'],
  ['04 / DATA', 'Research & Analytics', 'Data science, visualization, reporting, real-time and batch processing, and research-driven models.'],
];

export const industries = [
  ['Healthcare', 'Diagnostics, research & process automation'],
  ['Finance', 'Fraud detection, risk & predictive analysis'],
  ['Education', 'Personalized learning & student insights'],
  ['Retail & E-Commerce', 'Customer intelligence & supply chains'],
  ['Manufacturing', 'Predictive maintenance & production analytics'],
];

export const steps = [
  ['01', 'Understand', 'We learn your goals, context, constraints, and the problem worth solving.'],
  ['02', 'Explore', 'We compare options, test assumptions, and choose a practical direction.'],
  ['03', 'Build', 'We develop and integrate the solution in focused, reviewable stages.'],
  ['04', 'Improve', 'We evaluate what works, refine the implementation, and plan next steps.'],
];

export function Hero({ eyebrow = 'AI / SOFTWARE / DATA', title = 'Intelligent solutions for real business challenges.', body = 'Keplor helps businesses turn complex needs into practical AI/ML, custom software, cloud and analytics solutions — designed around the way work actually happens.' }: { eyebrow?: string; title?: string; body?: string }) {
  const reducedMotion = useReducedMotion();
  const [tierResolved, setTierResolved] = useState<QualityTier>("static");
  const [webglFailed, setWebglFailed] = useState(false);
  const [sectionProgress, setSectionProgress] = useState({ stage: 0, localProgress: 0 });
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const handleWebGLError = useEffect(() => {}, []);

  useEffect(() => {
    if (reducedMotion) {
      setTierResolved("static");
      return;
    }
    const canvas = document.createElement("canvas");
    const webgl = !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
    const lowMemory = typeof window !== "undefined" && (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
    setTierResolved(selectQualityTier(false, webgl, lowMemory));
  }, [reducedMotion]);

  const useWebGL = !reducedMotion && !webglFailed && tierResolved !== "static";

  // Observe each section to compute scroll-driven stage progress
  useEffect(() => {
    if (reducedMotion || !useWebGL) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement;
          const sectionId = section.id;
          const stageInfo = SECTION_STAGES[sectionId];
          if (!stageInfo || !entry.isIntersecting) return;

          const rect = section.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const sectionTop = rect.top;
          const sectionBottom = rect.bottom;
          const progress = Math.max(
            0,
            Math.min(1, (viewportHeight - sectionTop) / (viewportHeight + sectionBottom - sectionTop))
          );
          setSectionProgress({
            stage: stageInfo.stage,
            localProgress: progress,
          });
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el as Element));

    return () => observer.disconnect();
  }, [reducedMotion, useWebGL]);

  return (
    <section className="hero" id="home">
      {/* Transparent WebGL Arc layer above CSS ambient background */}
      <div className="hero-arc-layer">
        {useWebGL ? (
          <MasterParticleScene
            tier={tierResolved}
            scrollProgress={sectionProgress.localProgress}
            stage={sectionProgress.stage}
            localProgress={sectionProgress.localProgress}
            onWebGLError={() => setWebglFailed(true)}
          />
        ) : (
          <StaticPortal className="fallback-portal" />
        )}
      </div>
      <div className="hero-main">
        <Reveal><p className="eyebrow">{eyebrow}</p></Reveal>
        <HeadlineMaskReveal delay={0.08}>
          <h1 ref={headlineRef} dangerouslySetInnerHTML={{ __html: title }} />
        </HeadlineMaskReveal>
        <Reveal delay={0.16}><p className="hero-copy">{body}</p></Reveal>
        <Reveal delay={0.24}>
          <div className="hero-actions">
            <Link className="button button--primary" href="/contact" data-cursor="EXPLORE">Discuss a project <span>↗</span></Link>
            <Link className="text-link" href="/services" data-cursor="OPEN">Explore capabilities <span>↓</span></Link>
          </div>
        </Reveal>
      </div>
      <div className="hero-bottom">
        <div className="scroll-indicator">
          <span className="index">01</span>
          <span className="dash" />
          <span>Scroll to explore</span>
        </div>
        <span>AI & Software Solutions</span>
      </div>
    </section>
  );
}


export function PageHero({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <section className="hero hero--page">
      <div className="hero-main">
        <Reveal><p className="eyebrow">{eyebrow}</p></Reveal>
        <HeadlineMaskReveal delay={0.08}>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
        </HeadlineMaskReveal>
        <Reveal delay={0.16}><p className="hero-copy">{body}</p></Reveal>
      </div>
      <div className="hero-bottom">
        <div className="scroll-indicator">
          <span className="index">01</span>
          <span className="dash" />
          <span>Scroll to explore</span>
        </div>
        <span>Keplor</span>
      </div>
    </section>
  );
}

export function ServicesBlock() {
  return (
    <section className="section" id="services">
      <div className="section-top">
        <Reveal>
          <div>
            <div className="section-label">01 / Services</div>
            <h2 className="section-title">Technology shaped around your <span className="accent">business.</span></h2>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="section-intro">From applied AI and data to custom applications and cloud systems, we focus on the problem first and the technology that fits it.</p>
        </Reveal>
      </div>
      <div className="services">
        {services.map(([no, title, text], index) => (
          <Reveal key={title} delay={index * 0.06}>
            <article className="service" data-cursor="EXPLORE">
              <div className="service-no">{no}</div>
              <h3>{title}</h3>
              <p>{text}</p>
              <Link className="arrow" href="/contact" aria-label={`Discuss ${title}`}>↗</Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function IndustriesBlock() {
  return (
    <section className="section" id="industries">
      <div className="industries">
        <Reveal>
          <div>
            <div className="section-label">02 / Industries</div>
            <h2 className="section-title">Different industries. Practical <span className="accent">technology.</span></h2>
            <p className="hero-copy">Keplor explores practical applications across sectors, with the constraints, evidence, and responsibilities of each domain kept in view.</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="industry-list">
            {industries.map(([name, note]) => (
              <a className="industry" href="/contact" key={name} data-cursor="OPEN">
                <span>{name}<span className="note">{note}</span></span>
                <span>↗</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ApproachBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh * 0.4;
      const passed = Math.min(Math.max(vh * 0.75 - rect.top, 0), total);
      setProgress(passed / total);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const activeIndex = Math.min(3, Math.floor(progress * 4.35));

  return (
    <section className="section" id="approach">
      <div className="process">
        <Reveal>
          <div>
            <div className="section-label">03 / Approach</div>
            <h2 className="section-title">Clarity before <span className="accent">complexity.</span></h2>
            <p className="hero-copy">Good systems begin with a shared understanding of the problem. Our approach keeps discovery, design, delivery, and learning connected.</p>
            <Link href="/contact" className="text-link" data-cursor="OPEN">Start a conversation <span>↗</span></Link>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="steps" ref={ref} style={{ ['--progress' as string]: progress }}>
            {steps.map(([no, title, text], index) => (
              <div className={`step${index <= activeIndex ? ' step--active' : ''}`} key={no}>
                <span className="step-no">{no}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutBlock() {
  return (
    <section className="section" id="about">
      <div className="belief">
        <Reveal>
          <div>
            <div className="section-label">04 / About Keplor</div>
            <h2 className="belief-statement">Technology with purpose. <span className="accent">Built for what's next.</span></h2>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div>
            <p className="belief-copy">Keplor helps businesses use AI/ML and custom software to work more effectively, make better decisions, and create room for innovation and growth.</p>
            <p className="belief-copy">We combine technical thinking with a practical understanding of business needs—turning ideas into intelligent, scalable, and data-driven solutions.</p>
          </div>
        </Reveal>
      </div>
      <div className="mission-vision">
        <Reveal>
          <div>
            <h3>Our mission</h3>
            <p>To help businesses use AI/ML and custom software to work more effectively, make better decisions, and create room for innovation and growth.</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div>
            <h3>Our vision</h3>
            <p>A future where organizations can use intelligent, scalable, data-informed technology to adapt and make progress.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactBlock() {
  return (
    <section className="section contact" id="contact">
      <div className="contact-grid">
        <Reveal>
          <div>
            <div className="section-label">05 / Contact</div>
            <h2>Let's discuss what your business <span className="accent">needs.</span></h2>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div>
            <p className="contact-copy">Tell us about a workflow, a technical challenge, or an idea you want to explore. We'll start by understanding the problem and discussing a practical next step.</p>
            <ContactComposer />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
