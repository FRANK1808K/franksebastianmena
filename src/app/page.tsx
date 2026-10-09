import HeroSection from '@/components/sections/home/HeroSection';
import ValueProposition from '@/components/sections/home/ValueProposition';
import TaglineReveal from '@/components/sections/home/TaglineReveal';
import CurrentSection from '@/components/sections/home/CurrentSection';
import CTASection from '@/components/sections/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <TaglineReveal />
      <CurrentSection />
      <CTASection />
    </>
  );
}
