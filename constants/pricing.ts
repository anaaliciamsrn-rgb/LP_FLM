/**
 * Tabela de valores de REFERÊNCIA (Prevent Senior 1025).
 * Dados conforme material do cliente. Edite aqui para atualizar a seção —
 * nenhum valor fica espalhado pelos componentes.
 */
export interface PriceRow {
  ageRange: string;
  enfermaria: string;
  apartamento: string;
  highlight?: boolean;
}

export const PRICING_PLAN = {
  name: 'Prevent Senior 1025',
  tiers: {
    enfermaria: { label: 'Enfermaria', ans: 'ANS 505.407/25-9' },
    apartamento: { label: 'Apartamento', ans: 'ANS 505.408/25-7' },
  },
} as const;

export const PRICING_ROWS: PriceRow[] = [
  { ageRange: 'Até 43 anos', enfermaria: 'R$ 759,84', apartamento: 'R$ 907,73' },
  { ageRange: '44 a 58 anos', enfermaria: 'R$ 999,84', apartamento: 'R$ 1.195,06' },
  {
    ageRange: '59 anos em diante',
    enfermaria: 'R$ 1.315,59',
    apartamento: 'R$ 1.572,45',
    highlight: true,
  },
];

export const PRICING_DISCLAIMER =
  'Valores de referência (tabela vigente), sujeitos a análise de perfil, faixa etária, carências e condições da operadora. A entrevista qualificada é exigida exclusivamente para beneficiários entre 0 e 18 anos, conforme a Resolução Normativa ANS nº 558/2022.';
