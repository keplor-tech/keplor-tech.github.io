import Link from "next/link";
import PredictiveArc from "@/components/PredictiveArc";
import { ClosingCTA, Eyebrow, ServiceList } from "@/components/Sections";

export default function HomePage() {
  return <>
    <section className="container hero">
      <div className="hero-visual"><PredictiveArc /></div>
      <div className="hero-copy reveal">
        <Eyebrow>AI · Software · Research</Eyebrow>
        <h1>Intelligent systems.<br /><em>Thoughtfully</em> built.</h1>
        <p className="hero-lede">We bring AI, machine learning, and custom software together to help turn complex challenges into useful, scalable digital systems.</p>
        <div className="hero-actions"><Link className="button" href="/contact/">Discuss a project <span aria-hidden="true">↗</span></Link><Link className="button secondary" href="/services/">Explore our services <span aria-hidden="true">→</span></Link></div>
        <p className="hero-note">A considered approach to intelligent technology</p>
      </div>
    </section>
    <section className="section"><div className="container">
      <div className="section-head"><div className="section-index">01 / PERSPECTIVE</div><div><h2>Technology should make the complex feel clear.</h2><p className="section-intro" style={{marginTop:"1.5rem"}}>Good systems begin with understanding the problem, the people around it, and the outcome that matters. We bring research, design, and engineering into one thoughtful process.</p></div></div>
    </div></section>
    <section className="section"><div className="container">
      <div className="section-head"><div className="section-index">02 / WHAT WE DO</div><div><h2>Four disciplines. One connected approach.</h2><p className="section-intro" style={{marginTop:"1.5rem"}}>From early exploration to production-minded software, the work is shaped around your context—not a one-size-fits-all stack.</p></div></div>
      <ServiceList /><p style={{marginTop:"1.5rem"}}><Link className="button secondary" href="/services/">Explore services <span aria-hidden="true">↗</span></Link></p>
    </div></section>
    <section className="section"><div className="container">
      <div className="section-head"><div className="section-index">03 / HOW WE WORK</div><div><h2>Move from uncertainty to a system you can use.</h2><p className="section-intro" style={{marginTop:"1.5rem"}}>A clear process keeps decisions grounded, makes trade-offs visible, and gives every phase a purpose.</p></div></div>
      <div className="approach-grid">{[["01","Understand","Define the real problem, context, constraints, and desired outcome."],["02","Design","Shape the experience and architecture before committing to the build."],["03","Build","Develop the system in clear, reviewable steps."],["04","Validate","Test assumptions, check quality, and refine against the intended outcome."]].map(x=><article className="approach-step" key={x[0]}><span>{x[0]} / PROCESS</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div>
    </div></section>
    <section className="section"><div className="container"><div className="section-head"><div className="section-index">04 / WHERE WE APPLY IT</div><div><h2>Built around real-world contexts.</h2><p className="section-intro" style={{marginTop:"1.5rem"}}>Our work can support teams across sectors, with scope and safeguards shaped to each environment.</p><div className="industry-list">{["Healthcare","Finance","Education","Retail & E-Commerce","Manufacturing"].map(x=><span className="industry-chip" key={x}>{x}</span>)}</div></div></div></div></section>
    <section className="section"><div className="container"><div className="section-head"><div className="section-index">05 / FIELD NOTES</div><div><h2>Ideas are better when they’re shared.</h2><p className="section-intro" style={{marginTop:"1.5rem"}}>We’re building a space for practical thinking on AI, software, research, and the choices that shape useful technology.</p><p style={{marginTop:"1.5rem"}}><Link className="button secondary" href="/blog/">Explore field notes <span aria-hidden="true">↗</span></Link></p></div></div></div></section>
    <ClosingCTA />
  </>;
}
