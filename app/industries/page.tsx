'use client';

import { Hero, industries } from '@/components/keplor/PageBlocks';
import { Reveal } from '@/components/keplor/Reveal';

export default function IndustriesPage() {
  return <main><Hero eyebrow="Industries / 02" title="Context changes the system." body="Keplor explores practical applications across sectors, with the constraints, evidence, and responsibilities of each domain kept in view." /><section className="section-wrap section-wrap--line"><div className="industry-list">{industries.map(([name, detail], index) => <Reveal key={name} delay={index * .05}><article className="industry-row"><span>0{index + 1}</span><h3>{name}</h3><p>{detail}</p><b>↗</b></article></Reveal>)}</div></section></main>;
}
