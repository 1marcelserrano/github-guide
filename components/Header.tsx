import Link from "next/link";
import { HeaderProgress } from "./HeaderProgress";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/80 backdrop-blur supports-[backdrop-filter]:bg-surface/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <Link
          href="/"
          className="group flex flex-wrap items-baseline gap-x-3 gap-y-1"
          aria-label="Voltar para a home"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent transition-opacity group-hover:opacity-80">
            MSCREATIVE.SYSTEMS
          </span>
          <span className="font-mono text-xs text-muted">/</span>
          <span className="text-sm font-semibold tracking-tight text-text sm:text-base">
            GitHub para Não-Devs
          </span>
        </Link>
        <HeaderProgress />
      </div>
    </header>
  );
}
