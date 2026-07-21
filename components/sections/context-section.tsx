import { Section, SectionHeading, Reveal } from '@/components/common';
import { HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';

const POINTS = [
  {
    icon: HeartHandshake,
    title: 'Sem pressão de vendas',
    text: 'Orientação honesta, no seu tempo, para você decidir com segurança.',
  },
  {
    icon: ShieldCheck,
    title: 'Escolha bem informada',
    text: 'Você entende cada detalhe antes de assinar qualquer contrato.',
  },
  {
    icon: Sparkles,
    title: 'Tranquilidade para a família',
    text: 'Cuidar de quem a gente ama fica mais simples e mais leve.',
  },
];

/**
 * Contexto — conecta emocionalmente com a dor de escolher um plano na
 * terceira idade e posiciona o Grupo FLM como parceiro de confiança.
 */
export function ContextSection() {
  return (
    <Section id="contexto" background="white" aria-labelledby="contexto-title">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <SectionHeading
          id="contexto-title"
          eyebrow="Por que isso importa"
          title="Escolher um plano de saúde não deveria ser confuso nem solitário."
          description="Carências, reajustes, rede credenciada, coparticipação… são muitas variáveis para decidir sozinho — ainda mais quando o que está em jogo é a saúde de quem a gente ama. O Grupo FLM existe para transformar essa decisão difícil em um caminho claro e acolhedor."
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {POINTS.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.08}>
              <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-muted/40 p-5">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-background text-primary shadow-soft">
                  <p.icon aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h3 className="font-bold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
