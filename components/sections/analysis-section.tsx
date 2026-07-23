import { Section, SectionHeading, Reveal, FeatureCard } from '@/components/common';
import { ANALYSIS_ITEMS } from '@/constants/content';

/**
 * O que deve ser analisado — variáveis que consideramos antes de recomendar
 * qualquer plano. Reforça a análise criteriosa e imparcial.
 */
export function AnalysisSection() {
  return (
    <Section id="analise" background="muted" aria-labelledby="analise-title">
      <SectionHeading
        id="analise-title"
        align="center"
        eyebrow="Análise criteriosa"
        title="O que analisamos antes de indicar um plano"
        description="Nada de indicação genérica. Olhamos para cada detalhe que faz diferença na sua saúde e no seu orçamento."
        className="mx-auto mb-12"
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ANALYSIS_ITEMS.map((item, i) => (
          <Reveal as="li" key={item.title} delay={(i % 3) * 0.08}>
            <FeatureCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              accent="danger"
            />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
