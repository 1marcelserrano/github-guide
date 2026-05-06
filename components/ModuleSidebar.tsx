import { ListChecks, HelpCircle } from "lucide-react";
import type { ChecklistItem } from "@/lib/types";

interface ModuleSidebarProps {
  slug: string;
  checklist?: ChecklistItem[];
  quizCount?: number;
}

export function ModuleSidebar({
  slug,
  checklist,
  quizCount,
}: ModuleSidebarProps) {
  const checklistCount = checklist?.length ?? 0;
  const quiz = quizCount ?? 0;

  const content = (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent">
          <ListChecks className="h-3.5 w-3.5" aria-hidden />
          Checklist
        </div>
        <p className="mt-2 text-sm text-muted">
          {checklistCount > 0
            ? `${checklistCount} passos para concluir este módulo.`
            : "Checklist e quiz chegam no Stage 3."}
        </p>
      </div>
      <div>
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent">
          <HelpCircle className="h-3.5 w-3.5" aria-hidden />
          Quiz
        </div>
        <p className="mt-2 text-sm text-muted">
          {quiz > 0
            ? `${quiz} perguntas para fixar o conteúdo.`
            : "Quiz interativo será conectado no Stage 4."}
        </p>
      </div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
        slug: {slug}
      </p>
    </div>
  );

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      {/* Mobile: accordion */}
      <details
        open
        className="rounded-lg border border-border bg-surface p-6 lg:hidden"
      >
        <summary className="cursor-pointer list-none font-mono text-xs uppercase tracking-[0.3em] text-accent marker:hidden">
          Painel do módulo
        </summary>
        <div className="mt-6">{content}</div>
      </details>

      {/* Desktop: sticky panel */}
      <div className="hidden rounded-lg border border-border bg-surface p-6 lg:block">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          Painel do módulo
        </p>
        <div className="mt-6">{content}</div>
      </div>
    </aside>
  );
}
