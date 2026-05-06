import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, HelpCircle } from "lucide-react";
import { ModuleSidebar } from "@/components/ModuleSidebar";
import { modules } from "@/content/modulos";
import { moduleContents } from "@/content/modulos/all";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const found = modules.find((m) => m.slug === slug);
  if (!found) notFound();

  const content = moduleContents[slug];
  if (!content) notFound();

  const orderLabel = String(found.order).padStart(2, "0");

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12 sm:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
        Todos os módulos
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-12">
        <article className="min-w-0">
          <header>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              Módulo {orderLabel}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {found.title}
            </h1>
            <p className="mt-4 text-base text-muted sm:text-lg">
              {found.description}
            </p>
          </header>

          <section className="mt-10">
            {content.sections.map((section, i) => (
              <div key={i}>
                <h2 className="mt-10 text-xl font-semibold tracking-tight first:mt-0">
                  {section.heading}
                </h2>
                <p className="mt-3 whitespace-pre-line text-base leading-relaxed text-text">
                  {section.body}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-12 rounded-lg border border-border bg-surface p-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
              <CheckCircle2 className="h-4 w-4" aria-hidden />
              Checklist
            </div>
            <p className="mt-2 text-sm text-muted">
              {content.checklist.length} passos para concluir este módulo. Os checkboxes interativos chegam no Stage 4.
            </p>
            <ul className="mt-5 space-y-3">
              {content.checklist.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start gap-3 text-sm text-text"
                >
                  <span
                    className="mt-1 h-4 w-4 flex-shrink-0 rounded border border-border"
                    aria-hidden
                  />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 rounded-lg border border-border bg-surface p-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
              <HelpCircle className="h-4 w-4" aria-hidden />
              Quiz
            </div>
            <p className="mt-2 text-sm text-muted">
              {content.quiz.length} perguntas para fixar o conteúdo. Versão interativa com feedback chega no Stage 4.
            </p>
            <ol className="mt-6 space-y-8">
              {content.quiz.map((q, qi) => (
                <li key={qi} className="space-y-3">
                  <p className="text-base font-medium text-text">
                    <span className="mr-2 font-mono text-xs text-muted">
                      {String(qi + 1).padStart(2, "0")}
                    </span>
                    {q.question}
                  </p>
                  <ul className="space-y-2">
                    {q.options.map((opt, oi) => (
                      <li
                        key={oi}
                        className="flex items-start gap-3 rounded-md border border-border bg-surface-2 px-4 py-3 text-sm text-text"
                      >
                        <span className="font-mono text-xs text-muted">
                          {String.fromCharCode(65 + oi)}
                        </span>
                        <span>{opt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-md border border-accent/30 bg-accent/5 px-4 py-3 text-sm">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                      Resposta certa: {String.fromCharCode(65 + q.correctIndex)}
                    </p>
                    <p className="mt-2 text-text">{q.explanation}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </article>

        <ModuleSidebar
          slug={slug}
          checklist={content.checklist}
          quizCount={content.quiz.length}
        />
      </div>
    </main>
  );
}
