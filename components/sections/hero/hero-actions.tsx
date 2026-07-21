'use client';

import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui';
import { SITE_CONFIG, getWhatsappUrl } from '@/constants/site';

/**
 * Ações da Hero. Mobile: largura total, empilhados. Desktop: lado a lado.
 */
export function HeroActions() {
  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Button asChild variant="cta" size="lg" className="w-full sm:w-auto">
        <a href="#formulario" aria-label="Receber uma análise personalizada de plano de saúde">
          Receber análise personalizada
          <ArrowRight aria-hidden="true" />
        </a>
      </Button>

      <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
        <a
          href={getWhatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Falar com um especialista do ${SITE_CONFIG.name} no WhatsApp`}
        >
          <MessageCircle aria-hidden="true" />
          Falar com especialista
        </a>
      </Button>
    </div>
  );
}
