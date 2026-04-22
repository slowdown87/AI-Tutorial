# AI教程项目第二阶段开发指导

## 第二阶段：功能增强

### 1. 内容管理

#### 1.1 内容从Markdown文件加载

**目标**：将教程内容从TypeScript文件分离到Markdown文件，便于内容维护和更新。

**实现步骤**：
1. 创建content目录结构
2. 将现有章节内容转换为Markdown格式
3. 实现Markdown内容加载和解析
4. 集成到现有路由系统

**代码实现**：
1. 创建content目录结构：
```bash
mkdir -p src/content/chapters
```

2. 将章节内容转换为Markdown格式示例（chapter1.md）：
```markdown
---
id: 1
title: AI入门 - 了解AI是什么
description: 从零开始，轻松了解AI的基本概念和发展历史
icon: brain
---

## AI的基本概念

人工智能（Artificial Intelligence，简称AI）是指由人制造出来的系统所表现出来的智能。通常AI是指通过普通计算机程序实现的人类智能技术。

### AI的发展历史

1. **1950年代**：AI概念提出
2. **1960-1970年代**：AI早期探索
3. **1980年代**：专家系统兴起
4. **2000年至今**：机器学习和深度学习爆发

### AI的主要类型

- **弱AI（Narrow AI）**：专注于特定任务的AI
- **强AI（General AI）**：具备人类所有智能能力的AI（尚未实现）
- **超AI（Super AI）**：超越人类所有能力的AI（理论概念）

## 如何开始学习AI

1. 了解编程基础
2. 学习机器学习基本概念
3. 实践AI工具使用
4. 参与项目实践
```

3. 创建内容加载工具：
```typescript
// src/utils/contentLoader.ts
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import type { Chapter, ChapterSection } from '../data/chapters';

export const loadChapter = async (chapterId: number): Promise<Chapter> => {
  try {
    // 使用动态导入加载Markdown文件
    const mdModule = await import(`../content/chapters/chapter${chapterId}.md`);
    const mdContent = mdModule.default || mdModule;
    
    // 使用gray-matter解析frontmatter
    const { data, content } = matter(mdContent);
    
    // 解析内容小节
    const sections = parseSections(content);
    
    return {
      id: data.id || chapterId,
      title: data.title || '',
      description: data.description || '',
      icon: data.icon || 'brain',
      sections: sections
    };
  } catch (error) {
    console.error(`加载章节 ${chapterId} 失败:`, error);
    // 回退到原有硬编码数据
    const { chapters } = await import('../data/chapters');
    const chapter = chapters.find(ch => ch.id === chapterId);
    return chapter || null;
  }
};

const parseSections = (content: string): ChapterSection[] => {
  const sections: ChapterSection[] = [];
  const lines = content.split('\n');
  
  let currentTitle = '';
  let currentContent: string[] = [];
  let sectionId = 0;
  
  lines.forEach(line => {
    // 检查是否是二级标题（新小节开始）
    if (line.trim().startsWith('## ')) {
      // 如果已有内容，保存当前小节
      if (currentTitle) {
        sections.push({
          id: `${sectionId}`,
          title: currentTitle,
          content: currentContent.join('\n').trim()
        });
        sectionId++;
      }
      // 开始新小节
      currentTitle = line.slice(3).trim();
      currentContent = [line];
    } else if (currentTitle) {
      // 继续当前小节内容
      currentContent.push(line);
    }
  });
  
  // 保存最后一个小节
  if (currentTitle) {
    sections.push({
      id: `section-${sections.length}`,
      title: currentTitle,
      content: currentContent.join('\n').trim()
    });
  }
  
  return sections;
};

export const loadAllChapters = async (): Promise<Chapter[]> => {
  const chapters: Chapter[] = [];
  let chapterId = 1;
  let moreChapters = true;
  
  while (moreChapters) {
    try {
      const chapter = await loadChapter(chapterId);
      chapters.push(chapter);
      chapterId++;
    } catch {
      moreChapters = false;
    }
  }
  
  return chapters;
};
```

