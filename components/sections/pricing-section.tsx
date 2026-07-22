import { Section, SectionHeading, Reveal } from '@/components/common';
import { Button } from '@/components/ui';
import { ArrowRight, Info } from 'lucide-react';
import {
  PRICING_DISCLAIMER,
  PRICING_PLAN,
  PRICING_ROWS,
} from '@/constants/pricing';
import { cn } from '@/lib/utils';

/**
 * Valores de referência — dá ao visitante uma ideia de investimento ainda no
 * site, antes de falar com um especialista. Tabela na paleta da marca
 * (azul-marinho + branco), responsiva (rola dentro do próprio bloco em telas
 * muito estreitas) e com aviso claro de que os valores são referência.
 */
export function PricingSection() {
  return (
    <Section id="valores" background="muted" aria-labelledby="valores-title">
      <SectionHeading
        id="valores-title"
        align="center"
        eyebrow="Valores de referência"
        title="Tenha uma ideia do investimento agora mesmo"
        description="Uma referência de valores por faixa etária para você se planejar. A cotação exata é feita de forma gratuita e personalizada."
        className="mx-auto mb-12"
      />

      <Reveal className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          {/* Cabeçalho do plano */}
          <div className="border-b border-border bg-primary px-5 py-5 text-center text-primary-foreground sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
              Plano
            </p>
            <p className="font-heading text-xl font-bold sm:text-2xl">{PRICING_PLAN.name}</p>
          </div>

          {/* Tabela */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[20rem] border-collapse text-sm sm:text-base">
              <caption className="sr-only">
                Valores de referência do plano {PRICING_PLAN.name} por faixa etária
              </caption>
              <thead>
                <tr className="border-b border-border text-left">
                  <th scope="col" className="px-4 py-4 font-semibold text-muted-foreground sm:px-6">
                    Faixa etária
                  </th>
                  <th scope="col" className="px-4 py-4 text-center sm:px-6">
                    <span className="block font-bold text-primary">
                      {PRICING_PLAN.tiers.enfermaria.label}
                    </span>
                    <span className="block text-xs font-normal text-muted-foreground">
                      {PRICING_PLAN.tiers.enfermaria.ans}
                    </span>
                  </th>
                  <th scope="col" className="px-4 py-4 text-center sm:px-6">
                    <span className="block font-bold text-primary">
                      {PRICING_PLAN.tiers.apartamento.label}
                    </span>
                    <span className="block text-xs font-normal text-muted-foreground">
                      {PRICING_PLAN.tiers.apartamento.ans}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRICING_ROWS.map((row) => (
                  <tr
                    key={row.ageRange}
                    className={cn(
                      'border-b border-border/70 last:border-0',
                      row.highlight && 'bg-accent/40'
                    )}
                  >
                    <th
                      scope="row"
                      className="px-4 py-5 text-left font-semibold text-foreground sm:px-6"
                    >
                      {row.ageRange}
                    </th>
                    <td className="px-4 py-5 text-center font-bold text-foreground sm:px-6">
                      {row.enfermaria}
                    </td>
                    <td className="px-4 py-5 text-center font-bold text-foreground sm:px-6">
                      {row.apartamento}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Aviso de referência */}
        <p className="mx-auto mt-5 flex max-w-2xl items-start gap-2 text-center text-xs leading-relaxed text-muted-foreground">
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
      </Reveal>
    </Section>
  );
}
