'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, m } from 'framer-motion';
import { Check, ChevronDown, Loader2, Plus } from 'lucide-react';
import { Button, Input, Label, Select, Textarea } from '@/components/ui';
import { cn } from '@/lib/utils';
import { leadSchema, PLAN_FOR_OPTIONS, type LeadSchema } from '@/lib/validations/lead-schema';

/**
 * Formulário de captação de lead.
 * - Dinâmico: Revela 1 ou 2 campos de idade baseado na seleção de quem é o plano.
 * - Validação com Zod e React Hook Form. Envio para /api/lead.php.
 */
export function LeadForm() {
  const [showOptional, setShowOptional] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [website, setWebsite] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    watch, // Importante para monitorar os valores do formulário em tempo real
    formState: { errors, isSubmitting },
  } = useForm<LeadSchema>({
    resolver: zodResolver(leadSchema),
    mode: 'onBlur',
  });

  // Captura o valor atual selecionado na caixa de seleção "O plano é para"
  const valorPlanoPara = watch('planFor');

  async function onSubmit(data: LeadSchema) {
    try {
      const res = await fetch('/api/saude-terceira-idade.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, website }),
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('success');
      reset();
      setWebsite('');
      setShowOptional(false);
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-2xl border border-success/30 bg-success/5 p-8 text-center"
      >
        <span className="mb-4 inline-flex size-14 items-center justify-center rounded-full bg-success text-success-foreground">
          <Check aria-hidden="true" className="size-7" />
        </span>
        <h3 className="text-xl font-bold text-foreground">Recebemos seus dados!</h3>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Um especialista do Grupo FLM vai entrar em contato em breve, sem compromisso.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus('idle')}>
          Enviar outra solicitação
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Se você é humano, ignore este campo:</label>
        <input
          id="website"
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="grid gap-5">
        <Field label="Nome completo" htmlFor="name" required error={errors.name?.message}>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Como podemos te chamar?"
            aria-invalid={!!errors.name}
            {...register('name')}
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Telefone / WhatsApp" htmlFor="phone" required error={errors.phone?.message}>
            <Input
              id="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(11) 90000-0000"
              aria-invalid={!!errors.phone}
              {...register('phone')}
            />
          </Field>

          <Field label="O plano é para" htmlFor="planFor" required error={errors.planFor?.message}>
            <Select id="planFor" defaultValue="" aria-invalid={!!errors.planFor} {...register('planFor')}>
              <option value="" disabled>
                Selecione…
              </option>
              {PLAN_FOR_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </Select>
          </Field>
        </div>

        <Field label="E-mail" htmlFor="email" required error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="voce@email.com"
            aria-invalid={!!errors.email}
            {...register('email')}
          />
        </Field>

        {/* Botão que revela os campos opcionais */}
        <button
          type="button"
          onClick={() => setShowOptional((v) => !v)}
          aria-expanded={showOptional}
          aria-controls="campos-opcionais"
          className="inline-flex items-center gap-2 self-start rounded-md text-sm font-semibold text-primary transition-colors hover:text-danger focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {showOptional ? (
            <ChevronDown aria-hidden="true" className="size-4 rotate-180 transition-transform" />
          ) : (
            <Plus aria-hidden="true" className="size-4" />
          )}
          {showOptional ? 'Ocultar informações extras' : 'Adicionar mais informações'}
        </button>

        <AnimatePresence initial={false}>
          {showOptional && (
            <m.div
              id="campos-opcionais"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="grid gap-5 pt-1">
                
                {/* LOGICA CONDICIONAL DE IDADES: 
                    Se o valor selecionado for 'casal', renderiza a grade com duas caixas de idade */}
                {(valorPlanoPara === 'para-casal') ||(valorPlanoPara === 'para-meus-pais') ? (
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Idade do primeiro beneficiário" htmlFor="age" error={errors.age?.message}>
                      <Input
                        id="age"
                        inputMode="numeric"
                        placeholder="Ex.: 65"
                        aria-invalid={!!errors.age}
                        {...register('age')}
                      />
                    </Field>
                    <Field label="Idade do segundo beneficiário" htmlFor="secondAge" error={errors.secondAge?.message}>
                      <Input
                        id="secondAge"
                        inputMode="numeric"
                        placeholder="Ex.: 60"
                        aria-invalid={!!errors.secondAge}
                        {...register('secondAge')}
                      />
                    </Field>
                  </div>
                ) : (
                  /* Se for qualquer outro valor selecionado (menos a string vazia inicial), exibe apenas um campo */
                  !!valorPlanoPara && (
                    <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Idade do beneficiário" htmlFor="age" error={errors.age?.message}>
                      <Input
                        id="age"
                        inputMode="numeric"
                        placeholder="Ex.: 65"
                        aria-invalid={!!errors.age}
                        {...register('age')}
                      />
                    </Field>
                    </div>
                  )
                )}

                <Field label="Cidade" htmlFor="city" error={errors.city?.message}>
                  <Input id="city" autoComplete="address-level2" placeholder="Sua cidade" {...register('city')} />
                </Field>

                <Field label="Mensagem" htmlFor="message" error={errors.message?.message}>
                  <Textarea
                    id="message"
                    placeholder="Conte um pouco sobre o que você precisa (opcional)."
                    {...register('message')}
                  />
                </Field>
              </div>
            </m.div>
          )}
        </AnimatePresence>

        {/* Consentimento */}
        <div>
          <label className="flex items-start gap-3 text-sm text-muted-foreground">
            <input
              type="checkbox"
              className="mt-0.5 size-5 shrink-0 rounded border-input text-primary focus-visible:ring-2 focus-visible:ring-ring"
              aria-invalid={!!errors.consent}
              {...register('consent')}
            />
            <span>
              Autorizo o Grupo FLM a entrar em contato comigo sobre planos de saúde e concordo
              com o tratamento dos meus dados conforme a política de privacidade.
            </span>
          </label>
          {errors.consent?.message && <FieldError>{errors.consent.message}</FieldError>}
        </div>

        <Button type="submit" variant="cta" size="lg" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <>
              <Loader2 aria-hidden="true" className="animate-spin" />
              Enviando…
            </>
          ) : (
            'Quero minha análise gratuita'
          )}
        </Button>

        {status === 'error' && (
          <FieldError>
            Não foi possível enviar agora. Tente novamente ou fale conosco pelo WhatsApp.
          </FieldError>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={htmlFor} required={required}>
        {label}
      </Label>
      {children}
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return (
    <p role="alert" className={cn('mt-1.5 text-sm font-medium text-danger')}>
      {children}
    </p>
  );
}
