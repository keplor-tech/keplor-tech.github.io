'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Reveal, HeadlineMaskReveal } from './Reveal';
import { PredictiveArc } from './PredictiveArc';
import { ContactComposer } from './ContactComposer';

export const services = [
  ['01', 'AI & Machine Learning', 'Models and intelligent workflows shaped around a specific business problem.', 'Predictive analytics, NLP, computer vision, recommendation systems, and automation.'],
  ['02', 'Custom Software', 'Purpose-built software for the way your organisation works.', 'Web and mobile applications, enterprise systems, integrations, and iterative delivery.'],
  ['03', 'Cloud Solutions', 'Cloud systems designed around your applications, data, and operational needs.', 'Cloud-native applications, scalable infrastructure, and hybrid or multi-cloud strategies.'],
  ['04', 'Research & Analytics', 'Turn complex data into information your team can use.', 'Data science, visualisation, reporting, real-time and batch processing, and research-led models.'],
];

export const industries = [
  ['Healthcare', 'Research analytics, diagnostic-support exploration, and operational automation — subject to validation and applicable regulation.'],
  ['Finance', 'Fraud and anomaly detection, risk analysis, forecasting, and financial analytics with appropriate controls.'],
  ['Education', 'Personalised learning experiences, student-performance analysis, and connected learning workflows.'],
  ['Retail & E-commerce', 'Customer behaviour analysis, inventory optimisation, forecasting, and recommendations.'],
  ['Manufacturing', 'Predictive-maintenance analysis, production workflow automation, and demand forecasting.'],
];

export function Hero({ eyebrow = 'AI / SOFTWARE / REAL IMPACT', title = 'Intelligent systems. Built around your <span className="purple">business</span>.', body = 'AI/ML, custom software, cloud and analytics solutions designed around real business needs.' }: { eyebrow?: string; title?: string; body?: string }) {
  return (
    <section className="hero section-wrap">
      <PredictiveArc />
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <HeadlineMaskReveal delay={0.1}>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
        </HeadlineMaskReveal>
        <p className="hero__body">{body}</p>
        <div className="hero__actions">
          <Link className="button button--solid" href="/contact" data-cursor="EXPLORE">Discuss a project <span>↗</span></Link>
          <Link className="text-link" href="/services" data-cursor="OPEN">Explore capabilities <span>↓</span></Link>
        </div>
      </Reveal>
      <div className="hero__caption">
        <span>01 — SCROLL TO EXPLORE</span>
        <span>AI & SOFTWARE SOLUTIONS</span>
      </div>
    </section>
  );
}

export function ServicesBlock() {
  return (
    <section className="section-wrap" id="services">
      <div className="section-heading">
        <p className="eyebrow">01 / SERVICES</p>
        <h2>Ideas into intelligent <span className="purple">solutions</span>.</h2>
      </div>
      <p className="hero__body" style={{ maxWidth: '540px', marginBottom: 50 }}>Technology shaped around business needs, constraints, and goals.</p>
      <div className="service-list">
        {services.map(([number, title, summary, detail], index) => (
          <Reveal key={title} delay={index * 0.06}>
            <article className="service-row" data-cursor="EXPLORE">
              <span className="service-number">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{summary}</p>
              </div>
              <p className="service-detail">{detail}</p>
              <span className="service-arrow">↗</span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function IndustriesBlock() {
  return (
    <section className="section-wrap section-wrap--line">
      <div className="section-heading">
        <p className="eyebrow">02 / INDUSTRIES</p>
        <h2>Technology for real-world <span className="purple">complexity</span>.</h2>
      </div>
      <div className="industry-list">
        {industries.map(([name, detail], index) => (
          <Reveal key={name} delay={index * 0.05}>
            <Link href="/industries" className="industry-row" data-cursor="OPEN">
              <span>0{index + 1}</span>
              <h3>{name}</h3>
              <p>{detail}</p>
              <b>↗</b>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ApproachBlock() {
  const steps = [['Understand', 'Understand goals and context.'], ['Design', 'Shape the right approach.'], ['Build', 'Develop, test and refine.'], ['Improve', 'Evolve with changing needs.']];
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { setDrawn(true); observer.disconnect(); } });
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="section-wrap approach" id="approach">
      <div className="section-heading">
        <p className="eyebrow">03 / APPROACH</p>
        <h2>A collaborative path from idea to <span className="purple">impact</span>.</h2>
      </div>
      <div className={`process-line ${drawn ? 'process-line--drawn' : ''}`} ref={ref}>
        {steps.map(([title, text], index) => (
          <Reveal key={title} delay={index * 0.1}>
            <div className="process-step">
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ContactBlock() {
  return (
    <section className="section-wrap contact-section">
      <div>
        <p className="eyebrow">04 / CONTACT</p>
        <h2>Let's build what's <span className="purple">next</span>.</h2>
        <p className="hero__body">Have a challenge to solve or an idea to explore? Let's talk.</p>
      </div>
      <ContactComposer />
    </section>
  );
}
