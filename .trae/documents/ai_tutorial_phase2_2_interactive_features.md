# AI教程项目 - 第二阶段第二子阶段：交互功能

## 1. 概述

本开发指导文件详细说明如何实现AI教程项目的交互功能，作为第二阶段的第二个子阶段。通过集成代码编辑器和添加练习测验功能，将显著提升用户的学习体验和参与度。

## 2. 目标

- 集成代码编辑器，支持代码编辑和执行
- 添加互动练习和测验功能
- 实现练习结果的保存和反馈
- 增强用户参与度和学习效果

## 3. 技术栈

- React 18 + TypeScript
- CodeMirror 6 (代码编辑器)
- @codemirror/lang-javascript (JavaScript语言支持)
- @codemirror/theme-one-dark (暗色主题支持)
- zustand (状态管理)

## 4. 实施步骤

### 4.1 集成代码编辑器

#### 4.1.1 安装依赖

```bash
npm install @codemirror/basic-setup @codemirror/lang-javascript @codemirror/theme-one-dark codemirror
```

#### 4.1.2 创建代码编辑器组件

1. 创建 `src/components/CodeEditor.tsx` 文件：

```tsx
import React, { useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap, lineNumbers, highlightActiveLineGutter, highlightSpecialChars, drawSelection, dropCursor, rectangularSelection, crosshairCursor, highlightActiveLine, highlightSelectionMatches } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language?: string;
  readOnly?: boolean;
  className?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  value,
  onChange,
  language = 'javascript',
  readOnly = false,
  className = '',
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const startState = EditorState.create({
      doc: value,
      extensions: [
        lineNumbers(),
        highlightActiveLineGutter(),
        highlightSpecialChars(),
        history(),
        drawSelection(),
        dropCursor(),
        EditorState.allowMultipleSelections.of(true),
        rectangularSelection(),
        crosshairCursor(),
        highlightActiveLine(),
        highlightSelectionMatches(),
        keymap.of([...defaultKeymap, ...historyKeymap]),
        javascript(),
        oneDark,
        EditorState.readOnly.of(readOnly),
        EditorView.updateListener.of((update) => {
          if (update.changes) {
            onChange(update.state.doc.toString());
          }
        }),
      ],
    });

    const view = new EditorView({
      state: startState,
      parent: editorRef.current,
    });

    viewRef.current = view;

    return () => {
      view.destroy();
    };
  }, [language, readOnly]);

  useEffect(() => {
    if (viewRef.current && viewRef.current.state.doc.toString() !== value) {
      viewRef.current.dispatch({
        changes: {
          from: 0,
          to: viewRef.current.state.doc.length,
          insert: value,
        },
      });
    }
  }, [value]);

  return (
    <div
      ref={editorRef}
      className={`w-full h-80 border rounded-md overflow-hidden ${className}`}
    />
  );
};

export default CodeEditor;
```

2. 创建代码执行组件 `src/components/CodeRunner.tsx`：

```tsx
import React, { useState } from 'react';
import CodeEditor from './CodeEditor';
import { Play, Stop, Copy } from 'lucide-react';

interface CodeRunnerProps {
  initialCode?: string;
  title?: string;
  description?: string;
}

const CodeRunner: React.FC<CodeRunnerProps> = ({
  initialCode = 'console.log("Hello, AI World!");',
  title = '代码示例',
  description = '在下面的编辑器中编写和运行代码',
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setOutput('');

    try {
      // 捕获console.log输出
      const originalConsoleLog = console.log;
      const logs: string[] = [];

      console.log = (...args) => {
        logs.push(args.map(arg => JSON.stringify(arg)).join(' '));
        originalConsoleLog(...args);
      };

      // 执行代码
      eval(code);

      // 恢复原始console.log
      console.log = originalConsoleLog;

      setOutput(logs.join('\n'));
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsRunning(false);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="w-full p-4 border rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          {description && <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={copyCode}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            title="复制代码"
          >
            <Copy size={18} />
          </button>
          <button
            onClick={runCode}
            disabled={isRunning}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
          >
            {isRunning ? (
              <>
                <Stop size={16} className="mr-2" />
                运行中...
              </>
            ) : (
              <>
                <Play size={16} className="mr-2" />
                运行代码
              </>
            )}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm font-medium mb-2">代码编辑器</h4>
          <CodeEditor value={code} onChange={setCode} />
        </div>
        <div>
          <h4 className="text-sm font-medium mb-2">输出结果</h4>
          <div className="w-full h-80 p-4 bg-gray-100 dark:bg-gray-800 rounded-md overflow-auto font-mono text-sm">
            {output || '运行代码查看输出...'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeRunner;
```

