const STORAGE_KEY = "mscs:github-guide:progress";
const EVENT_NAME = "mscs-progress-change";

export type ModuleProgress = {
  checklist: string[];
  quizDone: boolean;
};

export type ProgressState = Record<string, ModuleProgress>;

export type ModuleStatus = "completed" | "in-progress" | "not-started";

const EMPTY_MODULE: ModuleProgress = { checklist: [], quizDone: false };

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function emitChange(): void {
  if (!isBrowser()) return;
  window.dispatchEvent(new CustomEvent(EVENT_NAME));
}

export function getProgress(): ProgressState {
  if (!isBrowser()) return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object") return {};
    return parsed as ProgressState;
  } catch {
    return {};
  }
}

export function setProgress(state: ProgressState): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore quota / serialization failures
  }
  emitChange();
}

export function getModuleProgress(slug: string): ModuleProgress {
  const state = getProgress();
  const entry = state[slug];
  if (!entry) return { ...EMPTY_MODULE };
  return {
    checklist: Array.isArray(entry.checklist) ? entry.checklist : [],
    quizDone: Boolean(entry.quizDone),
  };
}

export function toggleChecklistItem(slug: string, id: string): ProgressState {
  const state = getProgress();
  const current = state[slug] ?? { ...EMPTY_MODULE };
  const set = new Set(current.checklist);
  if (set.has(id)) {
    set.delete(id);
  } else {
    set.add(id);
  }
  const next: ProgressState = {
    ...state,
    [slug]: { ...current, checklist: Array.from(set) },
  };
  setProgress(next);
  return next;
}

export function markQuizDone(slug: string): ProgressState {
  const state = getProgress();
  const current = state[slug] ?? { ...EMPTY_MODULE };
  const next: ProgressState = {
    ...state,
    [slug]: { ...current, quizDone: true },
  };
  setProgress(next);
  return next;
}

export function getModuleStatus(
  slug: string,
  totalChecklist: number,
): ModuleStatus {
  const { checklist, quizDone } = getModuleProgress(slug);
  if (totalChecklist > 0 && checklist.length === totalChecklist) {
    return "completed";
  }
  if (checklist.length > 0 || quizDone) {
    return "in-progress";
  }
  return "not-started";
}

export function getCompletedCount(
  modulesWithCounts: { slug: string; total: number }[],
): number {
  return modulesWithCounts.reduce((acc, { slug, total }) => {
    return getModuleStatus(slug, total) === "completed" ? acc + 1 : acc;
  }, 0);
}

export const PROGRESS_EVENT = EVENT_NAME;
