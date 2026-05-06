"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";
import type { QuizQuestion } from "@/lib/types";
import {
  getModuleProgress,
  markQuizDone,
  PROGRESS_EVENT,
} from "@/lib/progress";

interface QuizProps {
  slug: string;
  questions: QuizQuestion[];
}

export function Quiz({ slug, questions }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    questions.map(() => null),
  );
  const [finished, setFinished] = useState(false);
  const [persistedDone, setPersistedDone] = useState(false);

  useEffect(() => {
    setPersistedDone(getModuleProgress(slug).quizDone);
    const handler = () =>
      setPersistedDone(getModuleProgress(slug).quizDone);
    window.addEventListener(PROGRESS_EVENT, handler);
    return () => window.removeEventListener(PROGRESS_EVENT, handler);
  }, [slug]);

  const total = questions.length;
  const currentQuestion = questions[currentIndex];
  const selected = answers[currentIndex];
  const isAnswered = selected !== null;
  const isLast = currentIndex === total - 1;

  const correctCount = answers.reduce<number>((acc, ans, i) => {
    return ans !== null && ans === questions[i].correctIndex ? acc + 1 : acc;
  }, 0);

  function handleSelect(optionIndex: number) {
    if (isAnswered) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = optionIndex;
      return next;
    });
  }

  function handleNext() {
    if (isLast) {
      setFinished(true);
      return;
    }
    setCurrentIndex((i) => i + 1);
  }

  function handleRetry() {
    setAnswers(questions.map(() => null));
    setCurrentIndex(0);
    setFinished(false);
  }

  function handleMarkDone() {
    markQuizDone(slug);
  }

  if (finished) {
    return (
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <Trophy
            className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
            aria-hidden
          />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
              Resultado
            </p>
            <p className="mt-1 text-lg font-semibold text-text">
              {correctCount} de {total} corretas
            </p>
            <p className="mt-1 text-sm text-muted">
              {persistedDone
                ? "Você já marcou este quiz como concluído. Pode refazer quantas vezes quiser."
                : "Marque como concluído para registrar progresso, ou tente de novo."}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {!persistedDone && (
            <button
              type="button"
              onClick={handleMarkDone}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-xs font-mono uppercase tracking-widest text-primary transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
              Marcar quiz como concluído
            </button>
          )}
          <button
            type="button"
            onClick={handleRetry}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface-2 px-4 py-2 text-xs font-mono uppercase tracking-widest text-text transition-colors hover:border-accent focus:outline-none focus-visible:border-accent focus-visible:ring-1 focus-visible:ring-accent"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden />
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-baseline justify-between">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
          Pergunta {String(currentIndex + 1).padStart(2, "0")} de{" "}
          {String(total).padStart(2, "0")}
        </p>
        {persistedDone && (
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
            Concluído ✓
          </span>
        )}
      </div>

      <p className="text-base font-medium text-text sm:text-lg">
        {currentQuestion.question}
      </p>

      <ul className="space-y-2">
        {currentQuestion.options.map((opt, oi) => {
          const isSelected = selected === oi;
          const isCorrect = oi === currentQuestion.correctIndex;
          const showCorrect = isAnswered && isCorrect;
          const showWrong = isAnswered && isSelected && !isCorrect;

          let stateClass =
            "border-border bg-surface-2 hover:border-accent";
          if (showCorrect) {
            stateClass = "border-accent bg-accent/10 text-text";
          } else if (showWrong) {
            stateClass = "border-red-500/60 bg-red-500/10 text-text";
          } else if (isAnswered) {
            stateClass = "border-border bg-surface-2 opacity-70";
          }

          return (
            <li key={oi}>
              <button
                type="button"
                onClick={() => handleSelect(oi)}
                disabled={isAnswered}
                className={`flex w-full items-start gap-3 rounded-md border px-4 py-3 text-left text-sm transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent ${stateClass} ${
                  isAnswered ? "cursor-default" : "cursor-pointer"
                }`}
              >
                <span className="font-mono text-xs text-muted">
                  {String.fromCharCode(65 + oi)}
                </span>
                <span className="flex-1">{opt}</span>
                {showCorrect && (
                  <CheckCircle2
                    className="h-4 w-4 flex-shrink-0 text-accent"
                    aria-hidden
                  />
                )}
                {showWrong && (
                  <XCircle
                    className="h-4 w-4 flex-shrink-0 text-red-500"
                    aria-hidden
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {isAnswered && (
        <div className="rounded-md border border-accent/30 bg-accent/5 px-4 py-3 text-sm">
          <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
            Resposta certa:{" "}
            {String.fromCharCode(65 + currentQuestion.correctIndex)}
          </p>
          <p className="mt-2 text-text">{currentQuestion.explanation}</p>
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleNext}
          disabled={!isAnswered}
          className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-xs font-mono uppercase tracking-widest text-primary transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isLast ? "Ver resultado" : "Próxima pergunta"} →
        </button>
      </div>
    </div>
  );
}
