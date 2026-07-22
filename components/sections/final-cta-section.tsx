import { Reveal } from '@/components/common';
import { Container } from '@/components/common/container';
import { Button } from '@/components/ui';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, getWhatsappUrl } from '@/constants/site';

/**
 * CTA Final — último convite à ação antes do rodapé. Fundo claro para não
 * competir com o bloco azul do formulário; CTA vermelho em destaque.
 */
export function FinalCtaSection() {
  return (
    <section aria-labelledby="cta-final-title" className="bg-accent/40 py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 id="cta-final-title" className="text-3xl text-foreground sm:text-4xl">
            Dê o próximo passo com quem cuida de gente
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Converse com um especialista do {SITE_CONFIG.name} e descubra, sem compromisso, o
            plano ideal para você ou para quem você ama.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button asChild variant="cta" size="lg" className="w-full sm:w-auto">
              <a href="#formulario" aria-label="Receber análise personalizada gratuita">
                Receber análise personalizada
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto transition-colors hover:bg-[#20ba56]">
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Falar com especialista do ${SITE_CONFIG.name} no WhatsApp`}
              >
                <MessageCircle aria-hidden="true" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
