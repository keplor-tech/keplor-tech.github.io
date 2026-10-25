'use client';

import { PageHero, ApproachBlock } from '@/components/keplor/PageBlocks';

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Approach"
        title="Clarity before <span class='accent'>complexity.</span>"
        body="Good systems begin with a shared understanding of the problem. Our approach keeps discovery, design, delivery, and learning connected."
      />
      <ApproachBlock />
    </>
  );
}
