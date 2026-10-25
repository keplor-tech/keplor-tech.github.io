import { Hero, ApproachBlock } from '@/components/keplor/PageBlocks';

export default function ApproachPage() {
  return <main><Hero eyebrow="Approach / 03" title="Clarity before complexity." body="Good systems begin with a shared understanding of the problem. Our approach keeps discovery, design, delivery, and learning connected." /><ApproachBlock /><section className="section-wrap"><p className="eyebrow">A useful first step</p><h2>Start with the question, not the technology.</h2><p className="hero__body">Tell us what needs to work better. We can explore the opportunity, the available data, the people involved, and the most responsible path forward.</p></section></main>;
}
