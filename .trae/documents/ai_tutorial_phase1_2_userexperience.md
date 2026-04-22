# AI教程项目第一阶段子阶段2：用户体验基础

## 子阶段2：用户体验基础

### 1. 目标

- 提升用户界面美观度和可用性
- 支持深色模式，适应不同使用环境
- 实现学习进度保存，提升学习连续性
- 优化移动端响应式设计，改善移动用户体验

### 2. 任务清单

| 任务 | 描述 | 优先级 | 预计时间 |
|------|------|--------|----------|
| 主题切换 | 实现浅色/深色模式切换功能 | 高 | 1.5小时 |
| 进度保存 | 实现学习进度本地存储 | 高 | 1小时 |
| 移动端优化 | 改进移动设备响应式布局 | 中 | 1小时 |
| 测试验证 | 验证所有用户体验功能 | 中 | 30分钟 |

### 3. 技术实现

#### 3.1 主题切换

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
          <div className="hidden md:flex items-center space-x-6">
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

#### 3.2 进度保存

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
// src/pages/Chapter.tsx (部分修改)
import { useProgress } from '../hooks/useProgress';

const Chapter: React.FC = () => {
  // ... 其他代码 ...
  
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  // ... 其他状态 ...
  
  // 使用进度保存钩子
  const { getChapterProgress } = useProgress(chapterId, currentSectionIndex);
  
  // ... 其他代码 ...
  
  // 在小节目录中显示进度
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
  
  // ... 其他代码 ...
};
```

#### 3.3 移动端优化

**目标**：改善移动设备上的用户体验

**实现步骤**：
1. 优化移动端导航
2. 改进响应式布局
3. 添加触摸友好的交互元素

**代码实现**：
1. 优化Header组件的移动端导航：
```typescript
// src/components/Header.tsx (添加移动端菜单)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">AI零基础教程</span>
          </Link>
          
          {/* 桌面端导航 */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 font-medium">
              首页
            </Link>
            <Link to="/chapter/1" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 font-medium">
              开始学习
            </Link>
            <ThemeToggle />
          </div>
          
          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* 移动端菜单 */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 px-4 space-y-3">
            <Link 
              to="/" 
              className="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              首页
            </Link>
            <Link 
              to="/chapter/1" 
              className="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              开始学习
            </Link>
            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
```

2. 优化Chapter组件的移动端体验：
```typescript
// src/pages/Chapter.tsx (移动端优化)
// 确保所有按钮和交互元素有足够的触摸区域
// 优化移动端的布局和导航

// 例如，为移动端添加返回顶部按钮
const Chapter: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 其他内容 */}
      
      {/* 返回顶部按钮 */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-primary-600 text-white rounded-full shadow-lg z-50"
          aria-label="返回顶部"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};
```

### 4. 测试与验证

#### 4.1 功能测试

**目标**：确保所有用户体验功能正常工作

**测试项目**：
1. 主题切换：验证浅色/深色模式是否正常切换
2. 进度保存：验证学习进度是否正确保存
3. 移动端优化：验证移动设备上的体验
4. 响应式设计：验证不同屏幕尺寸的显示效果

#### 4.2 兼容性测试

**目标**：确保在不同浏览器和设备上的兼容性

**测试步骤**：
1. 在主流浏览器中测试（Chrome、Firefox、Safari、Edge）
2. 在不同尺寸的移动设备上测试
3. 验证深色模式在不同操作系统中的表现

### 5. 预期成果

- 支持浅色/深色模式切换
- 学习进度自动保存
- 移动端体验优化
- 响应式设计完善

### 6. 风险评估

**技术风险**：
- 深色模式在某些组件中可能有样式问题
- 本地存储在隐私模式下可能不可用
- 移动端优化可能影响桌面端体验

**风险应对策略**：
- 全面测试深色模式的所有组件
- 提供本地存储不可用时的降级方案
- 确保移动端优化不影响桌面端体验

### 7. 实施顺序

1. 实现主题切换功能
2. 配置Tailwind CSS深色模式
3. 实现进度保存功能
4. 优化移动端导航
5. 测试所有功能

### 8. 验收标准

- 深色模式正常工作，所有组件显示正确
- 学习进度在页面刷新后保持
- 移动端导航和布局正常
- 所有功能在主流浏览器中兼容性良好