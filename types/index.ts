import type { ReactNode } from 'react';

export * from './accessibility';

/** Props padrão para componentes que recebem filhos. */
export interface WithChildren {
  children: ReactNode;
}

/** Props padrão para componentes estilizáveis. */
export interface WithClassName {
  className?: string;
}

/** Combinação comum de children + className. */
export type BaseComponentProps = WithChildren & WithClassName;

/** Estrutura de um item de FAQ (usada na FASE 2). */
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/** Contrato de envio do formulário de lead (usado na FASE 2). */
export interface LeadFormData {
  name: string;
  phone: string;
  email?: string;
  age?: number;
  consent: boolean;
}
