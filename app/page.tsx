import { Hero, PerspectiveBlock, ServicesBlock, IndustriesBlock, ApproachBlock, AboutBlock, ContactBlock } from '@/components/keplor/PageBlocks';

export default function Home() {
  return (
    <>
      <Hero id="home" />
      <PerspectiveBlock />
      <ServicesBlock />
      <IndustriesBlock />
      <ApproachBlock />
      <AboutBlock />
      <ContactBlock />
    </>
  );
}
