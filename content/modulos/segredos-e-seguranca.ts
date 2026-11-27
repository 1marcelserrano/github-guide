import type { ModuleContent } from "@/lib/types";
import { modules } from "./index";

const meta = modules.find((m) => m.slug === "segredos-e-seguranca")!;

export const segredosESeguranca: ModuleContent = {
  meta,
  sections: [
    {
      heading: "O que é um segredo",
      body: "Segredo é qualquer texto que dá acesso a algo seu: senhas, chaves de API (o código que deixa um programa usar um serviço em seu nome, como o de uma IA, de e-mail ou de banco de dados), tokens de login e links privados com permissão embutida. Quem tem o texto, tem o acesso. Não importa se foi você que digitou ou se um robô achou. Dado pessoal sensível (documentos, telefones de clientes) entra na mesma regra: se não pode aparecer em público, não vai para o repo.",
    },
    {
      heading: "Por que o repo é o lugar errado",
      body: "O Git guarda o histórico inteiro. Se uma chave entrou num commit uma única vez, ela continua guardada naquela versão antiga, mesmo que você apague o arquivo no commit seguinte. Em repo público, existem programas que varrem o GitHub o tempo todo atrás desse tipo de texto, e o intervalo entre o push e o abuso pode ser de minutos. Em repo privado o risco é menor, mas não zero: o repo pode ser compartilhado, clonado ou virar público um dia. A regra mais simples é a que vale sempre: segredo não entra no repo, nem no privado.",
    },
    {
      heading: "Onde o segredo mora: o arquivo .env",
      body: "A convenção é guardar segredos num arquivo chamado `.env` (ou `.env.local`) na pasta do projeto. O arquivo tem uma linha por segredo, no formato NOME=valor. O código do projeto lê o valor pelo nome e nunca o escreve por extenso. Assim o código pode ir para o repo sem carregar nenhum segredo junto. Você não precisa montar isso sozinho: peça ao Claude 'mova essa chave para um arquivo .env e faça o código ler de lá'. Projetos novos feitos com o gerador oficial do Next.js já nascem com os arquivos .env ignorados pelo Git.",
    },
    {
      heading: "O .gitignore é a cerca",
      body: "O `.gitignore` é um arquivo de texto na raiz do repo que lista o que o Git deve fingir que não existe. Colocar `.env*` nele impede que esses arquivos apareçam no GitHub Desktop e entrem num commit. Duas coisas que pegam iniciante. Primeira: o .gitignore só protege arquivos que o Git ainda não acompanha. Se o `.env` já foi commitado alguma vez, ignorá-lo depois não tira o conteúdo do histórico (veja a seção sobre vazamento). Segunda: crie também um `.env.example` com os mesmos nomes e valores falsos (CHAVE_DA_IA=cole-aqui). Esse sim vai para o repo, e avisa quem clonar, inclusive você num computador novo, quais segredos precisam ser preenchidos.",
    },
    {
      heading: "Um cuidado extra em sites feitos com Next.js",
      body: "Se você constrói sites com o Claude e o projeto usa Next.js, existe uma pegadinha documentada: variáveis cujo nome começa com `NEXT_PUBLIC_` são embutidas no código que o navegador baixa, ou seja, ficam visíveis para qualquer visitante. Serve para valores que podem ser públicos. Uma chave secreta com esse prefixo deixa de ser secreta. Ao pedir para o Claude criar uma variável, diga se ela é secreta, e confira o nome.",
    },
    {
      heading: "Conferir antes do push",
      body: "Faça disso um hábito antes de mandar qualquer coisa para a nuvem. No GitHub Desktop, passe os olhos na lista de arquivos alterados: apareceu algum `.env`, algum arquivo de credenciais, algum documento com dado de cliente? Desmarque e ajuste o `.gitignore`. Com o Claude, peça: 'antes do push, procure no que vou enviar por senhas, chaves, tokens e dados pessoais, e me diga o que achou'. É uma segunda leitura barata. O GitHub também pode barrar um push que contenha certos tipos de chave conhecidos e avisar na tela. Se isso acontecer, não procure um jeito de contornar: leia o aviso, remova o segredo e tente de novo.",
    },
    {
      heading: "E os logins do GitHub e da hospedagem?",
      body: "Quando você pede ao Claude para usar a CLI do GitHub (o `gh`, o GitHub pelo terminal, que o Claude instala e opera por você), o login acontece pelo navegador: o `gh auth login` abre uma página do GitHub, você autoriza lá, e o acesso fica guardado no cofre de credenciais do seu computador. Você não cola senha nem token em chat nenhum. A hospedagem do site (a Vercel, por exemplo) segue a mesma lógica: as chaves que o site publicado precisa ficam na área de variáveis de ambiente do projeto, no painel dela, e não no repo. Regra geral: se uma ferramenta pedir para você colar uma senha ou chave num chat, pare e pergunte se existe um login pelo navegador.",
    },
    {
      heading: "Se vazou: a ordem importa",
      body: "Primeiro, não entre em pânico e não tente esconder: aja na ordem. Passo 1, gire a chave: entre no serviço dono dela, revogue a chave vazada e gere uma nova. Isso é o que resolve de fato, porque a chave antiga deixa de funcionar. Passo 2, coloque a chave nova no seu `.env` e na área de variáveis da hospedagem. Passo 3, olhe o painel do serviço por uso ou cobrança estranha nos últimos dias. Passo 4, só depois, se quiser, peça ao Claude para tirar o segredo do histórico do repo, sabendo que isso reescreve o histórico e que cópias já feitas por terceiros não somem. Apagar o arquivo num commit novo não resolve nada: o histórico guarda a versão antiga. E vazou senha pessoal? Troque a senha e ative a verificação em duas etapas.",
    },
    {
      heading: "Seu mínimo de segurança",
      body: "Quatro hábitos que cabem num post-it. Segredo vive no `.env`, nunca no código. O `.gitignore` cobre `.env*` desde o primeiro dia do projeto. Olhe a lista de arquivos antes do commit e peça uma segunda leitura ao Claude antes do push. Se vazar, gire a chave antes de qualquer outra coisa. Isso protege você e quem confia nos seus repos.",
    },
  ],
  quiz: [
    {
      question: "Você commitou um arquivo com uma chave por engano e, no commit seguinte, apagou o arquivo. A chave está segura?",
      options: [
        "Sim, o arquivo não existe mais",
        "Não. O histórico do Git mantém a versão antiga, então a chave deve ser tratada como vazada",
        "Sim, desde que o repo seja privado para sempre",
        "Só se o commit de remoção tiver uma boa mensagem",
      ],
      correctIndex: 1,
      explanation:
        "O Git guarda todas as versões. Quem olhar o commit antigo encontra a chave. O caminho seguro é revogar a chave e gerar outra.",
    },
    {
      question: "Qual é a primeira ação quando uma chave vaza?",
      options: [
        "Apagar o repo",
        "Reescrever o histórico do Git",
        "Revogar a chave no serviço dono dela e gerar uma nova",
        "Esperar para ver se alguém usa",
      ],
      correctIndex: 2,
      explanation:
        "Só girar a chave invalida o que vazou. Limpar o histórico é um passo posterior e opcional, porque cópias já feitas por terceiros não somem.",
    },
    {
      question: "O que o `.gitignore` faz?",
      options: [
        "Criptografa os arquivos listados",
        "Diz ao Git quais arquivos ignorar, para que não entrem em commits, desde que ainda não estejam versionados",
        "Apaga do histórico arquivos que já foram commitados",
        "Esconde o repo do Google",
      ],
      correctIndex: 1,
      explanation:
        "É uma lista de arquivos que o Git deve fingir que não vê. Não criptografa nada e não limpa o que já entrou no histórico.",
    },
    {
      question: "Para que serve um `.env.example`?",
      options: [
        "Guardar as chaves reais em backup no repo",
        "Mostrar os nomes das variáveis necessárias, com valores falsos, para que quem clonar o repo saiba o que preencher",
        "Substituir o `.gitignore`",
        "Enviar as chaves ao Claude",
      ],
      correctIndex: 1,
      explanation:
        "Ele documenta quais segredos o projeto espera, sem revelar nenhum. É seguro versionar justamente porque os valores são falsos.",
    },
    {
      question: "Num site Next.js, uma variável começa com `NEXT_PUBLIC_`. O que isso implica?",
      options: [
        "Ela fica mais protegida",
        "O valor é embutido no código enviado ao navegador, então qualquer visitante consegue ler",
        "Ela só funciona em repo privado",
        "O Git passa a ignorá-la",
      ],
      correctIndex: 1,
      explanation:
        "O prefixo existe para expor valores de propósito ao navegador. Chave secreta nunca deve levar esse prefixo.",
    },
    {
      question: "Uma ferramenta pede que você cole um token de acesso no chat para continuar. O que fazer?",
      options: [
        "Colar, é só um token",
        "Parar e procurar um login pelo navegador, como o `gh auth login`, que guarda o acesso no seu computador sem passar pelo chat",
        "Colar e trocar o token depois",
        "Mandar o token por e-mail para si mesmo",
      ],
      correctIndex: 1,
      explanation:
        "Logins pelo navegador evitam que o segredo circule em texto. Quando existe essa opção, ela é o caminho certo.",
    },
  ],
  checklist: [
    { id: "listar-segredos", text: "Listar os segredos que existem nos meus projetos (chaves de API, tokens, senhas)" },
    { id: "gitignore-env", text: "Conferir que o `.gitignore` do meu repo cobre `.env*` (ou pedir ao Claude para ajustar)" },
    { id: "env-example", text: "Criar um `.env.example` com nomes e valores falsos num projeto que use chaves" },
    { id: "revisar-antes-do-push", text: "Fazer uma revisão de arquivos antes do próximo push e pedir ao Claude uma segunda leitura" },
    { id: "plano-de-vazamento", text: "Escrever, em 4 linhas, o que eu faria se uma chave vazasse (começando por girar a chave)" },
  ],
};
