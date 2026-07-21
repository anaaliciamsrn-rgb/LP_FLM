'use client';

import { useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Section, SectionHeading } from '@/components/common';
import { cn } from '@/lib/utils';
import { FAQ_ITEMS } from '@/constants/faq';

/**
 * FAQ — accordion acessível (um item aberto por vez). Usa <button> com
 * aria-expanded/controls e região com role apropriado. Expansão suave com
 * Framer Motion. Os dados vêm de FAQ_ITEMS (mesmos usados no JSON-LD).
 */
export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <Section id="faq" background="white" aria-labelledby="faq-title">
      <SectionHeading
        id="faq-title"
        align="center"
        eyebrow="Dúvidas frequentes"
        title="Perguntas que ouvimos com frequência"
        className="mx-auto mb-12"
      />

      <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
        {FAQ_ITEMS.map((item) => {
          const open = openId === item.id;
          return (
            <div key={item.id}>
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : item.id)}
                  aria-expanded={open}
                  aria-controls={`${item.id}-panel`}
                  id={`${item.id}-trigger`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-bold text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-6 sm:text-lg"
                >
                  {item.question}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      'size-5 shrink-0 text-primary transition-transform duration-300',
                      open && 'rotate-180'
                    )}
                  />
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {open && (
                  <m.div
                    id={`${item.id}-panel`}
                    role="region"
                    aria-labelledby={`${item.id}-trigger`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-base leading-relaxed text-muted-foreground sm:px-6">
                      {item.answer}
                    </p>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
