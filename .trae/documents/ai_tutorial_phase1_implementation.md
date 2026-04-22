# AI教程项目第一阶段开发指导

## 第一阶段：基础优化

### 1. 性能优化

#### 1.1 路由懒加载

**目标**：减少初始加载时间，提高首屏渲染速度

**实现步骤**：
1. 修改 [App.tsx](file:///workspace/src/App.tsx) 文件
2. 使用 `React.lazy` 和 `Suspense` 实现路由懒加载
3. 添加加载状态组件

**代码实现**：
```typescript
// src/App.tsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

// 懒加载Chapter组件
const Chapter = React.lazy(() => import('./pages/Chapter'));

// 加载状态组件
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-2xl font-semibold text-gray-600">加载中...</div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router basename="/AI-Tutorial">
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chapter/:id" element={<Chapter />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
```

#### 1.2 图片优化

**目标**：减少图片加载时间，提高页面性能

**实现步骤**：
1. 创建图片优化组件
2. 实现响应式图片和懒加载

**代码实现**：
```typescript
// src/components/ResponsiveImage.tsx
import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  [key: string]: any;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, alt, className = '', ...props }) => {
  // 生成WebP格式的图片路径
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img 
        src={src} 
        alt={alt} 
        loading="lazy" 
        className={`w-full h-auto ${className}`} 
        {...props} 
      />
    </picture>
  );
};

export default ResponsiveImage;
```

**使用方式**：
```typescript
// 在需要使用图片的地方
import ResponsiveImage from './components/ResponsiveImage';

// 替换原来的img标签
<ResponsiveImage 
  src="https://example.com/image.jpg" 
  alt="示例图片" 
  className="rounded-lg shadow-sm"
/>
```

#### 1.3 构建优化

**目标**：优化生产构建，减少包大小

**实现步骤**：
1. 修改 [vite.config.ts](file:///workspace/vite.config.ts) 文件
2. 添加构建优化配置

**代码实现**：
```typescript
// src/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          lucide: ['lucide-react']
        }
      }
    }
  },
  base: '/AI-Tutorial/'
})
```

### 2. 用户体验改善

#### 2.1 搜索功能

**目标**：添加教程内容搜索功能，提高用户查找内容的效率

**实现步骤**：
1. 安装搜索库 Fuse.js
2. 创建搜索组件
3. 集成到首页

**代码实现**：
1. 安装依赖：
```bash
npm install fuse.js
```

2. 创建搜索组件：
```typescript
// src/components/Search.tsx
import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import Fuse from 'fuse.js';
import { chapters } from '../data/chapters';
import { Link } from 'react-router-dom';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (query.length > 2) {
      // 准备搜索数据
      const searchData = chapters.flatMap(chapter => [
        {
          id: chapter.id,
          title: chapter.title,
          description: chapter.description,
          type: 'chapter',
          path: `/chapter/${chapter.id}`
        },
        ...chapter.sections.map(section => ({
          id: section.id,
          title: section.title,
          content: section.content.substring(0, 100) + '...',
          type: 'section',
          path: `/chapter/${chapter.id}`,
          chapterTitle: chapter.title
        }))
      ]);

      // 配置Fuse.js
      const fuse = new Fuse(searchData, {
        keys: ['title', 'description', 'content'],
        threshold: 0.4
      });

      // 执行搜索
      const searchResults = fuse.search(query);
      setResults(searchResults.map(result => result.item));
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  }, [query]);

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setShowResults(false);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          placeholder="搜索教程内容..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          onFocus={() => query.length > 2 && setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
        />
        <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {showResults && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-lg rounded-lg z-50 max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <Link
              key={index}
              to={result.path}
              className="block px-4 py-2 hover:bg-gray-100 border-b last:border-b-0"
              onClick={() => setShowResults(false)}
            >
              <div className="text-sm font-medium text-gray-900">{result.title}</div>
              {result.chapterTitle && (
                <div className="text-xs text-gray-500">{result.chapterTitle}</div>
              )}
              {result.description && (
                <div className="text-xs text-gray-600 mt-1">{result.description}</div>
              )}
              {result.content && (
                <div className="text-xs text-gray-600 mt-1 line-clamp-2">{result.content}</div>
              )}
            </Link>
          ))}
        </div>
      )}

      {showResults && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-lg rounded-lg z-50 p-4">
          <div className="text-sm text-gray-500">未找到匹配内容</div>
        </div>
      )}
    </div>
  );
};

export default Search;
```

3. 添加到Header组件：
```typescript
// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';
import Search from './Search';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">AI零基础教程</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Search />
            <Link to="/" className="text-gray-600 hover:text-primary-600 font-medium">
              首页
            </Link>
            <Link to="/chapter/1" className="text-gray-600 hover:text-primary-600 font-medium">
              开始学习
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
```

#### 2.2 主题切换

**目标**：支持浅色/深色模式，提高用户体验

**实现步骤**：
1. 创建主题上下文
2. 实现主题切换组件
3. 添加到Header组件
4. 配置Tailwind CSS深色模式

**代码实现**：
1. 创建主题上下文：
```typescript
// src/contexts/ThemeContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {}
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

2. 创建主题切换按钮：
```typescript
// src/components/ThemeToggle.tsx
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={theme === 'light' ? '切换到深色模式' : '切换到浅色模式'}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-gray-600" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
```

3. 更新App.tsx以使用ThemeProvider：
```typescript
// src/App.tsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { ThemeProvider } from './contexts/ThemeContext';

// 懒加载Chapter组件
const Chapter = React.lazy(() => import('./pages/Chapter'));

// 加载状态组件
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-2xl font-semibold text-gray-600 dark:text-gray-300">加载中...</div>
  </div>
);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router basename="/AI-Tutorial">
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100 flex flex-col">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chapter/:id" element={<Chapter />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
```

4. 更新Header组件以添加主题切换按钮：
```typescript
// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';
import Search from './Search';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">AI零基础教程</span>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Search />
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 font-medium">
              首页
            </Link>
            <Link to="/chapter/1" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 font-medium">
              开始学习
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
```

5. 配置Tailwind CSS：
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
}
```

#### 2.3 进度保存

**目标**：使用localStorage保存学习进度，提高用户体验

**实现步骤**：
1. 创建进度保存钩子
2. 在Chapter组件中使用

**代码实现**：
1. 创建进度保存钩子：
```typescript
// src/hooks/useProgress.ts
import { useState, useEffect } from 'react';

export const useProgress = (chapterId: number, sectionIndex: number) => {
  const [progress, setProgress] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('ai-tutorial-progress');
    return saved ? JSON.parse(saved) : {};
  });

  // 更新进度
  const updateProgress = (chapterId: number, sectionIndex: number) => {
    const newProgress = {
      ...progress,
      [chapterId]: Math.max(progress[chapterId] || 0, sectionIndex)
    };
    setProgress(newProgress);
    localStorage.setItem('ai-tutorial-progress', JSON.stringify(newProgress));
  };

  // 当章节或小节变化时更新进度
  useEffect(() => {
    updateProgress(chapterId, sectionIndex);
  }, [chapterId, sectionIndex]);

  // 获取章节的学习进度
  const getChapterProgress = (chapterId: number) => {
    return progress[chapterId] || 0;
  };

  // 计算总体进度百分比
  const getOverallProgress = (totalChapters: number, sectionsPerChapter: number) => {
    let completedSections = 0;
    let totalSections = totalChapters * sectionsPerChapter;

    for (let i = 1; i <= totalChapters; i++) {
      completedSections += Math.min(progress[i] || 0, sectionsPerChapter - 1) + 1;
    }

    return Math.round((completedSections / totalSections) * 100);
  };

  return {
    progress,
    updateProgress,
    getChapterProgress,
    getOverallProgress
  };
};
```

2. 在Chapter组件中使用：
```typescript
// src/pages/Chapter.tsx
import React, { useState, useEffect } from 'react';
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
import { chapters, getChapterById } from '../data/chapters';
import { useProgress } from '../hooks/useProgress';

const Chapter: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const chapterId = parseInt(id || '1');
  const chapter = getChapterById(chapterId);
  
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTableOfContentsOpen, setMobileTableOfContentsOpen] = useState(true);
  
  // 使用进度保存钩子
  const { getChapterProgress } = useProgress(chapterId, currentSectionIndex);
  
  // 页面加载或切换小节时自动滚动到顶部
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSectionIndex, chapterId]);
  
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
  const isLastChapter = chapterId >= chapters.length;
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
              {chapters.map((ch) => (
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
                  {chapter.sections.map((section, index) => {
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

export default Chapter;
```

### 3. 部署优化

#### 3.1 CDN配置和缓存策略

**目标**：优化GitHub Pages的CDN和缓存策略，提高加载速度

**实现步骤**：
1. 创建GitHub Pages配置文件
2. 优化缓存策略

**代码实现**：
1. 创建GitHub Pages配置文件：
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - master
  workflow_dispatch:

permissions:
  contents: write
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          publish_branch: gh-pages
          cname: slowdown87.github.io
          enable_jekyll: false
```

2. 优化index.html中的缓存策略：
```html
<!-- index.html -->
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/AI-Tutorial/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="AI零基础教程 - 从入门到精通" />
    <meta name="keywords" content="AI, 人工智能, 教程, 零基础, 入门" />
    <meta name="author" content="AI Tutorial Team" />
    <title>AI零基础教程 - 从入门到精通</title>
    <link rel="canonical" href="https://slowdown87.github.io/AI-Tutorial/" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/AI-Tutorial/src/main.tsx"></script>
  </body>
</html>
```

#### 3.2 SEO优化

**目标**：提高网站在搜索引擎中的排名

**实现步骤**：
1. 添加meta标签
2. 创建sitemap.xml
3. 创建robots.txt

**代码实现**：
1. 创建sitemap.xml：
```xml
<!-- public/sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://slowdown87.github.io/AI-Tutorial/</loc>
    <lastmod>2026-04-21</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://slowdown87.github.io/AI-Tutorial/chapter/1</loc>
    <lastmod>2026-04-21</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://slowdown87.github.io/AI-Tutorial/chapter/2</loc>
    <lastmod>2026-04-21</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://slowdown87.github.io/AI-Tutorial/chapter/3</loc>
    <lastmod>2026-04-21</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://slowdown87.github.io/AI-Tutorial/chapter/4</loc>
    <lastmod>2026-04-21</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://slowdown87.github.io/AI-Tutorial/chapter/5</loc>
    <lastmod>2026-04-21</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://slowdown87.github.io/AI-Tutorial/chapter/6</loc>
    <lastmod>2026-04-21</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://slowdown87.github.io/AI-Tutorial/chapter/7</loc>
    <lastmod>2026-04-21</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://slowdown87.github.io/AI-Tutorial/chapter/8</loc>
    <lastmod>2026-04-21</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://slowdown87.github.io/AI-Tutorial/chapter/9</loc>
    <lastmod>2026-04-21</lastmod>
    <priority>0.9</priority>
  </url>
</urlset>
```

2. 创建robots.txt：
```
# public/robots.txt
User-agent: *
Allow: /

Sitemap: https://slowdown87.github.io/AI-Tutorial/sitemap.xml
```

3. 确保public目录存在：
```bash
mkdir -p public
cp sitemap.xml public/
cp robots.txt public/
```

## 4. 测试和验证

### 4.1 性能测试

**目标**：验证性能优化效果

**测试步骤**：
1. 使用Lighthouse测试性能
2. 验证首屏加载时间
3. 检查代码分割效果

**测试命令**：
```bash
# 构建项目
npm run build

# 预览构建结果
npm run preview

# 使用Lighthouse测试（在浏览器中访问）
# https://developers.google.com/speed/pagespeed/insights/
```

### 4.2 功能测试

**目标**：验证所有新功能是否正常工作

**测试项目**：
1. 路由懒加载：验证页面加载时的加载状态
2. 图片优化：验证图片是否正确加载
3. 搜索功能：验证搜索结果是否准确
4. 主题切换：验证浅色/深色模式是否正常切换
5. 进度保存：验证学习进度是否正确保存

### 4.3 部署测试

**目标**：验证部署是否成功

**测试步骤**：
1. 推送到GitHub触发自动部署
2. 访问部署后的网站
3. 验证所有功能是否正常

## 5. 预期成果

### 5.1 性能提升
- 页面加载时间减少50%
- 首屏渲染时间减少60%
- 代码包大小减少30%

### 5.2 用户体验改善
- 支持深色模式
- 学习进度自动保存
- 内容搜索功能
- 响应式设计优化

### 5.3 部署优化
- CDN配置优化
- 缓存策略实施
- SEO优化

## 6. 风险评估

### 6.1 技术风险
- **依赖管理**：新增依赖可能引入安全漏洞
- **性能回归**：某些优化可能导致性能回归
- **兼容性**：新功能可能不兼容旧浏览器

### 6.2 部署风险
- **构建失败**：配置变更可能导致构建失败
- **部署延迟**：GitHub Actions可能出现部署延迟

### 6.3 风险应对策略
- **依赖管理**：使用npm audit定期检查依赖安全
- **性能监控**：使用Lighthouse定期测试性能
- **兼容性测试**：在主流浏览器中测试
- **部署监控**：设置部署状态通知

## 7. 结论

第一阶段的基础优化将显著提升AI教程项目的性能、用户体验和部署效果。通过实施路由懒加载、图片优化、搜索功能、主题切换、进度保存和部署优化等措施，项目将变得更加专业、用户友好和高效。

建议按照本指导文件的步骤逐步实施，确保每个功能都能正确工作，然后再进行下一阶段的功能增强。