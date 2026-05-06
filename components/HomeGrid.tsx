"use client";

import { useEffect, useMemo, useState } from "react";
import { ModuleCard, type ModuleStatus } from "./ModuleCard";
import type { Module, ModuleContent } from "@/lib/types";
import { getModuleStatus, PROGRESS_EVENT } from "@/lib/progress";

interface HomeGridProps {
  modules: Module[];
  moduleContents: Record<string, ModuleContent>;
}

export function HomeGrid({ modules, moduleContents }: HomeGridProps) {
  const orderedModules = useMemo(
    () => [...modules].sort((a, b) => a.order - b.order),
    [modules],
  );

  const [statuses, setStatuses] = useState<Record<string, ModuleStatus>>(() => {
    const initial: Record<string, ModuleStatus> = {};
    for (const m of orderedModules) initial[m.slug] = "not-started";
    return initial;
  });

  useEffect(() => {
    function compute(): Record<string, ModuleStatus> {
      const next: Record<string, ModuleStatus> = {};
      for (const m of orderedModules) {
        const total = moduleContents[m.slug]?.checklist.length ?? 0;
        next[m.slug] = getModuleStatus(m.slug, total);
      }
      return next;
    }
    setStatuses(compute());
    const handler = () => setStatuses(compute());
    window.addEventListener(PROGRESS_EVENT, handler);
    return () => window.removeEventListener(PROGRESS_EVENT, handler);
  }, [orderedModules, moduleContents]);

  return (
    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {orderedModules.map((module) => (
        <ModuleCard
          key={module.slug}
          module={module}
          status={statuses[module.slug] ?? "not-started"}
        />
      ))}
    </div>
  );
}
