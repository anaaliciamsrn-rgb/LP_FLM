'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, m } from 'framer-motion';
import { Menu, MessageCircle, X } from 'lucide-react';
import { Logo } from '@/components/layout/logo';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { OFFICIAL_NAV_ITEMS } from '@/constants/navigation';
import { SITE_CONFIG, getWhatsappUrl } from '@/constants/site';

/**
 * Navbar da landing page, alinhada ao site oficial do Grupo FLM
 * (logo à esquerda, navegação institucional, CTA de WhatsApp à direita).
 *
 * - Fica fixa no topo e ganha fundo/sombra ao rolar.
 * - Menu mobile acessível: fecha com Escape, trava o scroll do body e
 *   respeita `prefers-reduced-motion` (via MotionProvider).
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const whatsappUrl = getWhatsappUrl();

  // Sombra/fundo ao rolar.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Escape fecha o menu; trava o scroll enquanto aberto.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/85 backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8"
      >
        <Logo />

        {/* Navegação desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {OFFICIAL_NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Ações desktop */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://www.grupoflm.com.br/lp/mapa-protecao/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-2 text-sm font-semibold text-primary transition-colors hover:text-danger"
          >
            Diagnóstico de risco
          </a>
          <Button asChild variant="primary" size="sm">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Falar com o ${SITE_CONFIG.name} no WhatsApp`}
            >
              <MessageCircle aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>

        {/* Botão do menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="tap-target inline-flex items-center justify-center rounded-md text-primary transition-colors hover:bg-secondary lg:hidden"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {/* Painel do menu mobile */}
      <AnimatePresence>
        {open && (
          <m.div
            id="menu-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-border bg-background lg:hidden"
          >
            <ul className="mx-auto flex w-full max-w-screen-2xl flex-col gap-1 px-4 py-4 sm:px-6">
              {OFFICIAL_NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild variant="primary" size="lg" className="w-full">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Falar com o ${SITE_CONFIG.name} no WhatsApp`}
                  >
                    <MessageCircle aria-hidden="true" />
                    Falar no WhatsApp
                  </a>
                </Button>
              </li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