4. 更新数据管理文件：
```typescript
// src/data/chapters.ts
import type { Chapter, ChapterSection } from './chapters';

// 保留原有硬编码数据作为fallback
import { chapter1 } from './chapters/chapter1';
import { chapter2 } from './chapters/chapter2';
import { chapter3 } from './chapters/chapter3';
import { chapter4 } from './chapters/chapter4';
import { chapter5 } from './chapters/chapter5';
import { chapter6 } from './chapters/chapter6';
import { chapter7 } from './chapters/chapter7';
import { chapter8 } from './chapters/chapter8';
import { chapter9 } from './chapters/chapter9';

let chapters: Chapter[] = [
  chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8, chapter9
];

let isLoaded = false;

export const getChapterById = async (id: number): Promise<Chapter | null> => {
  await loadChapters();
  return chapters.find(ch => ch.id === id) || null;
};

export const getChapters = async (): Promise<Chapter[]> => {
  await loadChapters();
  return chapters;
};

const loadChapters = async (): Promise<void> => {
  if (isLoaded) return;
  
  try {
    const { loadAllChapters } = await import('../utils/contentLoader');
    const loadedChapters = await loadAllChapters();
    if (loadedChapters.length > 0) {
      chapters = loadedChapters;
    }
    isLoaded = true;
  } catch (error) {
    console.error('加载章节失败:', error);
    // 保持原有数据
  }
};
```

5. 更新Chapter组件支持异步加载：
```typescript
// src/pages/Chapter.tsx
import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Home, 
  Menu,
  X,
  BookOpen,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { getChapters, getChapterById } from '../data/chapters';

const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-2xl font-semibold text-gray-600 dark:text-gray-300">加载中...</div>
  </div>
);

const ChapterContent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const chapterId = parseInt(id || '1');
  
  const [chapter, setChapter] = useState<any>(null);
  const [chaptersList, setChaptersList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTableOfContentsOpen, setMobileTableOfContentsOpen] = useState(true);
  
  // 使用进度保存钩子
  const { getChapterProgress } = useProgress(chapterId, currentSectionIndex);
  
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [chapters, chapterData] = await Promise.all([
          getChapters(),
          getChapterById(chapterId)
        ]);
        setChaptersList(chapters);
        setChapter(chapterData);
      } catch (error) {
        console.error('加载章节数据失败:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [chapterId]);
  
  // 页面加载或切换小节时自动滚动到顶部
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSectionIndex, chapterId]);
  
  if (loading) {
    return <Loading />;
  }
  
  if (!chapter) {
    return (
      <div className="container py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">章节未找到</h2>
        <Link to="/" className="btn-primary inline-flex items-center">
          <Home className="mr-2 h-4 w-4" />
          返回首页
        </Link>
      </div>
    );
  }
  
  const currentSection = chapter.sections[currentSectionIndex];
  const hasPrev = currentSectionIndex > 0;
  const hasNext = currentSectionIndex < chapter.sections.length - 1;
  const isLastChapter = chapterId >= chaptersList.length;
  const isLastSection = !hasNext;
  
  const handlePrev = () => {
    if (hasPrev) {
      setCurrentSectionIndex(prev => prev - 1);
    }
  };
  
  const handleNext = () => {
    if (hasNext) {
      setCurrentSectionIndex(prev => prev + 1);
    } else if (!isLastChapter) {
      navigate(`/chapter/${chapterId + 1}`);
      setCurrentSectionIndex(0);
    }
  };
  
  // 简单的Markdown解析
  const renderContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // 图片
        const imgMatch = line.match(/!\[(.*?)\]\((.*?)\)/);
        if (imgMatch) {
          const alt = imgMatch[1];
          const src = imgMatch[2];
          return (
            <div key={index} className="my-6">
              <img 
                src={src} 
                alt={alt} 
                className="w-full h-auto rounded-lg shadow-sm"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">{alt}</p>
            </div>
          );
        }
        
        // 标题
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">{line.slice(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">{line.slice(4)}</h3>;
        }
        if (line.startsWith('#### ')) {
          return <h4 key={index} className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-4 mb-2">{line.slice(5)}</h4>;
        }
        
        // 列表项
        if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
          return <li key={index} className="ml-6 mb-2 text-gray-700 dark:text-gray-300">{line.trim().slice(2)}</li>;
        }
        if (line.match(/^\d+\.\s/)) {
          return <li key={index} className="ml-6 mb-2 text-gray-700 dark:text-gray-300 list-decimal">{line.trim().replace(/^\d+\.\s/, '')}</li>;
        }
        
        // 分隔线
        if (line.trim() === '---') {
          return <hr key={index} className="my-8 border-gray-200 dark:border-gray-700" />;
        }
        
        // 空行
        if (!line.trim()) {
          return <br key={index} />;
        }
        
        // 普通段落
        return <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">{line}</p>;
      });
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between sticky top-16 z-10">
        <h2 className="font-semibold text-gray-900 dark:text-white truncate">{chapter.title}</h2>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      <div className="container flex flex-col lg:flex-row gap-6 py-8">
        {/* Sidebar */}
        <aside 
          className={`lg:w-72 flex-shrink-0 ${
            mobileMenuOpen ? 'fixed inset-0 bg-white dark:bg-gray-800 z-50 p-4' : 'hidden lg:block'
          }`}
        >
          {mobileMenuOpen && (
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          )}
          
          <div className="lg:sticky lg:top-24">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">章节目录</h3>
            <nav className="space-y-1">
              {chaptersList.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => {
                    navigate(`/chapter/${ch.id}`);
                    setCurrentSectionIndex(0);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    ch.id === chapterId
                      ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 font-medium'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="mr-3">{ch.id}.</span>
                    {ch.title}
                  </div>
                </button>
              ))}
            </nav>
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Link
                to="/"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm"
              >
                <Home className="h-4 w-4 mr-2" />
                返回首页
              </Link>
            </div>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1">
          {/* Mobile Table of Contents - Default Expanded */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setMobileTableOfContentsOpen(!mobileTableOfContentsOpen)}
              className="w-full flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-2"
            >
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-primary-600" />
                <span className="font-semibold text-gray-900 dark:text-white">小节目录</span>
              </div>
              {mobileTableOfContentsOpen ? (
                <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              )}
            </button>
            
            {mobileTableOfContentsOpen && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4">
                <div className="space-y-1">
                  {chapter.sections.map((section: any, index: number) => {
                    const isCompleted = index <= getChapterProgress(chapterId);
                    return (
                      <button
                        key={section.id}
                        onClick={() => setCurrentSectionIndex(index)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          index === currentSectionIndex
                            ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 font-medium'
                            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        <div className="flex items-center">
                          {isCompleted ? (
                            <CheckCircle2 className="h-4 w-4 mr-2 text-success-500" />
                          ) : (
                            <span className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600 mr-3" />
                          )}
                          {section.title}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          
          <article className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{currentSection.title}</h1>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              {renderContent(currentSection.content)}
            </div>
            
            {/* Navigation */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={handlePrev}
                disabled={!hasPrev}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  hasPrev
                    ? 'text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30'
                    : 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="h-5 w-5 mr-2" />
                上一节
              </button>
              
              <button
                onClick={handleNext}
                disabled={!hasNext && isLastChapter}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  (hasNext || !isLastChapter)
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                }`}
              >
                {isLastSection && !isLastChapter ? '下一章' : '下一节'}
                <ChevronRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

