'use client';

import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui';
import { SITE_CONFIG, getWhatsappUrl } from '@/constants/site';

/**
 * CTAs da Hero com hierarquia clara:
 * - Primário: vermelho institucional, sombra vermelha suave, leve elevação
 *   e brilho discreto no hover — é o botão que deve chamar mais atenção.
 * - Secundário: bem mais discreto (borda fina, fundo quase transparente)
 *   para não competir visualmente com o primário.
 */
export function HeroActions() {
  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Button
        asChild
        variant="cta"
        size="xl"
        className="group relative w-full overflow-hidden shadow-[0_14px_32px_-10px_rgba(220,38,38,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_-8px_rgba(220,38,38,0.7)] sm:w-auto"
      >
        <a href="#formulario" aria-label="Solicitar diagnóstico gratuito de plano de saúde">
          <span className="relative z-10 flex items-center gap-2">
            Solicitar diagnóstico gratuito
            <ArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
          </span>
          {/* Brilho discreto que atravessa o botão no hover. */}
          <span
            aria-hidden="true"
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />
        </a>
      </Button>

      <Button
        asChild
        variant="outline"
        size="xl"
        className="w-full border-white/40 bg-transparent text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10 sm:w-auto"
      >
        <a
          href={getWhatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Falar com um especialista do ${SITE_CONFIG.name} no WhatsApp`}
        >
          <MessageCircle aria-hidden="true" />
          Falar no WhatsApp
        </a>
      </Button>
    </div>
  );
}
