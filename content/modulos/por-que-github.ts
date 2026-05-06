import type { ModuleContent } from "@/lib/types";
import { modules } from "./index";

const meta = modules.find((m) => m.slug === "por-que-github")!;

export const porQueGithub: ModuleContent = {
  meta,
  sections: [
    {
      heading: "Reframe inicial",
      body: "GitHub não é um lugar de programadores. É um lugar para qualquer arquivo de texto que você queira versionar — projetos, briefs, prompts, drafts, anotações. A confusão vem do fato de o GitHub ter nascido para código, mas a tecnologia por baixo (o Git) não sabe distinguir um arquivo `.py` de um `.md`. Ela só vê texto e guarda cada mudança que você faz.",
    },
    {
      heading: "O que é controle de versão",
      body: "Imagine um Google Docs onde cada vez que você salva fica registrado um instantâneo completo do documento — com sua mensagem explicando o que mudou. Você pode voltar para qualquer instantâneo anterior, comparar duas versões lado a lado e nunca, em hipótese nenhuma, perder uma versão antiga. Isso é controle de versão. O GitHub é a casa onde esses instantâneos vivem na nuvem.",
    },
    {
      heading: "Por que isso importa para um não-dev",
      body: "Sem versionamento real, todo trabalho com texto vive na corda bamba: um copy-paste errado destrói horas de escrita, uma reescrita radical apaga uma versão que talvez fosse melhor, e a sensação de 'não posso experimentar muito senão estrago' bloqueia a criatividade. Com Git, experimentar fica barato — você sempre pode voltar.",
    },
    {
      heading: "GitHub vs Drive vs Notion",
      body: "O Drive guarda arquivos mas o histórico é raso e binário (você abre uma versão antiga, não compara mudanças). O Notion é ótimo como banco de dados WYSIWYG mas não tem commits atômicos com mensagem. O GitHub é o único que dá histórico imutável, comparação de versões e mensagens explicando o porquê de cada mudança.",
    },
    {
      heading: "O ponto MSCS — repo como contexto vivo",
      body: "Aqui está o twist que muda tudo: seu repo no GitHub é uma fonte de contexto que o Claude consegue ler. Um arquivo `about-me.md`, uma pasta `KNOWLEDGE/` por domínio, um `CLAUDE.md` com regras do seu projeto — tudo isso vira combustível para conversas mais rápidas e mais alinhadas. Versionar texto não é só sobre histórico; é sobre construir uma memória externa que o LLM acessa.",
    },
    {
      heading: "O que você ganha ao adotar",
      body: "Confiança para experimentar (sempre dá pra voltar), histórico explicado (cada commit tem uma mensagem sua), portabilidade (Markdown abre em qualquer editor) e — em 2026 — uma camada de contexto pronta para os agentes que você usa todo dia. Os próximos módulos te tiram do zero até esse fluxo rodando.",
    },
  ],
  quiz: [
    {
      question: "Qual é a principal diferença entre o GitHub e o Google Drive para versionar texto?",
      options: [
        "O GitHub permite editar online e o Drive não",
        "O GitHub guarda um histórico explicado de cada mudança, com mensagens; o Drive só guarda versões automáticas sem narrativa",
        "O Drive é mais rápido para arquivos grandes",
        "Não há diferença real, ambos versionam igual",
      ],
      correctIndex: 1,
      explanation:
        "O Drive faz versionamento implícito (snapshots automáticos), enquanto o GitHub exige um commit explícito com mensagem — isso vira documentação narrativa do seu trabalho.",
    },
    {
      question: "Por que faz sentido para alguém que não programa usar GitHub?",
      options: [
        "Para aprender a programar antes de usar o Claude",
        "Porque é o único lugar onde se pode escrever Markdown",
        "Porque qualquer arquivo de texto (briefs, prompts, escrita) ganha histórico imutável e vira contexto reutilizável",
        "Porque é mais barato que o Notion",
      ],
      correctIndex: 2,
      explanation:
        "Git versiona qualquer texto, não só código. O ganho real para não-devs é histórico narrativo + repo como base de conhecimento navegável.",
    },
    {
      question: "Qual é o ponto de vista MSCS sobre o repo?",
      options: [
        "Um lugar para fazer backup",
        "Uma fonte de contexto vivo que o Claude lê para conversar com você de forma mais alinhada",
        "Uma rede social de programadores",
        "Um substituto para o Notion",
      ],
      correctIndex: 1,
      explanation:
        "No fluxo MSCS, o repo concentra arquivos contextuais (about-me, KNOWLEDGE, CLAUDE.md) que viram input direto para o Claude — repo é memória externa do agente.",
    },
    {
      question: "O que é um 'commit' no contexto que você acabou de aprender?",
      options: [
        "Um arquivo de configuração obrigatório",
        "Um instantâneo do estado dos seus arquivos com uma mensagem explicando o que mudou",
        "O nome técnico do servidor do GitHub",
        "A pasta principal do repositório",
      ],
      correctIndex: 1,
      explanation:
        "Commit = snapshot + mensagem. É a unidade básica do versionamento e o que diferencia Git de salvamento automático genérico.",
    },
  ],
  checklist: [
    { id: "entendi-versionamento", text: "Entendi o que é controle de versão e por que importa para texto" },
    { id: "diferenca-drive", text: "Sei explicar em uma frase a diferença entre GitHub, Drive e Notion" },
    { id: "ponto-mscs", text: "Entendi o ponto MSCS: repo como contexto vivo do Claude" },
    { id: "motivo-pessoal", text: "Listei pelo menos um caso meu que se beneficia de versionamento (projeto, prompt ou texto)" },
  ],
};
