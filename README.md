# Grupo FLM — Plano de Saúde para Terceira Idade

Landing page premium com foco em **geração de leads**, construída para transmitir
confiança, credibilidade e sofisticação. O público-alvo tem mais de 50 anos (e
também filhos buscando planos para os pais), por isso **legibilidade,
acessibilidade e confiança** vêm antes de qualquer efeito visual.

> **Status: FASE 1 — Fundação.**
> Este repositório contém apenas a fundação do projeto: arquitetura, Design
> System, configuração de ferramentas e ganchos de acessibilidade/SEO/animação.
> As seções da landing page (Hero, Cards, FAQ, Formulário, etc.) serão
> construídas na FASE 2.

---

## Sumário

- [Stack](#stack)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Comandos](#comandos)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Design System](#design-system)
- [Acessibilidade](#acessibilidade)
- [Animações](#animações)
- [SEO](#seo)
- [Performance](#performance)
- [Justificativa técnica das escolhas](#justificativa-técnica-das-escolhas)

---

## Stack

| Camada           | Tecnologia                                                        |
| ---------------- | ----------------------------------------------------------------- |
| Framework        | Next.js 15 (App Router) + React 19                                |
| Linguagem        | TypeScript (modo estrito)                                         |
| Estilo           | Tailwind CSS + CSS Variables                                      |
| Componentes      | shadcn/ui (Radix primitives) + CVA                                |
| Animação         | Framer Motion (LazyMotion)                                        |
| Formulários      | React Hook Form + Zod                                             |
| Ícones           | Lucide Icons                                                      |
| Fontes           | next/font — Plus Jakarta Sans (títulos) + Inter (texto)           |
| Composição de classes | clsx · tailwind-merge · class-variance-authority             |
| Qualidade        | ESLint · Prettier · TypeScript typecheck                         |

---

## Requisitos

- **Node.js** `>= 18.18` (recomendado 20 LTS ou superior)
- **npm** `>= 9` (ou pnpm/yarn — os exemplos usam npm)

---

## Instalação

```bash
# 1. Instale as dependências
npm install

# 2. Crie seu arquivo de variáveis de ambiente
cp .env.example .env.local

# 3. Rode o ambiente de desenvolvimento
npm run dev
```

Acesse **http://localhost:3000**.

---

## Comandos

| Comando                | O que faz                                              |
| ---------------------- | ------------------------------------------------------ |
| `npm run dev`          | Sobe o servidor de desenvolvimento                     |
| `npm run build`        | Gera o build de produção                               |
| `npm run start`        | Sobe o build de produção                               |
| `npm run lint`         | Roda o ESLint                                          |
| `npm run lint:fix`     | Corrige problemas de lint automaticamente              |
| `npm run format`       | Formata todo o projeto com Prettier                    |
| `npm run format:check` | Verifica formatação sem alterar arquivos               |
| `npm run typecheck`    | Checagem de tipos sem emitir arquivos                  |

---

## Estrutura do projeto

```
flm-plano-saude/
├── app/                      # App Router: rotas, layout e SEO técnico
│   ├── layout.tsx            # Root layout: fontes, providers, JSON-LD, skip-link
│   ├── page.tsx              # Placeholder da FASE 1
│   ├── globals.css           # Tokens (CSS Variables) + camadas base do Tailwind
│   ├── not-found.tsx         # Página 404 acessível
│   ├── error.tsx             # Error boundary da rota
│   ├── robots.ts             # robots.txt dinâmico
│   ├── sitemap.ts            # sitemap.xml dinâmico
│   └── manifest.ts           # Web App Manifest (PWA-ready)
│
├── components/
│   ├── ui/                   # Primitivas do Design System (shadcn/ui) — ex.: Button
│   ├── layout/               # Header, Footer, Navbar (FASE 2)
│   ├── common/               # Utilitários de UI reutilizáveis — ex.: Container
│   ├── accessibility/        # Provider, filtros de daltonismo, skip-link
│   ├── forms/                # Formulários (RHF + Zod) (FASE 2)
│   ├── cards/                # Cards de benefícios/planos (FASE 2)
│   ├── sections/             # Seções da landing (Hero, FAQ, etc.) (FASE 2)
│   └── providers/            # Composição de Client Providers (Motion, A11y)
│
├── hooks/                    # Hooks reutilizáveis
│   ├── use-local-storage.ts  # Persistência tipada e SSR-safe
│   ├── use-media-query.ts    # Media queries reativas
│   ├── use-reduced-motion.ts # prefers-reduced-motion
│   └── use-mounted.ts        # Guard anti hydration-mismatch
│
├── lib/                      # Lógica pura e integrações
│   ├── utils.ts              # cn() + absoluteUrl()
│   ├── fonts.ts              # Configuração das fontes (next/font)
│   ├── seo.ts                # buildMetadata() + JSON-LD
│   └── animations.ts         # Variantes de Framer Motion
│
├── styles/
│   └── accessibility.css     # Ganchos de alto contraste, daltonismo e escalas
│
├── types/                    # Tipos globais
│   ├── index.ts
│   └── accessibility.ts      # Contratos da Toolbar de Acessibilidade
│
├── constants/                # Fonte única de verdade (config, navegação)
│   ├── site.ts
│   └── navigation.ts
│
├── public/                   # Assets estáticos
│   ├── images/  ├── videos/  └── icons/
│
├── tailwind.config.ts        # Tokens → utilitários Tailwind
├── components.json           # Config do shadcn/ui
├── next.config.mjs           # Imagens, headers de segurança, otimizações
├── tsconfig.json             # Aliases e strictness
├── .eslintrc.json  ├── .prettierrc.json  └── .editorconfig
```

### Finalidade de cada pasta

- **`app/`** — Rotas e composição de página no App Router. Server Components por
  padrão; SEO técnico (robots, sitemap, manifest) fica aqui como código.
- **`components/ui/`** — Primitivas de baixo nível do Design System (shadcn/ui),
  sem regra de negócio.
- **`components/common/`** — Blocos genéricos reutilizados em qualquer seção.
- **`components/accessibility/`** — Tudo relacionado a a11y: provider, filtros de
  daltonismo e skip-link.
- **`components/providers/`** — Isola os Client Providers para manter o layout
  como Server Component.
- **`components/{layout,forms,cards,sections}/`** — Reservadas para a FASE 2.
- **`hooks/`** — Comportamento reativo reutilizável.
- **`lib/`** — Funções puras, configuração e helpers sem estado de React.
- **`styles/`** — CSS que não cabe em `globals.css` (camada de acessibilidade).
- **`types/` · `constants/`** — Contratos e valores centralizados.

---

## Design System

Todas as cores são **CSS Variables** centralizadas em `app/globals.css`, no
formato HSL. **Nenhuma cor literal é espalhada pelo código** — o `tailwind.config.ts`
apenas referencia as variáveis, o que habilita tema claro/escuro, alto contraste
e filtros de daltonismo sem tocar nos componentes.

**Paleta:** branco predominante · azul-marinho elegante (`--primary`) · azul claro
apenas em fundos (`--accent`, `--secondary`) · **vermelho exclusivo para CTAs**
(`--danger`).

**Tipografia:** escala consistente em `rem` com `line-height` e `tracking`
calibrados. Títulos em **Plus Jakarta Sans**, texto em **Inter**, ambos via
`next/font` (self-hosted, `display: swap`).

**Grid & Responsividade:** Mobile First, breakpoints nomeados
(`xs 360 · sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1440 · 3xl 1920`) cobrindo
todos os alvos exigidos (320px → 1920px). Áreas de toque mínimas de 44px.

---

## Acessibilidade

Construída desde a arquitetura, mirando **WCAG 2.2 AA**:

- `prefers-reduced-motion` respeitado em CSS **e** em runtime (Framer Motion).
- `prefers-color-scheme` com tema claro/escuro por CSS Variables.
- Foco visível e consistente (`:focus-visible`) em todo elemento interativo.
- Skip-link "Pular para o conteúdo" para navegação por teclado.
- Zoom nunca bloqueado; `lang="pt-BR"`; estrutura semântica.

### Toolbar de Acessibilidade (arquitetura pronta — UI na FASE futura)

A fundação já contempla a futura toolbar. **Nada de UI foi implementado**, apenas
os ganchos:

- **`AccessibilityProvider`** (`components/accessibility/`) — estado + persistência
  via **LocalStorage** (`hooks/use-local-storage.ts`) e aplicação no `<html>`.
- **Tipos e defaults** em `types/accessibility.ts`.
- **Ganchos de CSS** em `styles/accessibility.css` acionados por
  `data-contrast`, `data-colorblind`, `data-reduce-motion` e as variáveis
  `--a11y-font-scale` / `--a11y-line-height-scale`.
- **Filtros SVG de daltonismo** (Protanopia, Deuteranopia, Tritanopia) em
  `components/accessibility/color-blind-filters.tsx`.

Recursos previstos: aumentar/reduzir fonte, alto contraste, modos de daltonismo,
espaçamento entre linhas e redução de animações — **todos persistidos em
LocalStorage**.

---

## Animações

`Framer Motion` configurado via `MotionProvider` com `LazyMotion` (bundle menor) e
`MotionConfig reducedMotion="user"`. As variantes reutilizáveis vivem em
`lib/animations.ts` e são **discretas por princípio**: deslocamentos pequenos,
durações curtas, nunca bloqueiam a leitura nem escondem conteúdo.

---

## SEO

- **Metadata API** centralizada em `lib/seo.ts` (`buildMetadata`).
- **Open Graph** e **Twitter Cards** prontos.
- **Canonical** por rota + **robots** e **sitemap** dinâmicos.
- **Schema.org** (JSON-LD de Organização) injetado no layout.
- **Web App Manifest** para instalação/PWA.

---

## Performance

Arquitetura mirando **Lighthouse 100**:

- `next/image` com AVIF/WebP e cache longo.
- `next/font` self-hosted (sem requisições externas de fonte).
- `optimizePackageImports` para `lucide-react` e `framer-motion` (tree-shaking).
- `LazyMotion` (code splitting das features de animação).
- Server Components por padrão; `'use client'` apenas onde há interatividade.

---

## Justificativa técnica das escolhas

- **Next.js 15 + App Router** — Server Components reduzem JS no cliente, melhoram
  performance e SEO; a Metadata API nativa cobre todo o SEO técnico.
- **TypeScript estrito** (`noUncheckedIndexedAccess`, etc.) — previne classes
  inteiras de bugs em um projeto que vai crescer.
- **CSS Variables + Tailwind** — tokens centralizados permitem temas e
  acessibilidade sem reescrever componentes; Tailwind dá velocidade sem CSS órfão.
- **shadcn/ui + Radix + CVA** — componentes acessíveis por padrão, sem lock-in de
  biblioteca; variantes tipadas e previsíveis.
- **Framer Motion com LazyMotion** — animação declarativa de qualidade com o menor
  custo possível de bundle e respeito automático a `prefers-reduced-motion`.
- **React Hook Form + Zod** — formulários performáticos (menos re-renders) com
  validação isomórfica type-safe — essencial para a captação de leads.
- **Plus Jakarta Sans + Inter** — dupla legível e sóbria; contraste de personalidade
  entre título e texto sem sacrificar a leitura do público sênior.
- **ESLint + Prettier + plugin Tailwind** — padrão de código consistente e ordenação
  automática de classes, reduzindo ruído em revisões.

---

© Grupo FLM. Todos os direitos reservados.
