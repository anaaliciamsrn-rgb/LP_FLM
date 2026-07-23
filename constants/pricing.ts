import type { LucideIcon } from 'lucide-react';
import { BedDouble, DoorClosed } from 'lucide-react';

/**
 * Categorias de acomodação — valores de referência ("a partir de").
 *
 * Por pedido do cliente: sem nome de operadora, sem código ANS e sem tabela
 * por faixa etária — apenas o valor de entrada de cada categoria, de forma
 * simples e visualmente leve. `startingPrice` usa o menor valor disponível
 * na tabela vigente (faixa mais barata) como "a partir de".
 */
export interface PricingCategory {
  icon: LucideIcon;
  label: string;
  description: string;
  startingPrice: string;
}

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    icon: BedDouble,
    label: 'Enfermaria',
    description: 'Acomodação compartilhada, com toda a segurança e cuidado nas internações.',
    startingPrice: 'R$ 759,84',
  },
  {
    icon: DoorClosed,
    label: 'Apartamento',
    description: 'Mais privacidade e conforto para você durante a internação.',
    startingPrice: 'R$ 907,73',
  },
];

export const PRICING_DISCLAIMER =
  'Valores de referência (tabela vigente), sujeitos a análise de perfil, carências e condições da operadora.';
