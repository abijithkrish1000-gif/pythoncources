import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'py-study-progress';

export interface ProgressState {
  completedLessons: string[];
  problemResults: Record<string, boolean>;
  mcqResults: Record<string, boolean>;
}

const DEFAULT_STATE: ProgressState = {
  completedLessons: [],
  problemResults: {},
  mcqResults: {},
};

function loadState(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw);
    return {
      completedLessons: Array.isArray(parsed.completedLessons)
        ? parsed.completedLessons
        : [],
      problemResults:
        typeof parsed.problemResults === 'object' && parsed.problemResults
          ? parsed.problemResults
          : {},
      mcqResults:
        typeof parsed.mcqResults === 'object' && parsed.mcqResults
          ? parsed.mcqResults
          : {},
    };
  } catch {
    return DEFAULT_STATE;
  }
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(DEFAULT_STATE);

  useEffect(() => {
    setState(loadState());
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const markProblemResult = useCallback((problemId: string, passed: boolean) => {
    setState((s) => ({
      ...s,
      problemResults: { ...s.problemResults, [problemId]: passed },
    }));
  }, []);

  const markMCQResult = useCallback((mcqId: string, passed: boolean) => {
    setState((s) => ({
      ...s,
      mcqResults: { ...s.mcqResults, [mcqId]: passed },
    }));
  }, []);

  const markLessonComplete = useCallback((lessonId: string) => {
    setState((s) => ({
      ...s,
      completedLessons: s.completedLessons.includes(lessonId)
        ? s.completedLessons
        : [...s.completedLessons, lessonId],
    }));
  }, []);

  const resetProgress = useCallback(() => {
    setState(DEFAULT_STATE);
  }, []);

  return {
    state,
    markProblemResult,
    markMCQResult,
    markLessonComplete,
    resetProgress,
  };
}
