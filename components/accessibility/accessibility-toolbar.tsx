'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import {
  Accessibility,
  Contrast,
  Eye,
  Minus,
  MoveVertical,
  Plus,
  RotateCcw,
  Sparkles,
  X,
} from 'lucide-react';
import { useAccessibility } from '@/components/accessibility/accessibility-provider';
import { cn } from '@/lib/utils';
import type { ColorBlindMode, LineHeightScale } from '@/types/accessibility';

/**
 * Toolbar de Acessibilidade — botão flutuante (canto inferior direito) que
 * abre um painel com os controles. Consome o AccessibilityProvider, que
 * persiste tudo em LocalStorage e aplica as preferências no <html>.
 *
 * Acessível: aria-expanded/controls, fecha com Escape, foco visível,
 * navegação por teclado. Respeita reduced-motion via MotionProvider.
 */

const COLORBLIND_OPTIONS: { value: ColorBlindMode; label: string }[] = [
  { value: 'none', label: 'Nenhum' },
  { value: 'protanopia', label: 'Protanopia' },
  { value: 'deuteranopia', label: 'Deuteranopia' },
  { value: 'tritanopia', label: 'Tritanopia' },
];

const LINE_HEIGHT_OPTIONS: LineHeightScale[] = [1, 1.25, 1.5, 1.75];

export function AccessibilityToolbar() {
  const a11y = useAccessibility();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="fixed bottom-4 right-4 z-[80] print:hidden sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <m.div
            ref={panelRef}
            role="dialog"
            aria-label="Opções de acessibilidade"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-16 right-0 w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-border bg-card p-5 shadow-elevated"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-base font-bold text-foreground">
                <Accessibility aria-hidden="true" className="size-5 text-primary" />
                Acessibilidade
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar painel de acessibilidade"
                className="tap-target inline-flex items-center justify-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            {/* Tamanho da fonte */}
            <fieldset className="mb-4">
              <legend className="mb-2 text-sm font-semibold text-foreground">
                Tamanho do texto
              </legend>
              <div className="flex items-center gap-2">
                <ToolButton
                  onClick={a11y.decreaseFont}
                  aria-label="Diminuir tamanho do texto"
                >
                  <Minus aria-hidden="true" className="size-4" /> A-
                </ToolButton>
                <span
                  aria-live="polite"
                  className="min-w-14 text-center text-sm font-semibold text-muted-foreground"
                >
                  {Math.round(a11y.fontScale * 100)}%
                </span>
                <ToolButton
                  onClick={a11y.increaseFont}
                  aria-label="Aumentar tamanho do texto"
                >
                  <Plus aria-hidden="true" className="size-4" /> A+
                </ToolButton>
              </div>
            </fieldset>

            {/* Toggles */}
            <div className="mb-4 space-y-2">
              <ToggleRow
                icon={Contrast}
                label="Alto contraste"
                pressed={a11y.highContrast}
                onClick={a11y.toggleHighContrast}
              />
              <ToggleRow
                icon={Sparkles}
                label="Reduzir animações"
                pressed={a11y.reduceMotion}
                onClick={a11y.toggleReduceMotion}
              />
            </div>

            {/* Espaçamento entre linhas */}
            <fieldset className="mb-4">
              <legend className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <MoveVertical aria-hidden="true" className="size-4 text-primary" />
                Espaçamento entre linhas
              </legend>
              <div className="grid grid-cols-4 gap-1.5">
                {LINE_HEIGHT_OPTIONS.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => a11y.setLineHeight(value)}
                    aria-pressed={a11y.lineHeightScale === value}
                    className={cn(
                      'rounded-md border px-2 py-2 text-xs font-semibold transition-colors',
                      a11y.lineHeightScale === value
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border bg-background text-foreground hover:bg-secondary'
                    )}
                  >
                    {value.toFixed(2).replace('.00', '')}×
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Daltonismo */}
            <fieldset className="mb-4">
              <legend className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Eye aria-hidden="true" className="size-4 text-primary" />
                Daltonismo
              </legend>
              <div className="grid grid-cols-2 gap-1.5">
                {COLORBLIND_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => a11y.setColorBlindMode(opt.value)}
                    aria-pressed={a11y.colorBlindMode === opt.value}
                    className={cn(
                      'rounded-md border px-2 py-2 text-xs font-semibold transition-colors',
                      a11y.colorBlindMode === opt.value
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border bg-background text-foreground hover:bg-secondary'
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <button
              type="button"
              onClick={a11y.reset}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <RotateCcw aria-hidden="true" className="size-4" />
              Restaurar padrões
            </button>
          </m.div>
        )}
      </AnimatePresence>

      {/* Botão flutuante */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label="Abrir opções de acessibilidade"
        className="inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elevated transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:hover:scale-100"
      >
        <Accessibility aria-hidden="true" className="size-7" />
      </button>
    </div>
  );
}

function ToolButton({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className="inline-flex flex-1 items-center justify-center gap-1 rounded-md border border-border bg-background px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      {...props}
    >
      {children}
    </button>
  );
}

function ToggleRow({
  icon: Icon,
  label,
  pressed,
  onClick,
}: {
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  label: string;
  pressed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={pressed}
      className={cn(
        'flex w-full items-center justify-between rounded-lg border px-3 py-2.5 text-sm font-semibold transition-colors',
        pressed
          ? 'border-primary bg-primary/5 text-primary'
          : 'border-border bg-background text-foreground hover:bg-secondary'
      )}
    >
      <span className="flex items-center gap-2">
        <Icon aria-hidden className="size-4" />
        {label}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          'relative h-5 w-9 rounded-full transition-colors',
          pressed ? 'bg-primary' : 'bg-muted'
        )}
      >
        <span
          className={cn(
            'absolute top-0.5 size-4 rounded-full bg-white shadow transition-all',
            pressed ? 'left-[1.125rem]' : 'left-0.5'
          )}
        />
      </span>
    </button>
  );
}
