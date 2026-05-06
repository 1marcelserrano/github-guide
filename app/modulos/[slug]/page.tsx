import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ModuleSidebar } from "@/components/ModuleSidebar";
import { modules } from "@/content/modulos";

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

          <div className="mt-12 rounded-lg border border-dashed border-border bg-surface/40 p-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
              Em construção
            </p>
            <p className="mt-3 text-sm text-muted">
              Conteúdo deste módulo chega no Stage 3.
            </p>
          </div>
        </article>

        <ModuleSidebar slug={slug} />
      </div>
    </main>
  );
}
