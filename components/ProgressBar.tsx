interface ProgressBarProps {
  completed: number;
  total: number;
}

export function ProgressBar({ completed, total }: ProgressBarProps) {
  const safeTotal = Math.max(total, 1);
  const ratio = Math.min(Math.max(completed / safeTotal, 0), 1);
  const percent = Math.round(ratio * 100);

  return (
    <div className="flex items-center gap-3">
      <div
        className="h-2 w-32 overflow-hidden rounded-full border border-border bg-surface-2 sm:w-40"
        role="progressbar"
        aria-valuenow={completed}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={`${completed} de ${total} módulos completos`}
      >
        <div
          className="h-full bg-accent transition-[width] duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
        {completed}/{total} módulos
      </span>
    </div>
  );
}
