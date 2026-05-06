"use client";

import { useEffect, useState } from "react";
import { CheckSquare, Square } from "lucide-react";
import type { ChecklistItem } from "@/lib/types";
import {
  getModuleProgress,
  toggleChecklistItem,
  PROGRESS_EVENT,
} from "@/lib/progress";

interface ChecklistProps {
  slug: string;
  items: ChecklistItem[];
}

export function Checklist({ slug, items }: ChecklistProps) {
  const [checked, setChecked] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setChecked(getModuleProgress(slug).checklist);
    setHydrated(true);
    const handler = () => setChecked(getModuleProgress(slug).checklist);
    window.addEventListener(PROGRESS_EVENT, handler);
    return () => window.removeEventListener(PROGRESS_EVENT, handler);
  }, [slug]);

  const checkedSet = new Set(checked);
  const completedCount = items.filter((item) => checkedSet.has(item.id)).length;
  const allDone = hydrated && completedCount === items.length;

  function handleToggle(id: string) {
    toggleChecklistItem(slug, id);
  }

  return (
    <div>
      <p className="text-sm text-muted">
        {hydrated
          ? `${completedCount} de ${items.length} concluído${
              items.length === 1 ? "" : "s"
            }${allDone ? " · módulo completo ✓" : ""}`
          : `${items.length} passos para concluir este módulo.`}
      </p>
      <ul className="mt-5 space-y-2">
        {items.map((item) => {
          const isChecked = checkedSet.has(item.id);
          const Icon = isChecked ? CheckSquare : Square;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleToggle(item.id)}
                aria-pressed={isChecked}
                className="group flex w-full items-start gap-3 rounded-md border border-border bg-surface-2 px-4 py-3 text-left text-sm text-text transition-colors hover:border-accent focus:outline-none focus-visible:border-accent focus-visible:ring-1 focus-visible:ring-accent"
              >
                <Icon
                  className={`mt-0.5 h-4 w-4 flex-shrink-0 transition-colors ${
                    isChecked ? "text-accent" : "text-muted group-hover:text-accent"
                  }`}
                  aria-hidden
                />
                <span
                  className={
                    isChecked ? "text-muted line-through" : "text-text"
                  }
                >
                  {item.text}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