### 4.2 练习和测验功能

#### 4.2.1 安装状态管理依赖

```bash
npm install zustand
```

#### 4.2.2 创建练习数据结构

1. 创建 `src/data/exercises.ts` 文件：

```tsx
export interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
}

export interface Exercise {
  id: string;
  chapterId: string;
  sectionId: string;
  title: string;
  description: string;
  questions: Question[];
}

export const exercises: Exercise[] = [
  {
    id: 'ex-1-1',
    chapterId: '1',
    sectionId: '1',
    title: 'AI基础概念测试',
    description: '测试你对AI基础概念的理解',
    questions: [
      {
        id: 'q1',
        text: '下列哪项不是AI的主要类型？',
        type: 'multiple-choice',
        options: ['弱人工智能', '强人工智能', '超人工智能', '人工神经网络'],
        correctAnswer: '人工神经网络',
        explanation: '人工神经网络是AI的一种实现方法，不是AI的类型。',
      },
      {
        id: 'q2',
        text: '强人工智能是指具有与人类相当或超越人类智能的AI系统。',
        type: 'true-false',
        correctAnswer: 'true',
        explanation: '强人工智能的定义就是具有与人类相当或超越人类智能的AI系统。',
      },
      {
        id: 'q3',
        text: 'AI的发展历史可以分为哪几个阶段？',
        type: 'short-answer',
        correctAnswer: ['诞生期', '发展期', '低谷期', '复苏期', '爆发期'],
        explanation: 'AI的发展历史通常分为这五个阶段。',
      },
    ],
  },
  // 更多练习...
];

export const getExercisesByChapter = (chapterId: string): Exercise[] => {
  return exercises.filter(exercise => exercise.chapterId === chapterId);
};

export const getExerciseById = (id: string): Exercise | undefined => {
  return exercises.find(exercise => exercise.id === id);
};
```

#### 4.2.3 创建练习组件

1. 创建 `src/components/Exercise.tsx` 文件：

