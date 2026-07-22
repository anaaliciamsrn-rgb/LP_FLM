import { buildFaqJsonLd } from '@/lib/seo';
import { FAQ_ITEMS } from '@/constants/faq';
import {
  Hero,
  ContextSection,
  AnalysisSection,
  PossibilitiesSection,
  PricingSection,
  AudienceSection,
  HowItWorksSection,
  DifferentialsSection,
  LeadFormSection,
  FaqSection,
  FinalCtaSection,
} from '@/components/sections';

/**
 * Landing page — Plano de Saúde para Terceira Idade (Grupo FLM).
 * Ordem das seções conforme briefing (Hero → CTA final; rodapé no layout).
 */
export default function HomePage() {
  const faqJsonLd = buildFaqJsonLd(FAQ_ITEMS);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <ContextSection />
      <AnalysisSection />
      <PossibilitiesSection />
      <PricingSection />
      <AudienceSection />
      <HowItWorksSection />
      <DifferentialsSection />
      <LeadFormSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
