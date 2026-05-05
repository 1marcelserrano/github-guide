import { notFound } from "next/navigation";
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

  return (
    <main className="mx-auto flex max-w-3xl flex-col px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
        Módulo {String(found.order).padStart(2, "0")}
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        {found.title}
      </h1>
      <p className="mt-4 text-base text-muted">{found.description}</p>
      <p className="mt-12 font-mono text-xs text-muted">
        Conteúdo deste módulo chega no Stage 3.
      </p>
    </main>
  );
}