```tsx
import React, { useState } from 'react';
import { Exercise as ExerciseType, Question } from '../data/exercises';
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react';

interface ExerciseProps {
  exercise: ExerciseType;
  onComplete?: (score: number, total: number) => void;
}

const Exercise: React.FC<ExerciseProps> = ({ exercise, onComplete }) => {
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [submitted, setSubmitted] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());

  const handleAnswerChange = (questionId: string, answer: string | string[]) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    if (onComplete) {
      const score = exercise.questions.filter(q => {
        const userAnswer = answers[q.id];
        if (!userAnswer) return false;
        
        if (q.type === 'short-answer' && Array.isArray(q.correctAnswer)) {
          return Array.isArray(userAnswer) && q.correctAnswer.every(ans => userAnswer.includes(ans));
        }
        
        return userAnswer === q.correctAnswer;
      }).length;
      onComplete(score, exercise.questions.length);
    }
  };

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const renderQuestion = (question: Question) => {
    const userAnswer = answers[question.id];
    const isCorrect = submitted && {
      'multiple-choice': userAnswer === question.correctAnswer,
      'true-false': userAnswer === question.correctAnswer,
      'short-answer': Array.isArray(question.correctAnswer) && 
        Array.isArray(userAnswer) && 
        question.correctAnswer.every(ans => userAnswer.includes(ans)),
    }[question.type];

    return (
      <div key={question.id} className="mb-6 p-4 border rounded-lg">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleQuestion(question.id)}
        >
          <h4 className="font-medium">{question.text}</h4>
          {expandedQuestions.has(question.id) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
        
        {expandedQuestions.has(question.id) && (
          <div className="mt-4">
            {question.type === 'multiple-choice' && question.options && (
              <div className="space-y-2">
                {question.options.map((option, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="radio"
                      id={`${question.id}-option-${index}`}
                      name={question.id}
                      value={option}
                      checked={userAnswer === option}
                      onChange={() => handleAnswerChange(question.id, option)}
                      disabled={submitted}
                      className="mr-2"
                    />
                    <label 
                      htmlFor={`${question.id}-option-${index}`}
                      className={`cursor-pointer ${submitted && {
                        [question.correctAnswer as string]: 'text-green-600 dark:text-green-400',
                        [option]: userAnswer === option && userAnswer !== question.correctAnswer ? 'text-red-600 dark:text-red-400' : '',
                      }[option]}`}
                    >
                      {option}
                    </label>
                    {submitted && option === question.correctAnswer && (
                      <Check size={16} className="ml-2 text-green-600" />
                    )}
                    {submitted && userAnswer === option && userAnswer !== question.correctAnswer && (
                      <X size={16} className="ml-2 text-red-600" />
                    )}
                  </div>
                ))}
              </div>
            )}

            {question.type === 'true-false' && (
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id={`${question.id}-true`}
                    name={question.id}
                    value="true"
                    checked={userAnswer === 'true'}
                    onChange={() => handleAnswerChange(question.id, 'true')}
                    disabled={submitted}
                    className="mr-2"
                  />
                  <label 
                    htmlFor={`${question.id}-true`}
                    className={`cursor-pointer ${submitted && {
                      'true': userAnswer === 'true' ? (userAnswer === question.correctAnswer ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400') : '',
                    }['true']}`}
                  >
                    正确
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id={`${question.id}-false`}
                    name={question.id}
                    value="false"
                    checked={userAnswer === 'false'}
                    onChange={() => handleAnswerChange(question.id, 'false')}
                    disabled={submitted}
                    className="mr-2"
                  />
                  <label 
                    htmlFor={`${question.id}-false`}
                    className={`cursor-pointer ${submitted && {
                      'false': userAnswer === 'false' ? (userAnswer === question.correctAnswer ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400') : '',
                    }['false']}`}
                  >
                    错误
                  </label>
                </div>
              </div>
            )}

            {question.type === 'short-answer' && (
              <div>
                <textarea
                  value={Array.isArray(userAnswer) ? userAnswer.join(', ') : userAnswer || ''}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value.split(',').map(s => s.trim()))}
                  disabled={submitted}
                  placeholder="请输入答案，多个答案用逗号分隔"
                  className="w-full p-2 border rounded-md resize-none"
                  rows={3}
                />
                {submitted && (
                  <div className="mt-2">
                    <p className="text-sm font-medium">正确答案：{Array.isArray(question.correctAnswer) ? question.correctAnswer.join(', ') : question.correctAnswer}</p>
                  </div>
                )}
              </div>
            )}

            {submitted && question.explanation && (
              <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900 rounded-md text-sm">
                <p><strong>解析：</strong>{question.explanation}</p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full p-6 border rounded-lg">
      <h3 className="text-xl font-medium mb-4">{exercise.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{exercise.description}</p>
      
      <div className="space-y-4">
        {exercise.questions.map(renderQuestion)}
      </div>
      
      <div className="mt-8">
        <button
          onClick={handleSubmit}
          disabled={submitted}
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          {submitted ? '已提交' : '提交答案'}
        </button>
      </div>
    </div>
  );
};

export default Exercise;
```

#### 4.2.4 创建练习状态管理

1. 创建 `src/store/exerciseStore.ts` 文件：

```tsx
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ExerciseState {
  completedExercises: Record<string, {
    score: number;
    total: number;
    completedAt: number;
  }>;
  addCompletedExercise: (exerciseId: string, score: number, total: number) => void;
  getExerciseResult: (exerciseId: string) => {
    score: number;
    total: number;
    completedAt: number;
  } | undefined;
  resetResults: () => void;
}

export const useExerciseStore = create<ExerciseState>()(
  persist(
    (set, get) => ({
      completedExercises: {},
      addCompletedExercise: (exerciseId, score, total) => {
        set((state) => ({
          completedExercises: {
            ...state.completedExercises,
            [exerciseId]: {
              score,
              total,
              completedAt: Date.now(),
            },
          },
        }));
      },
      getExerciseResult: (exerciseId) => {
        return get().completedExercises[exerciseId];
      },
      resetResults: () => {
        set({ completedExercises: {} });
      },
    }),
    {
      name: 'exercise-storage',
    }
  )
);
```

### 4.3 在章节页面中集成交互功能

1. 更新 `src/pages/Chapter.tsx` 文件：

```tsx
import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { chapters, getChapterById } from '../data/chapters';
import CodeRunner from '../components/CodeRunner';
import Exercise from '../components/Exercise';
import { getExercisesByChapter } from '../data/exercises';
import { useExerciseStore } from '../store/exerciseStore';
import { Menu, X, ChevronLeft, ChevronRight, BookOpen, Code, PenTool } from 'lucide-react';

const Chapter: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const chapter = getChapterById(id || '1');
  const [activeSectionId, setActiveSectionId] = useState<string>(location.search?.split('section=')[1] || chapter?.sections[0]?.id || '');
  const [menuOpen, setMenuOpen] = useState(false);
  const exercises = getExercisesByChapter(id || '1');
  const addCompletedExercise = useExerciseStore((state) => state.addCompletedExercise);
  const getExerciseResult = useExerciseStore((state) => state.getExerciseResult);

  // 其他现有代码...

  const handleExerciseComplete = (exerciseId: string, score: number, total: number) => {
    addCompletedExercise(exerciseId, score, total);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 现有导航代码... */}
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 现有侧边栏代码... */}
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-6">{chapter?.title}</h1>
            
            {chapter?.sections.map((section) => (
              <section 
                key={section.id}
                id={section.id}
                className={`mb-12 ${activeSectionId === section.id ? 'block' : 'hidden'}`}
              >
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <div className="prose dark:prose-invert max-w-none">
                  {section.content}
                </div>
                
                {/* 集成代码示例 */}
                {section.id === '2' && (
                  <div className="mt-8">
                    <CodeRunner
                      title="大语言模型API调用示例"
                      description="使用JavaScript调用大语言模型API"
                      initialCode={`// 示例：调用OpenAI API
const apiKey = 'your-api-key';
const prompt = '解释什么是人工智能';

fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': \`Bearer \${apiKey}\`
  },
  body: JSON.stringify({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7
  })
})
.then(response => response.json())
.then(data => {
  console.log(data.choices[0].message.content);
})
.catch(error => {
  console.error('Error:', error);
});`}
                    />
                  </div>
                )}
                
                {/* 集成练习 */}
                {exercises.filter(ex => ex.sectionId === section.id).map((exercise) => {
                  const result = getExerciseResult(exercise.id);
                  return (
                    <div key={exercise.id} className="mt-8">
                      {result && (
                        <div className="mb-4 p-3 bg-green-50 dark:bg-green-900 rounded-md">
                          <p className="text-sm font-medium">
                            已完成：{result.score}/{result.total} 分
                          </p>
                        </div>
                      )}
                      <Exercise 
                        exercise={exercise} 
                        onComplete={(score, total) => handleExerciseComplete(exercise.id, score, total)}
                      />
                    </div>
                  );
                })}
              </section>
            ))}
            
            {/* 现有导航按钮代码... */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chapter;
```

