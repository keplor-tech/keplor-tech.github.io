'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Reveal, HeadlineMaskReveal } from './Reveal';
import { PredictiveArc } from './PredictiveArc';
import { ContactComposer } from './ContactComposer';
import { HeroWebGL } from './HeroWebGL';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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
  ['02', 'Design', 'We shape the right approach, architecture, and path forward.'],
  ['03', 'Build', 'We develop, test, and refine the solution around real requirements.'],
  ['04', 'Improve', 'We help evolve, optimize, and scale the solution as needs change.'],
];

export function Hero({ eyebrow = 'AI / Software / Real impact', title = 'Intelligent systems.<br/>Built around your <span class="accent">business.</span>', body = 'AI/ML, custom software, cloud and analytics solutions designed around real business needs.' }: { eyebrow?: string; title?: string; body?: string }) {
  const intensityRef = useRef(1);
  const scrollProgressRef = useRef(0);
  const arcRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  // Scroll-linked recession: scale 1 → .92, rise 48px, dim as next section dominates
  useEffect(() => {
    const el = arcRef.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, window.scrollY / (vh * 0.9)));
      intensityRef.current = 1 - p * 0.75;
      el.style.transform = `translateY(${-p * 48}px) scale(${1 - p * 0.08})`;
      el.style.opacity = `${1 - p * 0.55}`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // GSAP ScrollTrigger word masking animation
  useEffect(() => {
    const headline = headlineRef.current;
    if (!headline) return;

    const words = headline.querySelectorAll('span.word');
    if (words.length === 0) return;

    const ctx = gsap.context(() => {
      words.forEach((word, i) => {
        gsap.fromTo(word, 
          { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
          {
            clipPath: 'inset(0 0% 0 0)',
            opacity: 1,
            duration: 1,
            delay: 0.1 + i * 0.08,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: headline,
              start: 'top 80%',
              end: 'top 30%',
              scrub: 0.5,
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-arc" ref={arcRef}>
        <HeroWebGL intensityRef={intensityRef} scrollProgressRef={scrollProgressRef} />
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
            <h2 className="section-title">Ideas into intelligent <span className="accent">solutions.</span></h2>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="section-intro">From AI and software to cloud systems and analytics, we design and build technology around your needs, constraints, and goals.</p>
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
            <h2 className="section-title">Technology for <span className="accent">real-world</span> complexity.</h2>
            <p className="hero-copy">We work across sectors where better software, data, and intelligent systems can make a meaningful difference.</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="industry-list">
            {industries.map(([name, note]) => (
              <Link className="industry" href="/industries" key={name} data-cursor="OPEN">
                <span>{name}<span className="note">{note}</span></span>
                <span>↗</span>
              </Link>
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
            <h2 className="section-title">A collaborative path from idea to <span className="accent">impact.</span></h2>
            <p className="hero-copy">We work closely with you to understand the challenge, explore options, and build a practical solution that fits your business.</p>
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
            <p className="belief-copy">Keplor delivers AI/ML and software solutions designed to help businesses navigate complexity, work more effectively, and build for the future.</p>
            <p className="belief-copy">We combine technical thinking with a practical understanding of business needs—turning ideas into intelligent, scalable, and data-driven solutions.</p>
          </div>
        </Reveal>
      </div>
      <div className="mission-vision">
        <Reveal>
          <div>
            <h3>Our mission</h3>
            <p>To empower businesses across sectors through AI/ML technologies and custom software solutions that drive innovation, efficiency, and growth.</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div>
            <h3>Our vision</h3>
            <p>To deliver AI/ML-driven software solutions that help businesses navigate the digital future with intelligent, scalable, and data-driven strategies.</p>
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
            <h2>Let's build what's <span className="accent">next.</span></h2>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div>
            <p className="contact-copy">Have a challenge to solve, a workflow to improve, or an idea to explore? Tell us what you're working on.</p>
            <ContactComposer />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
