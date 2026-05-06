import type { ModuleContent } from "@/lib/types";
import { modules } from "./index";

const meta = modules.find((m) => m.slug === "estrutura-do-repo")!;

export const estruturaDoRepo: ModuleContent = {
  meta,
  sections: [
    {
      heading: "Por que organizar importa",
      body: "Um repo desorganizado é igual a uma pasta `~/Downloads` — você joga tudo dentro e em três meses não acha mais nada. Como você está usando o repo para versionar conhecimento (não código), uma estrutura clara é o que separa um arquivo morto de uma base navegável que você (e o Claude) consegue consultar.",
    },
    {
      heading: "README como índice navegável",
      body: "O `README.md` na raiz do repo é o mapa. Use ele para listar as pastas que existem, explicar o que tem em cada uma e linkar (com Markdown: `[texto](pasta/arquivo.md)`) para os arquivos que você quer destacar. Trate como o sumário de um livro que se atualiza conforme o livro cresce.",
    },
    {
      heading: "Pastas por domínio (convenção MSCS)",
      body: "Em vez de organizar por data ou por formato, organize por área de vida ou tipo de conteúdo. Estrutura-modelo MSCS: `/projetos` (briefs e specs de iniciativas), `/prompts` (templates de prompt reutilizáveis), `/escrita` (drafts e artigos), `/about-me` (quem você é, contextualizado para o Claude), `/KNOWLEDGE` (notas de domínio: design, copy, negócios). Você não precisa de todas — comece com 2 ou 3 e cresça conforme necessário.",
    },
    {
      heading: "Markdown em vez de Word",
      body: "Salve tudo em `.md`. Markdown é texto puro com sintaxe leve para títulos (`#`), listas (`-`), negrito (`**`), links (`[texto](url)`) e código (` ``` `). Vantagens: abre em qualquer editor, é diff-friendly (você vê exatamente o que mudou linha por linha), e é o formato nativo que o Claude lê melhor. Word/Doc geram arquivos binários que o Git não consegue versionar de forma útil.",
    },
    {
      heading: "Naming: kebab-case sempre",
      body: "Arquivos e pastas em letra minúscula, palavras separadas por hífen: `brief-projeto-x.md`, não `Brief Projeto X.md` ou `brief_projeto_x.md`. Por quê: evita problemas em URLs (espaços viram %20 horríveis), funciona igual em Mac/Windows/Linux, e é a convenção da web. Adote desde o primeiro arquivo.",
    },
    {
      heading: "O que NÃO comitar",
      body: "Git foi feito para texto. Não comite arquivos pesados ou binários: PDFs grandes, imagens em alta resolução, áudios, vídeos, exports de design. Esses vivem melhor no Drive ou Dropbox (storage barato e otimizado para isso) e você apenas referencia o link no Markdown. Regra prática: se o arquivo passa de uns poucos MB e não é texto, ele não pertence ao repo.",
    },
    {
      heading: "Estrutura-modelo para começar",
      body: "Sugestão minimalista: `README.md` (índice), `about-me.md` (raiz, fácil de o Claude achar), `CLAUDE.md` (raiz, regras do projeto), `/projetos/` com um arquivo por projeto, `/prompts/` com templates. Comece pequeno. Refatore quando o repo te disser que está apertado.",
    },
  ],
  quiz: [
    {
      question: "Qual é a melhor escolha de naming para um arquivo de brief?",
      options: [
        "Brief Projeto Lançamento.md",
        "brief_projeto_lancamento.md",
        "brief-projeto-lancamento.md",
        "BriefProjetoLancamento.md",
      ],
      correctIndex: 2,
      explanation:
        "kebab-case (minúsculas + hífen) é a convenção web: zero problema em URLs, comportamento idêntico entre sistemas operacionais e visualmente legível.",
    },
    {
      question: "Por que usar Markdown em vez de Word para o conteúdo do repo?",
      options: [
        "Markdown é mais bonito",
        "Word não funciona no GitHub",
        "Markdown é texto puro: o Git versiona linha a linha, abre em qualquer editor e o Claude lê nativamente",
        "Word é pago e Markdown é grátis",
      ],
      correctIndex: 2,
      explanation:
        "A diferença real é técnica e prática: Markdown gera diffs úteis (você vê o que mudou), Word gera blobs binários que o Git trata como 'arquivo todo mudou' a cada save.",
    },
    {
      question: "Qual destes arquivos NÃO faz sentido comitar no repo?",
      options: [
        "Um draft de artigo em Markdown (`artigo.md`)",
        "Um PDF de 80MB de uma apresentação",
        "Um template de prompt em Markdown",
        "Um arquivo `about-me.md`",
      ],
      correctIndex: 1,
      explanation:
        "Binários grandes incham o repo e o Git não consegue versionar de forma útil. Para PDFs/áudios/vídeos, use Drive e referencie o link no Markdown.",
    },
    {
      question: "Qual o papel do README.md na raiz?",
      options: [
        "É um arquivo opcional sem função real",
        "É a porta de entrada e índice navegável que orienta quem (e o que) lê o repo",
        "É exigido por lei",
        "É o lugar onde o Claude salva respostas",
      ],
      correctIndex: 1,
      explanation:
        "README é a primeira coisa que aparece quando alguém abre o repo (ou o Claude indexa). Tratar como sumário do livro mantém o repo navegável conforme cresce.",
    },
  ],
  checklist: [
    { id: "decidir-estrutura", text: "Decidir 2 a 3 pastas iniciais por domínio (ex: projetos, prompts, escrita)" },
    { id: "criar-pastas", text: "Criar as pastas no repo local" },
    { id: "atualizar-readme", text: "Atualizar o README.md como índice navegável das pastas" },
    { id: "primeiro-md", text: "Criar pelo menos um arquivo `.md` real em uma das pastas" },
    { id: "renomear-kebab", text: "Garantir que tudo está em kebab-case" },
    { id: "commit-estrutura", text: "Fazer commit + push da nova estrutura" },
  ],
};
