import { z } from 'zod';

/**
 * Schema de validação do lead (React Hook Form + Zod).
 * Campos obrigatórios + opcionais. Mensagens em português, claras e gentis.
 */
export const leadSchema = z.object({
  // Obrigatórios
  name: z
    .string({ required_error: 'Informe seu nome.' })
    .trim()
    .min(2, 'Informe seu nome completo.')
    .max(80, 'Nome muito longo.'),
  phone: z
    .string({ required_error: 'Informe um telefone.' })
    .trim()
    .min(10, 'Informe um telefone válido com DDD.')
    .max(20, 'Telefone inválido.')
    .regex(/^[0-9()+\-\s]+$/, 'Use apenas números e os símbolos ( ) + -.'),
  planFor: z.enum(['para-mim', 'para-meus-pais', 'para-casal', 'outro'], {
    required_error: 'Selecione uma opção.',
  }),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'É preciso concordar para prosseguirmos.' }),
  }),

  // Opcionais (inicialmente escondidos)
  email: z
    .string()
    .trim()
    .email('E-mail inválido.')
    .optional()
    .or(z.literal('')),
  age: z
    .string()
    .trim()
    .regex(/^\d{2,3}$/, 'Idade inválida.')
    .optional()
    .or(z.literal('')),
  city: z.string().trim().max(80, 'Cidade muito longa.').optional().or(z.literal('')),
  message: z.string().trim().max(600, 'Mensagem muito longa.').optional().or(z.literal('')),
});

export type LeadSchema = z.infer<typeof leadSchema>;

export const PLAN_FOR_OPTIONS = [
  { value: 'para-mim', label: 'Para mim' },
  { value: 'para-meus-pais', label: 'Para meus pais' },
  { value: 'para-casal', label: 'Para o casal' },
  { value: 'outro', label: 'Outro' },
] as const;
