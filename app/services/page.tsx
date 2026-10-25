'use client';

import { Hero, services } from '@/components/keplor/PageBlocks';
import { Reveal } from '@/components/keplor/Reveal';

export default function ServicesPage() {
  return <main><Hero eyebrow="Services / 01" title="Build the right system for the problem." body="From early research to production-minded software, Keplor brings AI/ML, engineering, cloud, and analytics into one clear conversation." /><section className="section-wrap service-list">{services.map(([number, title, summary, detail], index) => <Reveal key={title} delay={index * .06}><article className="service-row"><span className="service-number">{number}</span><div><h3>{title}</h3><p>{summary}</p></div><p className="service-detail">{detail}</p><span className="service-arrow">↗</span></article></Reveal>)}</section></main>;
}