const Chapter: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ChapterContent />
    </Suspense>
  );
};

export default Chapter;
```

#### 1.2 多语言支持

**目标**：添加多语言支持，让教程支持中文和英文，便于更多用户访问。

**实现步骤**：
1. 创建语言切换组件
2. 实现内容翻译管理
3. 更新路由支持语言参数

**代码实现**：
1. 创建语言切换组件：
```typescript
// src/components/LanguageSwitch.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLanguage('zh')}
        className={`px-2 py-1 text-sm rounded-md ${
          i18n.language === 'zh' ? 'bg-primary-100 text-primary-700' : 'text-gray-600'
        }`}
      >
        中文
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-2 py-1 text-sm rounded-md ${
          i18n.language === 'en' ? 'bg-primary-100 text-primary-700' : 'text-gray-600'
        }`}
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitch;
```

2. 安装多语言依赖：
```bash
npm install react-i18next i18next i18next-http-backend i18next-browser-languagedetector
```

3. 初始化i18n：
```typescript
// src/i18n/index.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'zh',
    fallbackLng: 'zh',
    supportedLngs: ['zh', 'en'],
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
```

4. 创建翻译文件：
```typescript
// src/locales/zh/common.json
{
  "home": "首页",
  "startLearning": "开始学习",
  "nextSection": "下一节",
  "prevSection": "上一节",
  "nextChapter": "下一章",
  "tableOfContents": "小节目录",
  "chapterList": "章节目录",
  "aiTutorial": "AI零基础教程",
  "searchPlaceholder": "搜索教程内容...",
  "noResults": "未找到匹配内容"
}

// src/locales/en/common.json
{
  "home": "Home",
  "startLearning": "Start Learning",
  "nextSection": "Next Section",
  "prevSection": "Previous Section",
  "nextChapter": "Next Chapter",
  "tableOfContents": "Section Contents",
  "chapterList": "Chapter List",
  "aiTutorial": "AI Tutorial for Beginners",
  "searchPlaceholder": "Search tutorial content...",
  "noResults": "No matching results found"
}
```

