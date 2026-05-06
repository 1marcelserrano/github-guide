"use client";

import { useEffect, useMemo, useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { modules } from "@/content/modulos";
import { moduleContents } from "@/content/modulos/all";
import { getCompletedCount, PROGRESS_EVENT } from "@/lib/progress";

export function HeaderProgress() {
  const total = modules.length;
  const moduleCounts = useMemo(
    () =>
      modules.map((m) => ({
        slug: m.slug,
        total: moduleContents[m.slug]?.checklist.length ?? 0,
      })),
    [],
  );

  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setCompleted(getCompletedCount(moduleCounts));
    const handler = () => setCompleted(getCompletedCount(moduleCounts));
    window.addEventListener(PROGRESS_EVENT, handler);
    return () => window.removeEventListener(PROGRESS_EVENT, handler);
  }, [moduleCounts]);

  return <ProgressBar completed={completed} total={total} />;
}
