import Link from "next/link";
import { CheckCircle2, Circle, CirclePlay } from "lucide-react";
import type { Module } from "@/lib/types";

export type ModuleStatus = "completed" | "in-progress" | "not-started";

interface ModuleCardProps {
  module: Module;
  status?: ModuleStatus;
}

const STATUS_META: Record<
  ModuleStatus,
  { label: string; tone: string; Icon: typeof Circle }
> = {
  completed: {
    label: "Completo",
    tone: "text-accent",
    Icon: CheckCircle2,
  },
  "in-progress": {
    label: "Em andamento",
    tone: "text-text",
    Icon: CirclePlay,
  },
  "not-started": {
    label: "Não iniciado",
    tone: "text-muted",
    Icon: Circle,
  },
};

export function ModuleCard({ module, status = "not-started" }: ModuleCardProps) {
  const { label, tone, Icon } = STATUS_META[status];
  const orderLabel = String(module.order).padStart(2, "0");

  return (
    <Link
      href={`/modulos/${module.slug}`}
      className="group relative flex h-full cursor-pointer flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent focus:outline-none focus-visible:border-accent focus-visible:ring-1 focus-visible:ring-accent"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          Módulo {orderLabel}
        </span>
        <span
          className={`flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest ${tone}`}
        >
          <Icon className="h-3.5 w-3.5" aria-hidden />
          {label}
        </span>
      </div>
      <h2 className="mt-4 text-lg font-semibold tracking-tight text-text sm:text-xl">
        {module.title}
      </h2>
      <p className="mt-2 text-sm text-muted">{module.description}</p>
      <span className="mt-6 font-mono text-xs text-muted transition-colors group-hover:text-accent">
        Abrir módulo →
      </span>
    </Link>
  );
}