### 2. 交互功能

#### 2.1：集成代码编辑器

**目标**：添加交互式代码编辑器，让用户可以直接在浏览器中练习编程。

**实现步骤**：
1. 安装Monaco Editor依赖
2. 创建代码编辑器组件
3. 集成到教程内容中
4. 添加代码执行功能（如果后端支持）

**代码实现**：
1. 安装依赖：
```bash
npm install monaco-editor-react @monaco-editor/loader @monaco-editor/loader-react
```

2. 创建代码编辑器组件：
```typescript
// src/components/CodeEditor.tsx
import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  code: string;
  language?: string;
  height?: string;
  onCodeChange?: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, language = 'python', height = '400px', onCodeChange }) => {
  const [value, setValue] = useState(code);

  const handleEditorChange = (newValue: string | undefined) => {
    if (newValue !== undefined) {
      setValue(newValue);
      if (onCodeChange) {
        onCodeChange(newValue);
      }
    }
  };

  const handleReset = () => {
    setValue(code);
    if (onCodeChange) {
      onCodeChange(code);
    }
  };

  const handleRun = () => {
    // 代码执行功能（可通过API实现）
    alert('代码执行功能：这里可以通过API执行代码');
  };

  return (
    <div className="my-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">代码练习</h3>
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            重置代码
          </button>
          <button
            onClick={handleRun}
            className="px-3 py-1 bg-primary-600 text-white rounded text-sm hover:bg-primary-700"
          >
            运行代码
          </button>
        </div>
      </div>
      <Editor
        height={height}
        language={language}
        value={value}
        onChange={handleEditorChange}
        theme="vs-dark"
        options={{
          fontSize: 14,
          lineNumbers: 'on',
          minimap: { enabled: true },
          scrollBeyondLastLine: false,
          automaticLayout: true
        }}
      />
    </div>
  );
};

export default CodeEditor;
```

3. 在教程内容中嵌入代码编辑器：
```typescript
// 在Markdown内容中使用特殊标记表示代码编辑器
```code-editor
language: python
# 这是一段Python代码
print("Hello, AI!")
```
```

#### 2.2：练习和测验功能

**目标**：添加交互式练习和测验功能，增强学习效果：。

**实现步骤**：
1. 创建练习组件
2. 创建测验组件
3. 实现进度跟踪和分数统计
4. 集成到教程内容中

**代码实现**：
1. 创建练习组件：
```typescript
// src/components/PracticeExercise.tsx
import React, { useState } from 'react';
import { Check, X, RefreshCw } from 'lucide-react';

interface PracticeExerciseProps {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

const PracticeExercise: React.FC<PracticeExerciseProps> = ({ 
  question, 
  options, 
  correctAnswer, 
  explanation 
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelectAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <div className="my-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">练习</h3>
        <button
          onClick={handleReset}
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
        >
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>
      
      <p className="mb-4 text-gray-700 dark:text-gray-300">{question}</p>
      
      <div className="space-y-2 mb-4">
        {options.map((option, index) => {
          let buttonClass = 'w-full text-left p-3 border rounded transition-colors';
          
          if (showResult) {
            if (index === correctAnswer) {
              buttonClass += ' border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200';
            } else if (index === selectedAnswer) {
              buttonClass += ' border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200';
            } else {
              buttonClass += ' border-gray-300 dark:border-gray-600';
            }
          } else if (index === selectedAnswer) {
            buttonClass += ' border-primary-500 bg-primary-50 dark:bg-primary-900/20';
          } else {
            buttonClass += ' border-gray-300 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500';
          }
          
          return (
            <button
              key={index}
              onClick={() => !showResult && handleSelectAnswer(index)}
              disabled={showResult}
              className={buttonClass}
            >
              <div className="flex items-center">
                <span className="font-medium mr-3">{String.fromCharCode(65 + index)}</span>
                <span>{option}</span>
                {showResult && index === correctAnswer && (
                  <Check className="h-5 w-5 text-green-500 ml-auto" />
                )}
                {showResult && index === selectedAnswer && index !== correctAnswer && (
                  <X className="h-5 w-5 text-red-500 ml-auto" />
                )}
              </div>
            </button>
          );
        })}
      </div>
      
      {showResult && explanation && (
        <div className={`p-4 rounded border mt-4 ${
          isCorrect ? 'border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800' : 'border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-800'
        }`}>
          <p className={`font-medium mb-2 ${
            isCorrect ? 'text-green-800 dark:text-green-200' : 'text-yellow-800 dark:text-yellow-200'
          }`}>
            {isCorrect ? '回答正确！' : '答案解析：'}
          </p>
          <p className="text-gray-700 dark:text-gray-300">{explanation}</p>
        </div>
      )}
    </div>
  );
};

export default PracticeExercise;
```

