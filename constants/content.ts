/**
 * Conteúdo estruturado das seções. Copy de exemplo (revisável pelo cliente).
 * Os ícones são referenciados por nome e resolvidos nos componentes, para
 * manter estes dados livres de JSX.
 */
import type { LucideIcon } from 'lucide-react';
import {
  CalendarClock,
  Coins,
  HandHeart,
  HeartHandshake,
  Hospital,
  MapPin,
  MessagesSquare,
  Search,
  ShieldCheck,
  Stethoscope,
  UserRound,
  Users,
  UsersRound,
  ClipboardList,
  FileSearch,
  PhoneCall,
} from 'lucide-react';

export interface IconItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** 3 — O que deve ser analisado */
export const ANALYSIS_ITEMS: IconItem[] = [
  {
    icon: CalendarClock,
    title: 'Idade e carências',
    description:
      'Faixa etária de cada pessoa e os prazos de carência de cada operadora.',
  },
  {
    icon: MapPin,
    title: 'Região de atendimento',
    description: 'Onde você mora e circula, para garantir rede próxima e acessível.',
  },
  {
    icon: Hospital,
    title: 'Rede médica',
    description: 'Hospitais, laboratórios e médicos de sua preferência já credenciados.',
  },
  {
    icon: Coins,
    title: 'Orçamento',
    description: 'Um valor mensal que cabe no bolso, sem abrir mão do essencial.',
  },
  {
    icon: Stethoscope,
    title: 'Cobertura e coparticipação',
    description: 'O que está incluso e como funciona o modelo de coparticipação.',
  },
  {
    icon: ShieldCheck,
    title: 'Reputação da operadora',
    description: 'Solidez, avaliações e histórico de atendimento de cada operadora.',
  },
];

/** 4 — Possibilidades */
export const POSSIBILITIES_ITEMS: IconItem[] = [
  {
    icon: UserRound,
    title: 'Plano individual',
    description: 'Cobertura pensada para uma pessoa, no formato que ela precisa.',
  },
  {
    icon: UsersRound,
    title: 'Plano familiar',
    description: 'Você, seu cônjuge e seus pais reunidos em uma única solução.',
  },
  {
    icon: HeartHandshake,
    title: 'Plano por adesão',
    description: 'Condições especiais por meio de entidades e categorias profissionais.',
  },
  {
    icon: HandHeart,
    title: 'Planos sênior',
    description: 'Operadoras especializadas no cuidado com a terceira idade.',
  },
];

/** 5 — Para quem é */
export const AUDIENCE_ITEMS: IconItem[] = [
  {
    icon: UserRound,
    title: 'Você, a partir dos 50',
    description: 'Quem quer viver com autonomia e segurança na saúde.',
  },
  {
    icon: Users,
    title: 'Filhos cuidando dos pais',
    description: 'Quem procura o melhor plano para o pai, a mãe ou ambos.',
  },
  {
    icon: HeartHandshake,
    title: 'Casais',
    description: 'Quem deseja proteger a dupla com uma cobertura equilibrada.',
  },
];

/** 6 — Como funciona (timeline) */
export interface StepItem {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
}

export const STEPS_ITEMS: StepItem[] = [
  {
    icon: PhoneCall,
    step: '01',
    title: 'Você entra em contato',
    description: 'Pelo formulário ou WhatsApp, conta o que precisa. Sem compromisso.',
  },
  {
    icon: FileSearch,
    step: '02',
    title: 'Analisamos seu perfil',
    description: 'Idade, região, rede médica e orçamento — tudo considerado.',
  },
  {
    icon: ClipboardList,
    step: '03',
    title: 'Comparamos as opções',
    description: 'Apresentamos os melhores planos lado a lado, de forma clara.',
  },
  {
    icon: ShieldCheck,
    step: '04',
    title: 'Você decide com tranquilidade',
    description: 'Acompanhamos a contratação e seguimos por perto depois dela.',
  },
];

/** 7 — Diferenciais */
export const DIFFERENTIALS_ITEMS: IconItem[] = [
  {
    icon: MessagesSquare,
    title: 'Atendimento humano',
    description: 'Você fala com gente que escuta, não com robôs nem call center.',
  },
  {
    icon: Search,
    title: 'Análise imparcial',
    description: 'Comparamos várias operadoras para recomendar o que é melhor para você.',
  },
  {
    icon: ShieldCheck,
    title: '18 anos de experiência',
    description: 'Uma consultoria consolidada, cuidando de famílias há quase duas décadas.',
  },
  {
    icon: HandHeart,
    title: 'Acompanhamento contínuo',
    description: 'Seguimos ao seu lado depois da contratação, sempre que precisar.',
  },
];
