import { useState, useCallback } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { LessonView } from '@/components/LessonView';
import { AIAssistant } from '@/components/AIAssistant';
import { curriculum } from '@/curriculum';
import { useProgress } from '@/hooks/useProgress';

function App() {
  const [currentLessonId, setCurrentLessonId] = useState(curriculum[0].id);
  const {
    state,
    markProblemResult,
    markMCQResult,
    markLessonComplete,
    resetProgress,
  } = useProgress();

  const currentLesson = curriculum.find((l) => l.id === currentLessonId) ?? curriculum[0];

  const handleSelect = useCallback((id: string) => {
    setCurrentLessonId(id);
  }, []);

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      <Sidebar
        lessons={curriculum}
        currentLessonId={currentLessonId}
        onSelect={handleSelect}
        progress={state}
        onReset={resetProgress}
      />
      <LessonView
        key={currentLesson.id}
        lesson={currentLesson}
        progress={state}
        onProblemResult={markProblemResult}
        onMCQResult={markMCQResult}
        onLessonComplete={markLessonComplete}
      />
      <AIAssistant lesson={currentLesson} />
    </div>
  );
}

export default App;
