import { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot, User, MessageSquare } from 'lucide-react';
import type { Lesson } from '@/types';

interface AIAssistantProps {
  lesson: Lesson;
}

interface ChatMessage {
  role: 'user' | 'ai';
  text: string;
}

function findAnswer(lesson: Lesson, question: string): string | null {
  const lower = question.toLowerCase();
  let bestMatch: { score: number; answer: string } = { score: 0, answer: '' };

  for (const qa of lesson.aiQA) {
    let score = 0;
    for (const keyword of qa.keywords) {
      if (lower.includes(keyword.toLowerCase())) {
        score += 1;
      }
    }
    if (score > bestMatch.score) {
      bestMatch = { score, answer: qa.answer };
    }
  }

  if (bestMatch.score > 0) return bestMatch.answer;
  return null;
}

function generateContextualAnswer(lesson: Lesson, question: string): string {
  const lower = question.toLowerCase();

  if (lower.includes('example') || lower.includes('show me')) {
    return `Here is a simple example related to ${lesson.title}:\n\nThis lesson covers ${lesson.category}. Try writing and running the practice problems above — they are designed to reinforce the key concepts step by step. If you get stuck, click the Hint button under any problem.`;
  }

  if (lower.includes('why') && (lower.includes('important') || lower.includes('use'))) {
    return `${lesson.title} is important because it is a building block for more advanced Python concepts. The lesson content above explains the reasoning in detail — I recommend re-reading the paragraphs, then trying the practice problems to solidify your understanding.`;
  }

  if (lower.includes('difficult') || lower.includes('hard') || lower.includes('confused') || lower.includes('understand')) {
    return `That is a common sticking point! Let me suggest an approach: re-read the lesson paragraphs above, then try the first practice problem with the Hint visible. The problems are ordered from easiest to hardest, so starting with Q1 and working down helps build understanding gradually.`;
  }

  if (lower.includes('what is') || lower.includes('what does') || lower.includes('explain')) {
    return `Great question! The lesson above covers this in detail. In short: ${lesson.title} is part of ${lesson.category} in Python. The key idea is explained in the lesson paragraphs — I recommend reading them carefully and then trying the practice problems to see it in action.`;
  }

  return `I can help with questions about ${lesson.title}! Try asking about a specific concept from this lesson — for example, "what is a variable?" or "how does this work?" You can also use the Hint button under any practice problem for guidance.`;
}

export function AIAssistant({ lesson }: AIAssistantProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'ai',
      text: `Hi! I am your AI study buddy for "${lesson.title}". Ask me anything about this lesson and I will clear your doubts.`,
    },
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([
      {
        role: 'ai',
        text: `Hi! I am your AI study buddy for "${lesson.title}". Ask me anything about this lesson and I will clear your doubts.`,
      },
    ]);
  }, [lesson.id, lesson.title]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = { role: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    const matched = findAnswer(lesson, trimmed);
    const answerText = matched ?? generateContextualAnswer(lesson, trimmed);

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'ai', text: answerText }]);
    }, 400);
  };

  const suggestedQuestions = lesson.aiQA.slice(0, 3).map((qa) => qa.question);

  return (
    <aside className="w-80 shrink-0 h-screen bg-neutral-950 border-l border-neutral-800 flex flex-col">
      {/* Header */}
      <div className="px-5 py-5 border-b border-neutral-800">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white">AI Study Buddy</h2>
            <p className="text-xs text-neutral-500">Clear your doubts instantly</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div
              className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center ${
                msg.role === 'ai'
                  ? 'bg-gradient-to-br from-emerald-500 to-teal-600'
                  : 'bg-neutral-700'
              }`}
            >
              {msg.role === 'ai' ? (
                <Bot className="w-4 h-4 text-white" />
              ) : (
                <User className="w-4 h-4 text-white" />
              )}
            </div>
            <div
              className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'ai'
                  ? 'bg-neutral-900 text-neutral-200 rounded-tl-sm'
                  : 'bg-emerald-600 text-white rounded-tr-sm'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Suggested questions */}
      {messages.length <= 2 && suggestedQuestions.length > 0 && (
        <div className="px-4 pb-2">
          <p className="text-xs text-neutral-600 mb-2 flex items-center gap-1.5">
            <MessageSquare className="w-3 h-3" />
            Suggested questions
          </p>
          <div className="space-y-1.5">
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => {
                  setInput(q);
                }}
                className="w-full text-left text-xs text-neutral-400 hover:text-emerald-400 px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="px-4 py-4 border-t border-neutral-800">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
            placeholder="Ask a doubt..."
            className="flex-1 bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-neutral-200 placeholder-neutral-600 outline-none focus:border-emerald-500/50 transition-colors"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-10 h-10 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors shrink-0"
          >
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </aside>
  );
}
