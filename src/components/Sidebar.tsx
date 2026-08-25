import { CheckCircle2, Circle, BookOpen, RotateCcw, Code2 } from 'lucide-react';
import type { Lesson } from '@/types';
import type { ProgressState } from '@/hooks/useProgress';

interface SidebarProps {
  lessons: Lesson[];
  currentLessonId: string;
  onSelect: (id: string) => void;
  progress: ProgressState;
  onReset: () => void;
}

const levelColors: Record<string, string> = {
  Beginner: 'text-emerald-400',
  Intermediate: 'text-sky-400',
  Advanced: 'text-amber-400',
  Pro: 'text-rose-400',
};

const levelDots: Record<string, string> = {
  Beginner: 'bg-emerald-500',
  Intermediate: 'bg-sky-500',
  Advanced: 'bg-amber-500',
  Pro: 'bg-rose-500',
};

export function Sidebar({
  lessons,
  currentLessonId,
  onSelect,
  progress,
  onReset,
}: SidebarProps) {
  const completedCount = progress.completedLessons.length;
  const totalLessons = lessons.length;
  const pct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <aside className="w-72 shrink-0 h-screen bg-neutral-950 border-r border-neutral-800 flex flex-col">
      <div className="px-5 py-5 border-b border-neutral-800">
        <div className="flex items-center gap-2 mb-1">
          <Code2 className="w-6 h-6 text-emerald-400" />
          <h1 className="text-lg font-bold text-white tracking-tight">PyStudy</h1>
        </div>
        <p className="text-xs text-neutral-500">Python, beginner to pro</p>
      </div>

      <div className="px-5 py-4 border-b border-neutral-800">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-neutral-400">Your progress</span>
          <span className="text-xs font-bold text-white">{pct}%</span>
        </div>
        <div className="h-2 rounded-full bg-neutral-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="text-xs text-neutral-500 mt-2">
          {completedCount} of {totalLessons} lessons complete
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto py-2 px-2 scroll-smooth">
        {lessons.map((lesson, idx) => {
          const isComplete = progress.completedLessons.includes(lesson.id);
          const isCurrent = lesson.id === currentLessonId;
          return (
            <button
              key={lesson.id}
              onClick={() => onSelect(lesson.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg mb-1 flex items-start gap-3 transition-all duration-200 group ${
                isCurrent
                  ? 'bg-neutral-800/80 ring-1 ring-neutral-700'
                  : 'hover:bg-neutral-900'
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isComplete ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : (
                  <Circle className={`w-5 h-5 ${isCurrent ? 'text-neutral-300' : 'text-neutral-600'}`} />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-600 font-mono">{String(idx + 1).padStart(2, '0')}</span>
                  <span className={`w-1.5 h-1.5 rounded-full ${levelDots[lesson.level]}`} />
                  <span className={`text-[10px] uppercase tracking-wider font-semibold ${levelColors[lesson.level]}`}>
                    {lesson.level}
                  </span>
                </div>
                <p className={`text-sm mt-0.5 leading-snug ${isCurrent ? 'text-white font-medium' : 'text-neutral-400 group-hover:text-neutral-200'}`}>
                  {lesson.title}
                </p>
              </div>
            </button>
          );
        })}
      </nav>

      <div className="px-4 py-3 border-t border-neutral-800">
        <button
          onClick={onReset}
          className="w-full flex items-center justify-center gap-2 text-xs text-neutral-500 hover:text-neutral-300 transition-colors py-2 rounded-lg hover:bg-neutral-900"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset all progress
        </button>
      </div>
    </aside>
  );
}
