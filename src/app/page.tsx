import HeroSection from '@/components/sections/home/HeroSection';
import ValueProposition from '@/components/sections/home/ValueProposition';
import PublicationFeature from '@/components/sections/home/PublicationFeature';
import TalkSection from '@/components/sections/home/TalkSection';
import TaglineReveal from '@/components/sections/home/TaglineReveal';
import CurrentSection from '@/components/sections/home/CurrentSection';
import CTASection from '@/components/sections/home/CTASection';
import { jsonLdScript, videoJsonLd } from '@/lib/seo';

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(videoJsonLd)} />
      <HeroSection />
      <ValueProposition />
      <PublicationFeature />
      <TalkSection />
      <TaglineReveal />
      <CurrentSection />
      <CTASection />
    </>
  );
}
