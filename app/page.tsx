import { ModuleCard } from "@/components/ModuleCard";
import { modules } from "@/content/modulos";

export default function Home() {
  const orderedModules = [...modules].sort((a, b) => a.order - b.order);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-12 sm:py-16">
      <section className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          MSCREATIVE.SYSTEMS · Beta Turma Zero
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          GitHub para Não-Devs
        </h1>
        <p className="mt-4 text-base text-muted sm:text-lg">
          Um guia interativo para versionar projetos, textos e prompts —
          mesmo sem nunca ter escrito uma linha de código. Seis módulos curtos
          para transformar o GitHub em fonte de contexto vivo do seu trabalho
          com o Claude.
        </p>
      </section>

      <section className="mt-12 sm:mt-16">
        <div className="flex items-baseline justify-between">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
            Módulos
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            {orderedModules.length} no total
          </span>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {orderedModules.map((module) => (
            <ModuleCard key={module.slug} module={module} />
          ))}
        </div>
      </section>

      <footer className="mt-20 border-t border-border pt-8 pb-4">
        <div className="flex flex-col gap-2 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>MSCREATIVE.SYSTEMS · Beta Turma Zero</span>
          <a
            href="https://github.com/1marcelserrano/github-guide"
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-accent"
          >
            Repositório no GitHub ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
