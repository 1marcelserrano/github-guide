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
      heading: "Commit salva, push envia, deploy publica",
      body: "São três gestos diferentes, e confundir um com o outro é a origem de quase todo susto. Commit é um ponto de salvamento no seu computador, como salvar um jogo: dá para voltar a ele quando quiser. Push envia esses pontos para o GitHub, e é o seu backup na nuvem. Deploy é publicar: só existe quando o repo é um site ou app ligado a uma hospedagem (a Vercel, por exemplo, que fica de olho no repo e publica sozinha a cada push na branch principal). Num repo só de textos, não existe deploy e o push apenas guarda. Num repo de site, o push passa a ser o gesto que coloca a mudança no ar, e por isso vale uma conferência antes.",
    },
    {
      heading: "Rodar local primeiro, publicar depois",
      body: "Quando o repo é um site, ele roda primeiro só no seu computador, num endereço como `localhost`. Ali você vê o resultado no navegador, ninguém mais enxerga, e dá para errar à vontade. Só depois de olhar e aprovar você faz commit e push, e a hospedagem publica. Ao trabalhar com o Claude, peça 'rode o site localmente e me diga o endereço', confira, e só então peça o commit e o envio. Publicar passa a ser um gesto que você declara, não um acidente. A Vercel ainda cria uma prévia com endereço próprio para pushes em outras branches, o que permite testar online sem tocar no site principal.",
    },
    {
      heading: "Pedindo ao Claude para instalar e usar a CLI do GitHub",
      body: "A CLI do GitHub, chamada `gh`, é o GitHub pelo terminal. Você não precisa aprender a usá-la: peça ao Claude 'instale a CLI do GitHub e faça meu login'. Ele instala, roda o `gh auth login` e abre uma página no navegador para você autorizar. A partir daí, o Claude consegue criar repositórios, enviar o trabalho e abrir o que for preciso no GitHub a seu pedido. Um exemplo de pedido: 'crie um repo privado chamado meu-projeto com esta pasta e envie tudo'. Leia o que ele pretende fazer, principalmente quando for criar algo público, e lembre-se do módulo de segredos: login sempre pelo navegador, nunca colando token no chat.",
    },
    {
      heading: "Reverter pedindo ao Claude",
      body: "Se uma mudança deu errado, você não precisa saber qual comando usar. Peça: 'a última alteração quebrou a página inicial, crie um commit que desfaça ela, sem apagar o histórico'. Dizer a segunda parte importa, porque existem formas de desfazer que reescrevem a história, e elas são mais arriscadas depois de um push. Reverter por commit novo é seguro: o erro fica registrado, a versão atual volta a ficar certa, e você pode até desfazer o desfazer. Uma ressalva: reverter conserta o código, mas não resolve um segredo que vazou. Esse caso tem receita própria no módulo de segredos e segurança.",
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
    {
      question: "Qual é a diferença entre commit, push e deploy?",
      options: [
        "São nomes diferentes para a mesma coisa",
        "Commit salva um ponto no seu computador, push envia para o GitHub, deploy publica o site ou app quando há uma hospedagem ligada ao repo",
        "Commit publica o site, push salva no computador, deploy apaga o histórico",
        "Push salva no computador, commit envia para o GitHub, deploy cria o repo",
      ],
      correctIndex: 1,
      explanation:
        "Commit é local, push leva para a nuvem e deploy só existe quando uma hospedagem observa o repo. Num repo de textos, o ciclo termina no push.",
    },
    {
      question: "Por que rodar o site localmente antes de publicar?",
      options: [
        "Porque é obrigatório pelo Git",
        "Porque no endereço local só você enxerga o resultado, e pode testar e errar sem afetar o site no ar",
        "Porque deixa o site mais rápido depois",
        "Porque a hospedagem cobra por cada publicação",
      ],
      correctIndex: 1,
      explanation:
        "O ambiente local é privado. Conferir ali e só depois dar commit e push faz de publicar um gesto deliberado.",
    },
    {
      question: "Qual pedido ao Claude desfaz uma mudança já enviada de forma mais segura?",
      options: [
        "'Apague o histórico e refaça tudo'",
        "'Crie um commit que desfaça a última alteração, sem apagar o histórico'",
        "'Force o envio da versão antiga'",
        "'Delete o repo no GitHub'",
      ],
      correctIndex: 1,
      explanation:
        "O commit que desfaz mantém o histórico intacto e pode ele mesmo ser desfeito. Reescrever o histórico depois de um push é mais arriscado.",
    },
  ],
  checklist: [
    { id: "definir-o-que-vai", text: "Listar 3 tipos de conteúdo meu que devem ir pro repo" },
    { id: "definir-o-que-nao-vai", text: "Listar 2 tipos que devem ficar fora (e onde ficam: Drive ou Notion)" },
    { id: "rotina-commit", text: "Marcar toda sexta no calendário como dia de commit semanal" },
    { id: "primeiro-ritual", text: "Executar pelo menos 1 ciclo completo: editar → commit com boa mensagem → push" },
    { id: "pedir-revert", text: "Pedir ao Claude um commit que desfaça uma mudança de teste, sem apagar o histórico" },
    { id: "regras-mensagens", text: "Adotar a regra: verbo no imperativo + objeto curto nas mensagens" },
  ],
};
