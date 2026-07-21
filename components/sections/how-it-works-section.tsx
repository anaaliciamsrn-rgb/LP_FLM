import { Section, SectionHeading, Reveal } from '@/components/common';
import { STEPS_ITEMS } from '@/constants/content';

/**
 * Como funciona — timeline do processo.
 * Desktop (lg+): horizontal, com a linha de conexão atrás dos números.
 * Mobile/Tablet: vertical automática, com a linha à esquerda.
 */
export function HowItWorksSection() {
  return (
    <Section id="como-funciona" background="white" aria-labelledby="como-funciona-title">
      <SectionHeading
        id="como-funciona-title"
        align="center"
        eyebrow="Simples do início ao fim"
        title="Como funciona"
        description="Quatro passos claros — do primeiro contato à decisão tranquila."
        className="mx-auto mb-14"
      />

      <ol className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
        {/* Linha de conexão: vertical no mobile, horizontal no desktop. */}
        <span
          aria-hidden="true"
          className="absolute left-6 top-0 h-full w-px bg-border lg:left-0 lg:top-8 lg:h-px lg:w-full"
        />
        {STEPS_ITEMS.map((step, i) => (
          <Reveal as="li" key={step.step} delay={i * 0.1} className="relative">
            <div className="flex items-start gap-4 lg:flex-col lg:items-start">
              <span className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground shadow-card ring-4 ring-background">
                {step.step}
              </span>
              <div className="lg:mt-5">
                <div className="mb-1.5 hidden text-primary lg:block">
                  <step.icon aria-hidden="true" className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
