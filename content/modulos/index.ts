import type { Module } from "@/lib/types";

export const modules: Module[] = [
  {
    slug: "por-que-github",
    title: "Por que GitHub?",
    description:
      "GitHub não é só para devs — é para quem quer versionar tudo: projetos, textos, prompts.",
    order: 0,
  },
  {
    slug: "conta-e-repo",
    title: "Criando sua conta e primeiro repo",
    description:
      "Cadastro no GitHub, criação do primeiro repositório e tour pela interface web.",
    order: 1,
  },
  {
    slug: "github-desktop",
    title: "GitHub Desktop — sem terminal",
    description:
      "Como fazer commit, push e pull usando o app de desktop, sem nenhuma linha de comando.",
    order: 2,
  },
  {
    slug: "estrutura-do-repo",
    title: "Estrutura do seu repo",
    description:
      "Pastas, README, naming conventions — desenhadas para não-devs que organizam conhecimento.",
    order: 3,
  },
  {
    slug: "ritual-diario",
    title: "Ritual diário com o repo",
    description:
      "O que vai pro repo, quando commitar e como ele se relaciona com Drive e Notion.",
    order: 4,
  },
  {
    slug: "conectando-claude",
    title: "Conectando com o Claude",
    description:
      "Repo como KNOWLEDGE viva — arquivos contextuais e o ciclo de update com o Claude.",
    order: 5,
  },
];
