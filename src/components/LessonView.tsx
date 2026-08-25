import { useState, useCallback } from 'react';
import {
  Play,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ChevronDown,
  ChevronRight,
  Loader2,
  Terminal,
  Award,
  BookOpen,
} from 'lucide-react';
import type { Lesson } from '@/types';
import { usePyodide, type RunResult } from '@/hooks/usePyodide';
import type { ProgressState } from '@/hooks/useProgress';

interface LessonViewProps {
  lesson: Lesson;
  progress: ProgressState;
  onProblemResult: (problemId: string, passed: boolean) => void;
  onMCQResult: (mcqId: string, passed: boolean) => void;
  onLessonComplete: (lessonId: string) => void;
}

const levelStyles: Record<string, { bg: string; text: string; border: string; label: string }> = {
  Beginner: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30', label: 'bg-emerald-500' },
  Intermediate: { bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/30', label: 'bg-sky-500' },
  Advanced: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30', label: 'bg-amber-500' },
  Pro: { bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/30', label: 'bg-rose-500' },
};

function normalize(s: string): string {
  return s.replace(/\s+$/g, '').trim();
}

export function LessonView({
  lesson,
  progress,
  onProblemResult,
  onMCQResult,
  onLessonComplete,
}: LessonViewProps) {
  const { ready, loading, runCode } = usePyodide();
  const [code, setCode] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, RunResult | null>>({});
  const [running, setRunning] = useState<Record<string, boolean>>({});
  const [showHint, setShowHint] = useState<Record<string, boolean>>({});
  const [mcqAnswers, setMCQAnswers] = useState<Record<string, number>>({});
  const [mcqChecked, setMCQChecked] = useState<Record<string, boolean>>({});

  const style = levelStyles[lesson.level];

  const getCode = useCallback(
    (problemId: string, starter: string) => {
      if (code[problemId] !== undefined) return code[problemId];
      return starter;
    },
    [code]
  );

  const setCodeFor = useCallback((problemId: string, value: string) => {
    setCode((prev) => ({ ...prev, [problemId]: value }));
  }, []);

  const handleRun = useCallback(
    async (problemId: string) => {
      setRunning((prev) => ({ ...prev, [problemId]: true }));
      const userCode = getCode(problemId, '');
      const result = await runCode(userCode);
      setResults((prev) => ({ ...prev, [problemId]: result }));
      setRunning((prev) => ({ ...prev, [problemId]: false }));
    },
    [getCode, runCode]
  );

  const handleSubmit = useCallback(
    (problemId: string, expected: string) => {
      const result = results[problemId];
      if (!result) return;
      const passed = !result.error && normalize(result.output) === normalize(expected);
      onProblemResult(problemId, passed);
    },
    [results, onProblemResult]
  );

  const handleMCQCheck = useCallback(
    (mcqId: string, correctIndex: number) => {
      setMCQChecked((prev) => ({ ...prev, [mcqId]: true }));
      const selected = mcqAnswers[mcqId];
      const passed = selected === correctIndex;
      onMCQResult(mcqId, passed);
    },
    [mcqAnswers, onMCQResult]
  );

  const allProblemsPassed = lesson.problems.every(
    (p) => progress.problemResults[p.id] === true
  );
  const allMCQsPassed = lesson.mcqs.every(
    (m) => progress.mcqResults[m.id] === true
  );
  const canComplete = allProblemsPassed && allMCQsPassed;

  return (
    <div className="flex-1 overflow-y-auto h-screen">
      <div className="max-w-3xl mx-auto px-8 py-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className={`text-xs uppercase tracking-wider font-bold px-2.5 py-1 rounded-md ${style.bg} ${style.text} border ${style.border}`}>
              {lesson.level}
            </span>
            <span className="text-xs text-neutral-500">{lesson.category}</span>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">{lesson.title}</h1>
        </div>

        {/* Lesson Content */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-neutral-500" />
            <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Lesson</h2>
          </div>
          <div className="space-y-5">
            {lesson.content.map((para, i) => (
              <p key={i} className="text-neutral-300 leading-[1.8] text-[15px]">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Practice Problems */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
              Practice Problems
            </h2>
            <span className="text-xs text-neutral-600">({lesson.problems.length})</span>
          </div>

          <div className="space-y-6">
            {lesson.problems.map((problem, idx) => {
              const result = results[problem.id];
              const isRunning = running[problem.id];
              const passed = progress.problemResults[problem.id] === true;
              const showH = showHint[problem.id];

              return (
                <div
                  key={problem.id}
                  className="bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden"
                >
                  <div className="px-5 py-4 border-b border-neutral-800">
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-mono text-neutral-600 mt-0.5">Q{idx + 1}</span>
                      <div className="flex-1">
                        <p className="text-neutral-200 text-sm leading-relaxed">{problem.prompt}</p>
                      </div>
                      {passed && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      )}
                    </div>
                  </div>

                  <div className="p-4">
                    {/* Code editor */}
                    <div className="rounded-lg bg-neutral-950 border border-neutral-800 overflow-hidden">
                      <div className="flex items-center gap-2 px-3 py-2 border-b border-neutral-800 bg-neutral-900/50">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                        </div>
                        <span className="text-xs text-neutral-600 font-mono ml-2">main.py</span>
                      </div>
                      <textarea
                        value={getCode(problem.id, problem.starterCode)}
                        onChange={(e) => setCodeFor(problem.id, e.target.value)}
                        spellCheck={false}
                        className="w-full bg-transparent text-neutral-200 font-mono text-sm p-4 outline-none resize-none min-h-[120px] leading-relaxed"
                        placeholder="Write your Python code here..."
                      />
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => handleRun(problem.id)}
                        disabled={isRunning || !ready}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium transition-colors disabled:opacity-50"
                      >
                        {isRunning ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Play className="w-4 h-4" />
                        )}
                        Run
                      </button>
                      <button
                        onClick={() => {
                          const r = results[problem.id];
                          if (r) handleSubmit(problem.id, problem.expectedOutput);
                        }}
                        disabled={!result || result.error || !ready}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Submit
                      </button>
                      <button
                        onClick={() =>
                          setShowHint((prev) => ({ ...prev, [problem.id]: !prev[problem.id] }))
                        }
                        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 text-sm transition-colors"
                      >
                        <Lightbulb className="w-4 h-4" />
                        Hint
                      </button>
                      {loading && !ready && (
                        <span className="text-xs text-neutral-600 flex items-center gap-1.5">
                          <Loader2 className="w-3 h-3 animate-spin" />
                          Loading Python...
                        </span>
                      )}
                    </div>

                    {/* Hint */}
                    {showH && (
                      <div className="mt-3 px-4 py-3 rounded-lg bg-amber-500/5 border border-amber-500/20 flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-200/80">{problem.hint}</p>
                      </div>
                    )}

                    {/* Output */}
                    {result && (
                      <div className="mt-3">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xs font-mono text-neutral-600">Output</span>
                          {result.error ? (
                            <span className="text-xs text-rose-400 flex items-center gap-1">
                              <XCircle className="w-3 h-3" /> Error
                            </span>
                          ) : (
                            normalize(result.output) === normalize(problem.expectedOutput) && (
                              <span className="text-xs text-emerald-400 flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3" /> Correct
                              </span>
                            )
                          )}
                        </div>
                        <pre className={`rounded-lg p-3 text-sm font-mono whitespace-pre-wrap break-words overflow-x-auto ${
                          result.error
                            ? 'bg-rose-950/40 border border-rose-900/50 text-rose-300'
                            : 'bg-neutral-950 border border-neutral-800 text-neutral-300'
                        }`}>
                          {result.output || '(no output)'}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* MCQs */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <Award className="w-4 h-4 text-sky-400" />
            <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
              Multiple Choice
            </h2>
            <span className="text-xs text-neutral-600">({lesson.mcqs.length})</span>
          </div>

          <div className="space-y-5">
            {lesson.mcqs.map((mcq, idx) => {
              const selected = mcqAnswers[mcq.id];
              const checked = mcqChecked[mcq.id];
              const isCorrect = selected === mcq.correctIndex;
              const passed = progress.mcqResults[mcq.id] === true;

              return (
                <div
                  key={mcq.id}
                  className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-xs font-mono text-neutral-600 mt-0.5">MCQ{idx + 1}</span>
                    <p className="text-neutral-200 text-sm flex-1">{mcq.question}</p>
                    {passed && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                  </div>

                  <div className="space-y-2 ml-8">
                    {mcq.options.map((option, optIdx) => {
                      const isSelected = selected === optIdx;
                      const showResult = checked;
                      const isThisCorrect = optIdx === mcq.correctIndex;
                      const isThisWrong = showResult && isSelected && !isThisCorrect;

                      return (
                        <button
                          key={optIdx}
                          onClick={() => {
                            if (!checked) {
                              setMCQAnswers((prev) => ({ ...prev, [mcq.id]: optIdx }));
                            }
                          }}
                          disabled={checked}
                          className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-200 flex items-center gap-3 ${
                            showResult && isThisCorrect
                              ? 'bg-emerald-500/10 border border-emerald-500/40 text-emerald-300'
                              : isThisWrong
                              ? 'bg-rose-500/10 border border-rose-500/40 text-rose-300'
                              : isSelected
                              ? 'bg-neutral-800 border border-neutral-700 text-white'
                              : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                          } ${checked ? 'cursor-default' : 'cursor-pointer'}`}
                        >
                          <span className="font-mono text-xs text-neutral-600">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          {option}
                          {showResult && isThisCorrect && (
                            <CheckCircle2 className="w-4 h-4 ml-auto text-emerald-400" />
                          )}
                          {isThisWrong && (
                            <XCircle className="w-4 h-4 ml-auto text-rose-400" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Check button */}
                  {!checked && selected !== undefined && (
                    <button
                      onClick={() => handleMCQCheck(mcq.id, mcq.correctIndex)}
                      className="ml-8 mt-3 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium transition-colors"
                    >
                      Check Answer
                    </button>
                  )}

                  {/* Explanation */}
                  {checked && (
                    <div className={`ml-8 mt-3 px-4 py-3 rounded-lg text-sm ${
                      isCorrect
                        ? 'bg-emerald-500/5 border border-emerald-500/20 text-emerald-200/80'
                        : 'bg-rose-500/5 border border-rose-500/20 text-rose-200/80'
                    }`}>
                      <span className="font-semibold">
                        {isCorrect ? 'Correct! ' : 'Not quite. '}
                      </span>
                      {mcq.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Complete Lesson Button */}
        <section className="mb-12">
          <button
            onClick={() => onLessonComplete(lesson.id)}
            disabled={!canComplete}
            className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
              canComplete
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20'
                : progress.completedLessons.includes(lesson.id)
                ? 'bg-neutral-800 text-neutral-400 cursor-default'
                : 'bg-neutral-800/50 text-neutral-500 cursor-not-allowed'
            }`}
          >
            {progress.completedLessons.includes(lesson.id) ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Lesson Completed
              </>
            ) : canComplete ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                Mark Lesson Complete
              </>
            ) : (
              'Complete all problems and MCQs to finish'
            )}
          </button>
          {!canComplete && !progress.completedLessons.includes(lesson.id) && (
            <p className="text-center text-xs text-neutral-600 mt-2">
              Solve all {lesson.problems.length} problems and {lesson.mcqs.length} MCQs to unlock completion
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
