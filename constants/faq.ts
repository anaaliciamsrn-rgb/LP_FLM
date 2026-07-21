import type { FaqItem } from '@/types';

/**
 * FAQ — fonte única, consumida pela seção visual e pelo JSON-LD (FAQPage).
 * Copy de exemplo (revisável pelo cliente).
 */
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-idade',
    question: 'Existe idade máxima para contratar um plano de saúde?',
    answer:
      'Não existe uma idade máxima única: cada operadora define suas regras. Trabalhamos justamente para encontrar operadoras que aceitam a faixa etária de quem tem 50, 60, 70 anos ou mais, com condições justas.',
  },
  {
    id: 'faq-carencia',
    question: 'O que são carências e como elas afetam meu plano?',
    answer:
      'Carência é o tempo mínimo até poder usar determinados serviços após a contratação. Explicamos cada prazo com clareza e, quando possível, buscamos aproveitamento de carências de planos anteriores.',
  },
  {
    id: 'faq-familia',
    question: 'Posso incluir meus pais ou meu cônjuge no mesmo plano?',
    answer:
      'Sim. Há opções individuais e familiares. Avaliamos o melhor formato considerando idade, região e uso previsto de cada pessoa, para equilibrar cobertura e orçamento.',
  },
  {
    id: 'faq-rede',
    question: 'Como sei se meus médicos e hospitais estão na rede?',
    answer:
      'Antes de qualquer contratação, conferimos a rede credenciada na sua região e verificamos se os profissionais e hospitais de sua preferência estão incluídos.',
  },
  {
    id: 'faq-custo',
    question: 'A consultoria do Grupo FLM tem algum custo?',
    answer:
      'A análise e a cotação são gratuitas e sem compromisso. Você só decide seguir se encontrar uma opção que faça sentido para o seu momento e o seu bolso.',
  },
  {
    id: 'faq-tempo',
    question: 'Em quanto tempo recebo uma proposta?',
    answer:
      'Após entender sua necessidade, normalmente apresentamos as primeiras opções em até um dia útil, já com valores e coberturas comparados lado a lado.',
  },
];
