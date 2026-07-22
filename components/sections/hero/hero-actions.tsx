'use client';

import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui';
import { SITE_CONFIG, getWhatsappUrl } from '@/constants/site';

/**
 * CTAs da Hero — fundo agora é a fotografia (escuro à esquerda).
 * Primário: vermelho institucional, sombra suave, leve elevação no hover.
 * Secundário: transparente, borda branca, blur leve — para ler bem sobre a
 * imagem (sobrescrevemos localmente o variant "outline", que por padrão é
 * pensado para fundos claros).
 */
export function HeroActions() {
  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Button
        asChild
        variant="cta"
        size="xl"
        className="w-full shadow-[0_12px_28px_-8px_rgba(220,38,38,0.55)] transition-transform hover:-translate-y-0.5 sm:w-auto"
      >
        <a href="#formulario" aria-label="Receber uma análise personalizada de plano de saúde">
          Receber análise personalizada
          <ArrowRight aria-hidden="true" />
        </a>
      </Button>

      <Button
        asChild
        variant="outline"
        size="xl"
        className="w-full border-white/50 bg-white/10 text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 sm:w-auto"
      >
        <a
          href={getWhatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Falar com um especialista do ${SITE_CONFIG.name} pelo WhatsApp`}
        >
          <MessageCircle aria-hidden="true" />
          Falar pelo WhatsApp
        </a>
      </Button>
    </div>
  );
}
