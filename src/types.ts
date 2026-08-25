export type LessonLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Pro';

export interface Problem {
  id: string;
  prompt: string;
  starterCode: string;
  expectedOutput: string;
  hint: string;
}

export interface MCQ {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface AIQA {
  keywords: string[];
  question: string;
  answer: string;
}

export interface Lesson {
  id: string;
  title: string;
  level: LessonLevel;
  category: string;
  content: string[];
  problems: Problem[];
  mcqs: MCQ[];
  aiQA: AIQA[];
}
