import { Section, SectionHeading, Reveal, FeatureCard } from '@/components/common';
import { POSSIBILITIES_ITEMS } from '@/constants/content';

/**
 * Possibilidades — formatos de plano disponíveis, para o visitante enxergar
 * que há um caminho para o seu caso específico.
 */
export function PossibilitiesSection() {
  return (
    <Section id="possibilidades" background="white" aria-labelledby="possibilidades-title">
      <SectionHeading
        id="possibilidades-title"
        eyebrow="Caminhos possíveis"
        title="Opções que se encaixam no seu momento"
        description="Individual, familiar, por adesão ou planos sênior — encontramos o formato certo para você e para quem você cuida."
        className="mb-12 max-w-2xl"
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {POSSIBILITIES_ITEMS.map((item, i) => (
          <Reveal as="li" key={item.title} delay={(i % 4) * 0.07}>
            <FeatureCard icon={item.icon} title={item.title} description={item.description} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