2. 创建测验组件：
```typescript
// src/components/Quiz.tsx
import React, { useState } from 'react';
import { PracticeExercise } from './PracticeExercise';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  questions: QuizQuestion[];
  title: string;
}

const Quiz: React.FC<QuizProps> = ({ questions, title }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleAnswerQuestion = (questionId: number, selectedAnswer: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: selectedAnswer }));
    
    const isCorrect = selectedAnswer === questions[questionId].correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    if (questionId < questions.length - 1) {
      // 500ms延迟后自动跳转
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
      }, 500);
    } else {
      // 最后一题完成
      setCompleted(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setCompleted(false);
    setAnswers({});
  };

  const handleShowResults = () => {
    setCompleted(true);
  };

  if (completed) {
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="my-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title} - 测验结果</h3>
        <div className="text-center py-6">
          <div className="text-4xl font-bold mb-2 text-primary-600">{percentage}%</div>
          <div className="text-lg text-gray-600 dark:text-gray-400">
            你答对了 {score} 题，共 {questions.length} 题
          </div>
          {percentage >= 80 ? (
            <div className="text-green-600 dark:text-green-400 font-semibold mt-2">太棒了！继续保持！</div>
          ) : percentage >= 60 ? (
            <div className="text-yellow-600 dark:text-yellow-400 font-semibold mt-2">做得不错！还可以做得更好。</div>
          ) : (
            <div className="text-red-600 dark:text-red-400 font-semibold mt-2">需要更多练习。</div>
          )}
        </div>
        <div className="mt-6">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">答案回顾</h4>
          <div className="space-y-4">
            {questions.map((question, index) => {
              const userAnswer = answers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={index} className="p-4 border rounded dark:border-gray-700">
                  <h5 className="font-medium mb-2">{index + 1}. {question.question}</h5>
                  <div className="text-sm space-y-1">
                    <p className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                      你的答案：{String.fromCharCode(65 + userAnswer)}. {question.options[userAnswer]}
                    </p>
                    {!isCorrect && (
                      <p className="text-green-600">
                        正确答案：{String.fromCharCode(65 + question.correctAnswer)}. {question.options[question.correctAnswer]}
                      </p>
                    )}
                    <p className="text-gray-600 dark:text-gray-400">
                      {question.explanation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleResetQuiz}
            className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            重新测验
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="my-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          第 {currentQuestion + 1} 题 / 共 {questions.length} 题
        </div>
      </div>
      
      {/* 进度条 */}
      <div className="mb-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="bg-primary-600 h-2 rounded-full transition-all"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
      </div>
      
      <PracticeExercise
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        correctAnswer={questions[currentQuestion].correctAnswer}
        explanation={questions[currentQuestion].explanation}
      />
      
      {currentQuestion === questions.length - 1 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleShowResults}
            className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            查看结果
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
```

### 3. 可访问性

#### 3.1：ARIA标签和语义化HTML

**目标**：添加ARIA属性，提升屏幕阅读器用户体验。

**实现步骤**：
1. 确保HTML元素语义化
2. 添加ARIA标签和属性
3. 实现键盘导航优化

