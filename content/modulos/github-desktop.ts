import type { ModuleContent } from "@/lib/types";
import { modules } from "./index";

const meta = modules.find((m) => m.slug === "github-desktop")!;

export const githubDesktop: ModuleContent = {
  meta,
  sections: [
    {
      heading: "Por que Desktop em vez de terminal",
      body: "Quem trabalha com texto não precisa decorar comandos. O GitHub Desktop é um aplicativo gratuito que dá uma interface gráfica para todas as operações que importam. Você vê os arquivos mudando, escreve a mensagem do commit num campo de texto, e clica num botão. Zero linha de comando. Para um não-dev, é o caminho mais curto entre 'tenho um repo' e 'estou versionando meu trabalho'.",
    },
    {
      heading: "Glossário mínimo (5 palavras)",
      body: "**Clone**: trazer uma cópia do repo da nuvem para o seu computador. **Commit**: registrar um instantâneo das mudanças, com mensagem. **Push**: mandar seus commits locais para a nuvem. **Pull**: trazer mudanças que estão na nuvem mas não no seu computador. **Branch**: uma linha paralela de trabalho — vamos ignorar por enquanto e ficar só na 'main'.",
    },
    {
      heading: "Instalar e logar",
      body: "Baixe em desktop.github.com (Mac, Windows e Linux). Abra o app, clique em 'Sign in to GitHub.com' e autorize no navegador. Quando voltar ao app, ele já reconhece sua conta e mostra os repositórios que você tem na nuvem.",
    },
    {
      heading: "Clone do repo do módulo anterior",
      body: "Em File → Clone repository → aba 'GitHub.com', escolha o repo que você criou no Módulo 01 e selecione uma pasta no seu computador (sugestão: `~/Documents/repos/`). Clique em Clone. Em alguns segundos, você tem uma pasta local que é um espelho do repo na nuvem.",
    },
    {
      heading: "Editando um arquivo",
      body: "No próprio Desktop tem um botão 'Show in Finder' (ou Explorer no Windows). Clique e abra a pasta. Edite o `README.md` num editor de texto qualquer (VSCode, Bear, ou até o TextEdit/Bloco de notas em modo plain text). Adicione uma linha. Salve.",
    },
    {
      heading: "Vendo o diff e commitando",
      body: "Volte para o GitHub Desktop. Ele detecta a mudança automaticamente e te mostra um 'diff' — exatamente quais linhas foram adicionadas (verde) ou removidas (vermelho). No canto inferior esquerdo, escreva uma mensagem de commit curta no imperativo (ex: 'atualizar README com primeira linha de teste'). Clique em 'Commit to main'.",
    },
    {
      heading: "Push — publicando na nuvem",
      body: "O commit ficou apenas no seu computador. Para mandar para a nuvem, clique em 'Push origin' no topo. Pronto. Recarregue a página do repo no github.com e veja sua mudança lá. Esse é o ciclo completo: editar local → commit → push. Você acabou de fazer pelo GUI tudo que devs fazem por terminal.",
    },
  ],
  quiz: [
    {
      question: "Qual é a função do GitHub Desktop?",
      options: [
        "Editar arquivos como um Word",
        "Substituir o terminal — dar uma interface gráfica para clone, commit, push e pull",
        "Hospedar o site do seu repo",
        "Sincronizar como o Dropbox automaticamente",
      ],
      correctIndex: 1,
      explanation:
        "O Desktop traduz operações de Git em botões. Ele não edita arquivos (você usa um editor de texto separado) e ele não sincroniza automaticamente — você decide quando commitar e quando fazer push.",
    },
    {
      question: "O que faz o comando 'clone'?",
      options: [
        "Cria um repo novo",
        "Copia o repo da nuvem para o seu computador, com todo o histórico",
        "Manda mudanças locais para a nuvem",
        "Apaga o repo",
      ],
      correctIndex: 1,
      explanation:
        "Clone = trazer da nuvem para local. É como baixar a pasta inteira, mas com o histórico completo de versões junto.",
    },
    {
      question: "Você editou um arquivo localmente e fez commit. As mudanças já estão na nuvem?",
      options: [
        "Sim, commit salva direto no github.com",
        "Não. Commit é local — você precisa dar push para que apareça no github.com",
        "Sim, mas só depois de 5 minutos",
        "Depende do tamanho do arquivo",
      ],
      correctIndex: 1,
      explanation:
        "Esse é o erro mais comum de iniciante: assumir que commit já publica. Commit grava localmente; push é o passo que sobe para o servidor.",
    },
    {
      question: "Por que escrever uma mensagem de commit no imperativo curto (ex: 'atualizar README')?",
      options: [
        "É exigência técnica do Git",
        "Convenção da comunidade que torna o histórico legível como uma narrativa de mudanças",
        "Para o commit ficar mais leve",
        "Não importa, qualquer mensagem serve",
      ],
      correctIndex: 1,
      explanation:
        "Tecnicamente qualquer string funciona, mas no longo prazo um histórico bem escrito vira documentação. Imperativo curto é a convenção que mais ajuda a leitura.",
    },
    {
      question: "O que é 'pull'?",
      options: [
        "Apagar o repo local",
        "Trazer mudanças que estão na nuvem mas ainda não estão no seu computador",
        "Criar uma cópia do repo",
        "Renomear um arquivo",
      ],
      correctIndex: 1,
      explanation:
        "Pull é o oposto do push: você baixa para local o que existe na nuvem. Importante quando você edita pelo navegador ou de outro computador.",
    },
  ],
  checklist: [
    { id: "instalar-desktop", text: "Instalar o GitHub Desktop e fazer login" },
    { id: "clone-repo", text: "Fazer clone do repo criado no Módulo 01" },
    { id: "abrir-pasta", text: "Abrir a pasta local pelo Finder/Explorer" },
    { id: "editar-readme", text: "Editar o README.md num editor de texto e salvar" },
    { id: "ver-diff", text: "Voltar ao Desktop e visualizar o diff da mudança" },
    { id: "primeiro-commit", text: "Fazer meu primeiro commit com mensagem no imperativo" },
    { id: "primeiro-push", text: "Fazer push e ver a mudança aparecer no github.com" },
  ],
};
