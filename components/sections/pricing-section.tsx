import { Section, SectionHeading, Reveal } from '@/components/common';
import { Button } from '@/components/ui';
import { ArrowRight, Info } from 'lucide-react';
import { PRICING_CATEGORIES, PRICING_DISCLAIMER } from '@/constants/pricing';

/**
 * Valores de referência — dá ao visitante uma ideia de investimento ainda no
 * site, sem burocracia: apenas a categoria de acomodação e o valor "a partir
 * de", em cards simples e visuais. Sem nome de operadora, sem código ANS e
 * sem tabela por faixa etária (por pedido do cliente) — a cotação exata
 * fica com o especialista.
 */
export function PricingSection() {
  return (
    <Section id="valores" background="muted" aria-labelledby="valores-title">
      <SectionHeading
        id="valores-title"
        align="center"
        eyebrow="Valores de referência"
        title="Tenha uma ideia do investimento agora mesmo"
        description="Um ponto de partida para você se planejar. A cotação exata é gratuita e personalizada."
        className="mx-auto mb-12"
      />

      <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
        {PRICING_CATEGORIES.map((category, i) => (
          <Reveal key={category.label} delay={i * 0.1}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
              {/* Glow decorativo discreto no canto. */}
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 size-40 rounded-full bg-primary/5 transition-colors group-hover:bg-primary/10"
              />

              <span className="relative mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <category.icon aria-hidden="true" className="size-7" />
              </span>

              <h3 className="relative text-xl font-bold text-foreground">{category.label}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {category.description}
              </p>

              <div className="relative mt-6 border-t border-border pt-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  A partir de
                </span>
                <p className="mt-1 font-heading text-3xl font-extrabold text-primary sm:text-4xl">
                  {category.startingPrice}
                  <span className="ml-1 text-sm font-medium text-muted-foreground">/mês</span>
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Aviso de referência */}
      <p className="mx-auto mt-6 flex max-w-2xl items-start gap-2 text-center text-xs leading-relaxed text-muted-foreground">
        <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
        <span className="text-left">{PRICING_DISCLAIMER}</span>
      </p>

      {/* CTA */}
      <div className="mt-8 flex justify-center">
        <Button asChild variant="cta" size="lg" className="w-full sm:w-auto">
          <a href="#formulario" aria-label="Receber uma cotação personalizada e gratuita">
            Quero minha cotação personalizada
            <ArrowRight aria-hidden="true" />
          </a>
        </Button>
      </div>
    </Section>
  );
}
