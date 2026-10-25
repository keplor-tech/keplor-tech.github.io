'use client';

import { PageHero, ServicesBlock, IndustriesBlock } from '@/components/keplor/PageBlocks';

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="A practical view of intelligent <span class='accent'>software.</span>"
        body="Explore the capabilities and application areas Keplor can bring into a focused architecture conversation."
      />
      <ServicesBlock />
      <IndustriesBlock />
    </>
  );
}
