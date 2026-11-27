# Rascunho enriquecido do guia (para aprovação do Marcel)

Branch: `claude/github-guide-enriquecido-20261127`. Nada publicado: sem PR, sem merge, sem deploy. Texto público só vai ao ar com aprovação.
Ideias inspiradas em uma masterclass de Claude Code do Chase AI, sempre reescritas em palavras próprias. Nenhuma frase, exemplo ou estrutura de aula foi copiada.

## Lista de mudanças

| Arquivo | Mudança |
|---|---|
| `content/modulos/segredos-e-seguranca.ts` | NOVO módulo (ordem 6): 8 seções, 6 perguntas de quiz, 5 itens de checklist |
| `content/modulos/index.ts` | Registra o módulo novo |
| `content/modulos/all.ts` | Importa e mapeia o módulo novo |
| `content/modulos/ritual-diario.ts` | +4 seções, +3 perguntas, +1 item de checklist |
| `content/modulos/github-desktop.ts` | +2 seções, +1 pergunta, +1 item de checklist |

Mapa das ideias aprovadas:
- (a) commit salva, push envia, deploy publica: seção nova em `ritual-diario`.
- (b) reverter pedindo ao Claude: seção em `ritual-diario`, e "Desfazendo sem decorar comando" em `github-desktop`.
- (c) CLI do GitHub pelo Claude: seção em `ritual-diario`; login sem colar token na seção de segredos; módulo novo de segredos.
- (d) dois caminhos lado a lado: seção em `github-desktop`.
- (e) rodar local primeiro: seção em `ritual-diario`.

## Trechos novos em destaque

> Commit salva, push envia, deploy publica. São três gestos diferentes, e confundir um com o outro é a origem de quase todo susto. Commit é um ponto de salvamento no seu computador, como salvar um jogo. [...] Num repo só de textos, não existe deploy e o push apenas guarda.

> Dois caminhos lado a lado. [...] Regra prática: peça ao Claude, e confira no Desktop.

> Reverter pedindo ao Claude. Peça: "crie um commit que desfaça ela, sem apagar o histórico". [...] Reverter conserta o código, mas não resolve um segredo que vazou.

> Se vazou: a ordem importa. 1) gire a chave no serviço dono dela; 2) coloque a nova no `.env` e na hospedagem; 3) olhe uso e cobrança; 4) só depois, se quiser, limpar o histórico. Apagar o arquivo num commit novo não resolve nada.

## O que ficou de fora e por quê

- Decisões da aula sobre Supabase, Resend, CRM, skills, rotinas, custo de API e janela de contexto: fora do escopo do guia de GitHub.
- Instalação passo a passo da CLI da Vercel: o guia não ensina Vercel; só aparece como exemplo de hospedagem.
- Limpeza de histórico com `git filter-repo`/BFG: técnico demais para o público; o módulo só avisa que existe e que reescreve o histórico.
- Branches e pull requests: continuam fora, como no guia atual.
- Crédito ao Chase AI no site: não incluí. Se quiser, uma linha no rodapé do módulo novo: "inspirado em uma masterclass de Claude Code do Chase AI".
- `CLAUDE.md` e `README.md` do repo ainda dizem "6 módulos"; ficaram intocados por estarem fora de `content/`.

## Pontos para olhar com atenção

- O site mostra o texto como texto puro (`whitespace-pre-line`): os `**negrito**` e crases dos módulos antigos aparecem com os caracteres. No módulo novo evitei negrito e usei crase só em nomes de arquivo e comandos, como os módulos atuais. Corrigir a renderização seria mudança de código e fica para outra decisão.
- Adicionar itens de checklist muda o total de módulos já concluídos no navegador de quem já usou o guia (o progresso fica no localStorage).

## Dúvidas de fato não conferidas contra documentação ao vivo

- Nomes exatos dos menus do GitHub Desktop ("Undo Most Recent Commit" em Branch, "Revert Changes in Commit" na aba History): vêm de uso conhecido, não abri o app. Podem variar entre Mac e Windows.
- O bloqueio de push com chave conhecida pelo GitHub (push protection): redigi com "pode barrar" de propósito. Vale conferir a regra atual nas docs do GitHub.
- A Vercel publicar a cada push na branch de produção e criar prévia para outras branches: comportamento padrão que conheço, não revalidado nas docs hoje.
- Conferidos nesta sessão: `gh auth login` por navegador e token no cofre do sistema (ajuda da `gh` 2.105.0), `gh repo create` com `--private`/`--source`/`--push`, e que `NEXT_PUBLIC_` embute o valor no JavaScript do navegador e que o `create-next-app` ignora `.env*` (docs do Next 16.2.4 em `node_modules`).

## Definição de pronto

`npm run build` passou (11 páginas estáticas, 7 módulos).