**代码实现**：
1. 更新组件添加ARIA支持：
```typescript
// src/components/ChapterCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, MessageSquare, Edit, BookOpen, ChevronRight } from 'lucide-react';
import { Chapter } from '../data/chapters';

interface ChapterCardProps {
  chapter: Chapter;
}

const IconMap = {
  brain: Brain,
  'message-square': MessageSquare,
  edit: Edit,
  'book-open': BookOpen
};

const ChapterCard: React.FC<ChapterCardProps> = ({ chapter }) => {
  const IconComponent = IconMap[chapter.icon as keyof typeof IconMap] || Brain;
  
  return (
    <Link 
      to={`/chapter/${chapter.id}`}
      className="card group"
      role="link"
      aria-label={`进入${chapter.title}章节`}
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          window.location.href = `/chapter/${chapter.id}`;
        }
      }}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
            <IconComponent className="h-6 w-6 text-primary-600" aria-hidden="true" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
            {chapter.id}. {chapter.title}
          </h3>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            {chapter.description}
          </p>
          <div className="mt-3 flex items-center text-primary-600 font-medium text-sm">
            <span>开始学习</span>
            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChapterCard;
```

2. 实现键盘导航优化：
```typescript
// src/hooks/useKeyboardNavigation.ts
import { useEffect, useRef } from 'react';

export const useKeyboardNavigation = () => {
  const focusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 处理Tab键导航
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
      
      // 处理Home/End键导航
      if (e.key === 'Home') {
        const firstFocusable = document.querySelector<HTMLElement>(
          'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable?.focus();
      }
      
      if (e.key === 'End') {
        const focusableElements = document.querySelectorAll<HTMLElement>(
          'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const lastFocusable = focusableElements[focusableElements.length - 1];
        lastFocusable?.focus();
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return focusRef;
};
```

#### 3.2：对比度检查

**目标**：确保文本和背景之间有足够的对比度。

**实现步骤**：
1. 使用Tailwind的颜色系统
2. 确保所有文本有足够对比度
3. 添加对比度检查工具

**代码实现**：
1. 更新Tailwind配置确保有适当对比度：
```typescript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
    },
  },
  plugins: [],
};
```

2. 添加对比度检查功能（开发环境）：
```typescript
// src/utils/accessibility.ts
export const checkContrast = (foreground: string, background: string): boolean => {
  // 简化的对比度检查（实际项目中可使用更精确的库）
  const getLuminance = (color: string): number => {
    // 简单实现，仅处理十六进制颜色
    if (color.startsWith('#')) {
      const r = parseInt(color.slice(1, 3), 16) / 255;
      const g = parseInt(color.slice(3, 5), 16) / 255;
      const b = parseInt(color.slice(5, 7), 16) / 255;
      
      const a = [r, g, b].map(v => {
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
      
      return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    }
    return 0.5; // 默认中等亮度
  };
  
  const fgLum = getLuminance(foreground);
  const bgLum = getLuminance(background);
  
  const ratio = (Math.max(fgLum, bgLum) + 0.05) / (Math.min(fgLum, bgLum) + 0.05);
  
  // WCAG AA要求至少4.5:1
  return ratio >= 4.5;
};

export const logAccessibilityIssues = (): void => {
  if (process.env.NODE_ENV !== 'development') return;
  
  console.log('Accessibility Check:');
  
  // 检查所有文本元素
  const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, button, a, span, li');
  textElements.forEach(el => {
    const style = getComputedStyle(el);
    const fgColor = style.color;
    const bgColor = style.backgroundColor;
    
    // 这里仅作为示例，实际实现需要更复杂的颜色解析
    console.log(`Checking ${el.tagName}:`, { fgColor, bgColor });
  });
};
```

## 4. 实施步骤总结

### 阶段2：功能增强

1. **内容管理**：
   - 创建Markdown内容结构
   - 实现内容加载和解析
   - 添加多语言支持

2. **交互功能**：
   - 集成代码编辑器
   - 添加练习和测验
   - 实现进度跟踪

3. **可访问性**：
   - 添加ARIA支持
   - 优化键盘导航
   - 确保对比度达标

## 5. 预期成果

### 功能增强效果：
- 内容可独立于代码维护
- 支持多语言访问
- 交互式学习体验
- 更好的可访问性

### 学习体验改善：
- 代码编辑器直接练习
- 测验和练习系统
- 学习进度完整追踪
- 支持键盘导航和屏幕阅读器

## 6. 风险评估

### 技术风险：
- **Markdown解析**：：复杂内容解析可能有兼容性问题
- **代码编辑器性能**：：在大型内容中可能影响性能
- **多语言内容维护**：：需要确保翻译一致性

### 风险应对策略：
- 使用成熟的Markdown解析库
- 实现代码编辑器懒加载
- 建立内容审核和翻译流程
- 提供内容管理界面
