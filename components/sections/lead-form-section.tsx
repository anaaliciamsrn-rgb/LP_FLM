import { Reveal } from '@/components/common';
import { Container } from '@/components/common/container';
import { LeadForm } from '@/components/forms';
import { SITE_CONFIG, getWhatsappUrl } from '@/constants/site';
import { Clock, MessageCircle, PhoneCall, ShieldCheck } from 'lucide-react';

const ASSURANCES = [
  { icon: ShieldCheck, text: 'Análise gratuita e sem compromisso' },
  { icon: Clock, text: 'Primeiras opções em até 1 dia útil' },
  { icon: MessageCircle, text: 'Atendimento humano do começo ao fim' },
];

/**
 * Formulário — seção de conversão. Fundo azul-marinho para destacar o bloco,
 * texto de apoio à esquerda e o formulário (card branco) à direita.
 */
export function LeadFormSection() {
  return (
    <section
      id="formulario"
      aria-labelledby="formulario-title"
      className="scroll-mt-24 bg-primary py-16 text-primary-foreground sm:py-20 lg:py-28"
    >
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        <Reveal>
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-white/70">
            Fale com a gente
          </span>
          <h2 id="formulario-title" className="text-3xl sm:text-4xl">
            Receba uma análise personalizada, gratuita e sem compromisso
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-white/80">
            Preencha os campos e um especialista entra em contato para entender seu momento e
            apresentar as melhores opções.
          </p>

          <ul className="mt-8 space-y-4">
            {ASSURANCES.map((a) => (
              <li key={a.text} className="flex items-center gap-3 text-white/90">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <a.icon aria-hidden="true" className="size-5" />
                </span>
                <span className="font-medium">{a.text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-3 rounded-xl bg-white/10 p-4">
            <PhoneCall aria-hidden="true" className="size-6 shrink-0" />
            <p className="text-sm">
              Prefere conversar agora?{' '}
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline underline-offset-4 hover:text-white"
              >
                Chamar no WhatsApp {SITE_CONFIG.contact.phoneDisplay}
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <LeadForm />
        </Reveal>
      </Container>
    </section>
  );
}
