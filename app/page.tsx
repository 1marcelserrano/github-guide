export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <div className="max-w-2xl space-y-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          MSCREATIVE.SYSTEMS
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          GitHub para Não-Devs
        </h1>
        <p className="text-base text-muted sm:text-lg">
          Guia interativo para versionar projetos, textos e prompts. Material
          de apoio da Beta Turma Zero.
        </p>
        <p className="font-mono text-xs text-muted">
          Stage 1/4 — scaffold pronto. Layout e módulos em construção.
        </p>
      </div>
    </main>
  );
}
