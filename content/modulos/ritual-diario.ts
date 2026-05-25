import type { ModuleContent } from "@/lib/types";
import { modules } from "./index";

const meta = modules.find((m) => m.slug === "ritual-diario")!;

export const ritualDiario: ModuleContent = {
  meta,
  sections: [
    {
      heading: "Repo, Drive e Notion — cada um faz uma coisa",
      body: "Não é repo OU Drive OU Notion. É os três, com papéis claros. **Repo**: texto estruturado e versionado (briefs, prompts, decisões, drafts em Markdown). **Drive**: storage de mídia pesada (PDFs, vídeos, áudios, exports de design). **Notion**: banco de dados WYSIWYG e colaboração ao vivo (CRMs improvisados, pipelines de tarefa, wikis colaborativas). Use o repo para o que precisa de histórico e contexto reusável.",
    },
    {
      heading: "O que vai pro repo",
      body: "Briefs e specs de projetos, templates de prompt que você reutiliza, drafts de artigos e e-mails longos, decisões importantes (com motivo), arquivos contextuais (about-me, KNOWLEDGE), `CLAUDE.md` com regras de cada projeto. Em uma frase: tudo que é texto, tem valor mais que algumas horas de vida e que você pode querer reler ou rever.",
    },
    {
      heading: "O que NÃO vai",
      body: "Anexos pesados (PDFs grandes, vídeos, áudios — vão para Drive). Drafts ultra-rápidos que você sabe que vai jogar fora em 10 minutos (use post-its, papel, ou um scratch.md sem commit). Senhas, tokens, dados pessoais sensíveis (esses NUNCA, em hipótese alguma — repos públicos são indexados pelo Google em segundos). Estado vivo de tarefas (use Notion, Linear, Things).",
    },
    {
      heading: "Quando commitar",
      body: "O ponto de entrada recomendado para quem está começando: **toda sexta-feira**, 1 minuto, como parte do ritual semanal de revisão do seu sistema. Você abre o GitHub Desktop, vê o que mudou na semana, escreve uma mensagem curta ('anti-padrões refinados / nova skill / KNOWLEDGE do cliente X'), commit + push. Pronto. Conforme o hábito se consolida, você vai naturalmente commitar também quando fechar um marco importante — um brief, um draft, uma versão de prompt que funcionou.",
    },
    {
      heading: "Como escrever boas mensagens de commit",
      body: "Verbo no imperativo + objeto curto. Bom: 'atualizar brief com novo escopo', 'adicionar prompt de pesquisa de mercado', 'reescrever introdução do artigo X'. Ruim: 'mudanças' (vago), 'aaaa' (preguiçoso), 'fix typo in like 17 places' (ok, mas pode ser 'corrigir typos no draft Y'). Em três meses, você vai folhear esse histórico — escreva pensando no você-do-futuro.",
    },
    {
      heading: "Ciclo semanal — 1 minuto toda sexta",
      body: "Toda sexta, antes de fechar o computador: abre GitHub Desktop, vê o diff do que mudou na semana, escreve mensagem de commit, commit, push. 1 minuto. Seu sistema fica versionado, backupeado e recuperável. Quem quiser automatizar pode delegar o ritual ao Claude Code com um agendamento — o Claude roda toda sexta às 18h, commita o que mudou e te notifica.",
    },
    {
      heading: "Erro comum: tratar o repo como o Drive",
      body: "Quem vem do Drive tende a ou commitar tudo (incluindo binários pesados) ou nunca commitar (ficar editando local sem registrar marcos). Os dois extremos esvaziam o ganho. Compromisso: texto vai pro repo com commits regulares; o resto vai pro Drive ou Notion.",
    },
  ],
  quiz: [
    {
      question: "Qual destes itens é melhor candidato para o repo (não para Drive ou Notion)?",
      options: [
        "Um vídeo de 2GB de uma apresentação",
        "Um template de prompt em Markdown que você reusa em vários projetos",
        "A lista de tarefas da semana com prazos",
        "Um PDF escaneado de contrato",
      ],
      correctIndex: 1,
      explanation:
        "Texto estruturado, reusável e que você quer rever — esse é o sweet spot do repo. Vídeo vai pro Drive; lista de tarefas vivas vão pro Notion/Things.",
    },
    {
      question: "Qual a frequência recomendada para quem está começando?",
      options: [
        "A cada caractere digitado",
        "Uma vez por mês",
        "Toda sexta-feira — 1 minuto como parte do ritual semanal de revisão do sistema",
        "Só quando lembrar",
      ],
      correctIndex: 2,
      explanation:
        "Começar com o ritual semanal (toda sexta) garante consistência sem sobrecarga. Conforme o hábito se consolida, você vai commitar naturalmente também ao fechar marcos importantes durante a semana.",
    },
    {
      question: "Qual mensagem de commit é melhor?",
      options: [
        "'mudanças'",
        "'finalmente terminei aaaaa'",
        "'reescrever seção de pricing do brief MSCS'",
        "'.'",
      ],
      correctIndex: 2,
      explanation:
        "Verbo no imperativo + objeto específico. Daqui a três meses, essa mensagem te conta exatamente o que aconteceu sem você precisar abrir o diff.",
    },
    {
      question: "Por que NUNCA commitar senhas, tokens ou dados sensíveis em repo público?",
      options: [
        "Porque o GitHub avisa por e-mail",
        "Porque repos públicos são indexáveis e bots procuram credenciais — o vazamento é em segundos e o histórico do Git mantém o segredo mesmo se você deletar depois",
        "Porque ocupa muito espaço",
        "Porque é só uma boa prática estética",
      ],
      correctIndex: 1,
      explanation:
        "Existem bots literalmente fazendo scan de novos commits 24/7. Pior: deletar o arquivo num commit novo NÃO apaga o histórico — o segredo continua acessível na versão antiga.",
    },
  ],
  checklist: [
    { id: "definir-o-que-vai", text: "Listar 3 tipos de conteúdo meu que devem ir pro repo" },
    { id: "definir-o-que-nao-vai", text: "Listar 2 tipos que devem ficar fora (e onde ficam: Drive ou Notion)" },
    { id: "rotina-commit", text: "Marcar toda sexta no calendário como dia de commit semanal" },
    { id: "primeiro-ritual", text: "Executar pelo menos 1 ciclo completo: editar → commit com boa mensagem → push" },
    { id: "regras-mensagens", text: "Adotar a regra: verbo no imperativo + objeto curto nas mensagens" },
  ],
};
