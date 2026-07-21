import { Section, SectionHeading, Reveal, FeatureCard } from '@/components/common';
import { DIFFERENTIALS_ITEMS } from '@/constants/content';

/**
 * Diferenciais — por que escolher o Grupo FLM. Reforça confiança e autoridade.
 */
export function DifferentialsSection() {
  return (
    <Section id="diferenciais" background="muted" aria-labelledby="diferenciais-title">
      <SectionHeading
        id="diferenciais-title"
        eyebrow="Nossos diferenciais"
        title="Uma consultoria, não um call center"
        description="A diferença de ter alguém que entende o seu cenário completo e pensa junto com você."
        className="mb-12 max-w-2xl"
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {DIFFERENTIALS_ITEMS.map((item, i) => (
          <Reveal as="li" key={item.title} delay={(i % 4) * 0.07}>
            <FeatureCard icon={item.icon} title={item.title} description={item.description} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
