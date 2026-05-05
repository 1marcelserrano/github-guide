@AGENTS.md

# GitHub para Não-Devs — Guia Interativo MSCS

## Propósito
Site interativo que ensina não-programadores a usar o GitHub para catalogar e versionar projetos, textos e prompts — não código. Material de apoio da Beta Turma Zero MSCREATIVE.SYSTEMS. Filosofia: o repo é fonte de contexto vivo para o Claude.

## Stack
- Next.js 16.2.4 (App Router) — ATENÇÃO: leia `node_modules/next/dist/docs/` antes de codar; APIs podem diferir do training data (ex: `params: Promise<{slug:string}>` em rotas dinâmicas)
- React 19.2.4
- TypeScript 5
- Tailwind CSS v4 (config em CSS via `@theme` em `app/globals.css` — não há `tailwind.config.ts`)
- clsx + lucide-react
- Deploy: Vercel
- Persistência: localStorage (sem backend, sem auth)

## Design tokens (MSCREATIVE.SYSTEMS)
Definidos em `app/globals.css` dentro de `@theme {}`:

| Token            | Valor     | Tailwind utility |
|------------------|-----------|------------------|
| `--color-primary`   | `#0f0f0f` | `bg-primary` / `text-primary`     |
| `--color-accent`    | `#e5ff00` | `bg-accent` / `text-accent`       |
| `--color-surface`   | `#1a1a1a` | `bg-surface` / `text-surface`     |
| `--color-surface-2` | `#242424` | `bg-surface-2` / `text-surface-2` |
| `--color-text`      | `#f5f5f5` | `bg-text` / `text-text`           |
| `--color-muted`     | `#888888` | `bg-muted` / `text-muted`         |
| `--color-border`    | `#2e2e2e` | `border-border`                   |

Fontes: Inter (sans) + JetBrains Mono (mono), via `next/font/google`.

> Estes valores são um fallback inicial. Confirmar paleta com Marcel antes de Stage 2 se houver brand guide oficial.

## Estrutura de pastas
```
/app
  page.tsx                      ← home com grid de 6 módulos
  /modulos/[slug]/page.tsx      ← template de módulo (params é Promise!)
  globals.css                   ← @theme tokens MSCS + Tailwind v4
  layout.tsx                    ← Inter + JetBrains Mono + lang="pt-BR"
/components                     ← Header, ModuleCard, ProgressBar, Quiz, Checklist (Stages 2–4)
/content
  /modulos/
    index.ts                    ← metadata dos 6 módulos
    {slug}.ts                   ← um arquivo por módulo (Stage 3)
/lib
  types.ts                      ← Module, QuizQuestion, ChecklistItem, ModuleContent
  progress.ts                   ← localStorage helpers (Stage 4)
```

## Regras do projeto
- **Idioma**: código (variáveis, componentes, funções) em **inglês**; conteúdo e UI em **PT-BR**
- **Novo módulo** = criar novo arquivo em `/content/modulos/{slug}.ts` + adicionar entrada em `/content/modulos/index.ts`
- **Sem backend, sem auth** — toda persistência é localStorage
- **Conteúdo em `.ts`**, não MDX — dados estruturados (sections, quiz, checklist)
- **Quiz**: uma resposta correta por pergunta, feedback imediato com explicação
- **Progresso**: por módulo (checklist completo = módulo concluído) + barra geral
- **Filosofia editorial**: cada módulo conecta o conteúdo ao ecossistema MSCS (about-me, KNOWLEDGE, skills)

## Decisões fechadas — não reabrir
- Stack: Next.js 16 App Router + Tailwind v4 + TypeScript
- Conteúdo: arquivos `.ts`, não MDX
- Deploy: Vercel via CLI (`npx vercel --prod`)
- Repo GitHub: `1marcelserrano/github-guide` (público)
- Persistência: localStorage
- Quiz: uma resposta correta por pergunta, feedback imediato
- Progresso: por módulo + barra geral
- Idioma: código em inglês, UI/conteúdo em PT-BR

## 6 Módulos (slug → título)
0. `por-que-github` — Por que GitHub?
1. `conta-e-repo` — Criando sua conta e primeiro repo
2. `github-desktop` — GitHub Desktop — sem terminal
3. `estrutura-do-repo` — Estrutura do seu repo
4. `ritual-diario` — Ritual diário com o repo
5. `conectando-claude` — Conectando com o Claude

## Chain de construção
- **Stage 1** ✅ — scaffold + design system + repo + deploy inicial
- **Stage 2** — layout + navegação (Header, home grid, template de módulo, responsivo)
- **Stage 3** — conteúdo dos 6 módulos (sections, quiz, checklist)
- **Stage 4** — componentes interativos (Quiz, Checklist, ProgressTracker) + deploy final
