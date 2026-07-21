import { Section, SectionHeading, Reveal } from '@/components/common';
import { AUDIENCE_ITEMS } from '@/constants/content';

/**
 * Para quem é — ajuda o visitante a se reconhecer (você 50+, filhos cuidando
 * dos pais, casais). Cards mais amplos, com pouco texto.
 */
export function AudienceSection() {
  return (
    <Section id="para-quem" background="tint" aria-labelledby="para-quem-title">
      <SectionHeading
        id="para-quem-title"
        align="center"
        eyebrow="Para quem é"
        title="Feito para você e para quem você ama"
        className="mx-auto mb-12"
      />
      <ul className="grid gap-6 md:grid-cols-3">
        {AUDIENCE_ITEMS.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 0.08}>
            <div className="flex h-full flex-col items-center rounded-2xl bg-background p-8 text-center shadow-soft">
              <span className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-accent/70 text-primary">
                <item.icon aria-hidden="true" className="size-7" />
              </span>
              <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
