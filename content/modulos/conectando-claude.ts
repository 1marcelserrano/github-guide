import type { ModuleContent } from "@/lib/types";
import { modules } from "./index";

const meta = modules.find((m) => m.slug === "conectando-claude")!;

export const conectandoClaude: ModuleContent = {
  meta,
  sections: [
    {
      heading: "A filosofia central — repo é KNOWLEDGE viva",
      body: "Tudo o que vimos até agora converge para esta ideia: o repo não é um arquivador, é uma memória externa que o Claude lê. Cada arquivo Markdown que você cria é um pedaço de contexto que o agente passa a saber sobre você, seus projetos, suas decisões e seus padrões. Conforme o repo cresce e fica mais bem-organizado, suas conversas com o Claude ficam mais rápidas, mais alinhadas e mais úteis.",
    },
    {
      heading: "Como o Claude lê seu repo (3 modos)",
      body: "**Claude Code** (terminal): roda direto na pasta do repo no seu computador — lê QUALQUER arquivo do working dir, indexa tudo, e entende o estado atual do código/conteúdo em tempo real. **Claude Desktop**: você adiciona arquivos como 'project files' e o Claude tem acesso a eles em todas as conversas daquele projeto. **Claude.ai (web/app)**: copy-paste de Markdown direto no chat, ou anexa arquivos individuais por conversa. Os três funcionam — o Code tem o acoplamento mais forte com o repo.",
    },
    {
      heading: "Os 3 arquivos contextuais essenciais",
      body: "**`about-me.md`** (na raiz): quem você é, o que faz, como pensa, suas restrições e preferências. Esse arquivo é o crash course que o Claude precisa para te entender. **`KNOWLEDGE/`** (pasta): notas por domínio (design, copy, negócios, técnica) que servem como referências reusáveis. **`CLAUDE.md`** (na raiz, ou na pasta do projeto): regras específicas — como você quer que o Claude responda, convenções do projeto, o que evitar, vocabulário a usar.",
    },
    {
      heading: "Anatomia de um about-me.md útil",
      body: "Não é um currículo. É um briefing operacional: nome, papel atual, contexto profissional curto (2-3 frases), 3-5 áreas de foco, preferências de comunicação ('respostas curtas', 'PT-BR', 'sem rodeios'), restrições ('evite jargão dev quando explicar para mim'), e ferramentas que você usa. Trate como o que você diria para um novo colega no primeiro dia. Atualize quando algo muda materialmente.",
    },
    {
      heading: "Anatomia de um CLAUDE.md útil",
      body: "Foco em REGRAS, não em descrição. O que sempre fazer, o que nunca fazer, formato de saída esperado, vocabulário do projeto. Exemplo MSCS: 'Sempre PT-BR. Tom direto, sem floreio. Use `kebab-case` em arquivos. Quando sugerir código, mostre o diff em vez de reescrever o arquivo todo.' Cada projeto importante seu pode ter seu próprio CLAUDE.md.",
    },
    {
      heading: "O ciclo de update",
      body: "Conforme você usa o Claude, vão surgir momentos onde o agente sugere algo melhor que o que está no seu KNOWLEDGE — uma nova convenção, uma reescrita de prompt, uma estrutura mais limpa. Adote o ciclo: Claude propõe → você revisa o diff → se aprovar, edita o arquivo → commit + push → próxima conversa começa do estado atualizado. O repo evolui junto com sua relação com o Claude.",
    },
    {
      heading: "Onde isso te leva",
      body: "Você não está mais usando o Claude como uma caixa de pergunta isolada. Você está construindo um par humano-agente onde o repo é o terreno comum. Conforme isso amadurece, você passa a iniciar conversas com 'olha o repo' em vez de explicar tudo do zero a cada vez. É a diferença entre ter um assistente que esquece tudo e um colega que sabe quem você é.",
    },
  ],
  quiz: [
    {
      question: "Qual modo de uso do Claude tem o acoplamento mais forte com o repo (lê arquivos direto do working dir em tempo real)?",
      options: [
        "Claude.ai web",
        "Claude Desktop",
        "Claude Code (terminal/CLI)",
        "Todos têm o mesmo nível de acesso",
      ],
      correctIndex: 2,
      explanation:
        "Claude Code roda no terminal e tem o working dir como contexto direto — qualquer arquivo do repo é lido em tempo real. Desktop usa project files (snapshot) e web/app dependem de copy-paste por conversa.",
    },
    {
      question: "Qual o papel do `about-me.md`?",
      options: [
        "Currículo formal",
        "Briefing operacional sobre quem você é, como pensa e como prefere se comunicar — para o Claude te entender rápido",
        "Bio para redes sociais",
        "Página de perfil pública obrigatória",
      ],
      correctIndex: 1,
      explanation:
        "É o crash course que o Claude lê para alinhar tom, vocabulário e contexto. Não é portfolio — é o que você diria para um colega novo no primeiro dia.",
    },
    {
      question: "Qual a função primária do `CLAUDE.md`?",
      options: [
        "Documentação para outros humanos",
        "Lista de tarefas pendentes",
        "Regras específicas de como o Claude deve se comportar naquele projeto (o que sempre fazer, o que nunca fazer, formato de saída)",
        "Histórico de conversas com o Claude",
      ],
      correctIndex: 2,
      explanation:
        "CLAUDE.md é instrução, não descrição. Foca em regras operacionais para alinhar comportamento do agente em todas as conversas do projeto.",
    },
    {
      question: "Como funciona o ciclo de update entre Claude e repo?",
      options: [
        "O Claude edita o repo sozinho automaticamente",
        "Você só atualiza o repo uma vez por mês",
        "Claude propõe edições, você revisa o diff, aprova, commita — próxima conversa começa do estado novo",
        "É um fluxo manual, sem participação do Claude",
      ],
      correctIndex: 2,
      explanation:
        "O ciclo é colaborativo: o Claude sugere melhorias, você é o gatekeeper que decide o que entra. O commit fecha o loop e o estado atualizado fica disponível para conversas futuras.",
    },
    {
      question: "Por que faz sentido ter um KNOWLEDGE/ por domínio em vez de um único arquivo gigante?",
      options: [
        "Porque o GitHub limita o tamanho de arquivo",
        "Porque arquivos pequenos são mais rápidos de carregar",
        "Porque organizar por domínio facilita navegação humana e permite trazer só o contexto relevante para cada conversa com o Claude",
        "Não faz diferença",
      ],
      correctIndex: 2,
      explanation:
        "Modularidade: você ataca apenas o domínio relevante por conversa, evita poluir o contexto, e o repo continua navegável conforme cresce.",
    },
  ],
  checklist: [
    { id: "criar-about-me", text: "Criar `about-me.md` na raiz com briefing operacional sobre mim" },
    { id: "criar-claude-md", text: "Criar `CLAUDE.md` na raiz com pelo menos 3 regras específicas" },
    { id: "iniciar-knowledge", text: "Criar pasta `KNOWLEDGE/` com pelo menos 1 arquivo de domínio" },
    { id: "testar-claude", text: "Abrir uma conversa com o Claude usando esses arquivos como contexto" },
    { id: "primeiro-ciclo", text: "Executar 1 ciclo de update: Claude sugere → eu reviso → commit" },
    { id: "compartilhar", text: "Compartilhar minha experiência ou dúvidas na Beta Turma Zero MSCS" },
  ],
};
