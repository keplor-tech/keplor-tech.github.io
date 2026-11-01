import { Hero, ServicesBlock, IndustriesBlock, ApproachBlock, AboutBlock, ContactBlock } from '@/components/keplor/PageBlocks';

export default function Home() {
  return (
    <>
      <Hero id="home" />
      <ServicesBlock />
      <IndustriesBlock />
      <ApproachBlock />
      <AboutBlock />
      <ContactBlock />
    </>
  );
}
