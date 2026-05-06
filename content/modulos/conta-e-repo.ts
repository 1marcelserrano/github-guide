import type { ModuleContent } from "@/lib/types";
import { modules } from "./index";

const meta = modules.find((m) => m.slug === "conta-e-repo")!;

export const contaERepo: ModuleContent = {
  meta,
  sections: [
    {
      heading: "Criando a conta",
      body: "Vá em github.com e clique em 'Sign up'. Você vai precisar de três coisas: um e-mail (use um que você acessa de verdade), um username público (esse aparece em URLs como github.com/seu-username — escolha algo estável) e uma senha forte. O GitHub manda um código de verificação por e-mail; confirme e você cai no dashboard.",
    },
    {
      heading: "Tour rápido pelo dashboard",
      body: "No canto superior direito está seu avatar — é dali que você navega entre seu perfil, seus repositórios e configurações. No topo central tem a barra de busca. À esquerda fica a lista dos seus repos (vazia agora). É uma interface densa, mas você vai usar 5% dela no dia-a-dia. Não se intimide com as abas que você ainda não entende.",
    },
    {
      heading: "Criando seu primeiro repositório",
      body: "Clique no botão verde 'New' (ou no '+' no topo direito → 'New repository'). Você vai preencher um formulário simples. Pense num repositório como uma pasta na nuvem que vai guardar todo o histórico das suas mudanças.",
    },
    {
      heading: "As decisões do formulário",
      body: "Nome do repo: kebab-case, curto, descritivo (ex: `meus-prompts`, `escrita-2026`). Descrição: uma frase. Público vs privado: público é visível para qualquer um na internet — bom para portfolio, ruim para rascunho íntimo. Privado é só seu. Marque 'Add a README file' (esse vira sua porta de entrada). Pode pular `.gitignore` e `license` por enquanto.",
    },
    {
      heading: "O que é o README",
      body: "O `README.md` é o primeiro arquivo que aparece quando alguém (ou você mesmo daqui a três meses) abre o repo. Ele é escrito em Markdown — uma sintaxe simples para títulos, listas e links. Trate o README como o índice navegável do seu repo: explique o que tem ali, como está organizado, e (no caso MSCS) como ele se conecta com o Claude.",
    },
    {
      heading: "Repo = pasta versionada na nuvem",
      body: "Tudo que você acabou de criar mora em um servidor do GitHub. Por enquanto, é uma pasta com um único arquivo (o README). No próximo módulo, você vai trazer essa pasta para o seu computador via GitHub Desktop e começar a editar — sem terminal, sem comando, só interface gráfica.",
    },
  ],
  quiz: [
    {
      question: "O que é um repositório no GitHub?",
      options: [
        "Um banco de dados para programadores",
        "Uma pasta na nuvem que guarda arquivos e todo o histórico de mudanças deles",
        "Uma rede social",
        "Um lugar para hospedar sites",
      ],
      correctIndex: 1,
      explanation:
        "Repositório = pasta versionada. O diferencial é o histórico — não é só storage, é storage com narrativa de mudanças.",
    },
    {
      question: "Qual a diferença entre repo público e privado?",
      options: [
        "Público é mais rápido",
        "Privado custa dinheiro e público é grátis",
        "Público é visível para qualquer pessoa na internet; privado é acessível só por você (e quem você convidar)",
        "Não tem diferença prática",
      ],
      correctIndex: 2,
      explanation:
        "A escolha é sobre visibilidade, não sobre funcionalidade. Use público para o que você quer mostrar; privado para rascunhos e material sensível.",
    },
    {
      question: "Por que vale a pena marcar 'Add a README' ao criar um repo?",
      options: [
        "Porque é obrigatório",
        "Porque ele já cria o repo com um arquivo inicial e funciona como índice/porta de entrada do projeto",
        "Porque o GitHub não funciona sem ele",
        "Por questão de SEO",
      ],
      correctIndex: 1,
      explanation:
        "Sem nenhum arquivo, o repo nasce vazio e o GitHub mostra instruções confusas. O README dá um ponto de partida e serve como índice navegável.",
    },
    {
      question: "O username que você escolhe no cadastro:",
      options: [
        "Pode ser trocado a qualquer momento sem efeito colateral",
        "Aparece publicamente em URLs (github.com/seu-username) — escolha algo estável",
        "É secreto",
        "Só serve para login",
      ],
      correctIndex: 1,
      explanation:
        "O username é seu identificador público e parte da URL de tudo que você publicar. Trocar depois quebra links — escolha com calma.",
    },
  ],
  checklist: [
    { id: "criar-conta", text: "Criar conta no github.com com e-mail verificado" },
    { id: "escolher-username", text: "Escolher um username estável" },
    { id: "explorar-dashboard", text: "Dar uma volta pelo dashboard (avatar, busca, lista de repos)" },
    { id: "criar-primeiro-repo", text: "Criar meu primeiro repositório (kebab-case, com README)" },
    { id: "ler-readme", text: "Abrir o README criado e ler o conteúdo padrão" },
    { id: "decidir-publico-privado", text: "Decidir conscientemente entre público e privado" },
  ],
};