## 5. 测试步骤

### 5.1 代码编辑器测试

1. 启动开发服务器：
   ```bash
   npm run dev
   ```

2. 打开浏览器并访问 `http://localhost:5173/AI-Tutorial/`

3. 导航到包含代码示例的章节（如第二章）

4. 测试代码编辑器的功能：
   - 编辑代码
   - 运行代码
   - 查看输出
   - 复制代码

5. 验证代码编辑器在不同主题下的显示效果

### 5.2 练习功能测试

1. 导航到包含练习的章节

2. 测试练习功能：
   - 展开/折叠问题
   - 选择答案
   - 提交答案
   - 查看结果和解析

3. 测试练习结果的保存功能：
   - 刷新页面
   - 验证练习结果是否仍然显示

4. 测试不同类型的问题：
   - 选择题
   - 判断题
   - 简答题

## 6. 常见问题及解决方案

### 6.1 代码编辑器问题

**问题**：代码编辑器无法正常加载或运行
**解决方案**：
- 检查依赖是否正确安装
- 验证CodeMirror配置是否正确
- 确保浏览器支持所需的JavaScript特性

### 6.2 练习功能问题

**问题**：练习结果不保存或显示错误
**解决方案**：
- 检查zustand状态管理是否正确配置
- 验证localStorage是否正常工作
- 检查练习数据结构是否正确

### 6.3 性能问题

**问题**：包含代码编辑器和练习的页面加载缓慢
**解决方案**：
- 实现代码编辑器的懒加载
- 优化练习组件的渲染
- 考虑使用虚拟滚动处理大量练习

## 7. 总结

本开发指导文件详细说明了如何实现AI教程项目的交互功能。通过集成代码编辑器和添加练习测验功能，项目将获得以下好处：

- **代码编辑器**：用户可以直接在教程中编写和运行代码，加深对概念的理解
- **练习测验**：用户可以通过互动练习巩固所学知识，获得即时反馈
- **结果保存**：练习结果自动保存，方便用户跟踪学习进度
- **增强参与度**：互动功能提高用户参与度和学习效果

这些交互功能将使AI教程成为一个更加沉浸式、实用的学习平台，帮助用户更好地掌握AI相关知识和技能。