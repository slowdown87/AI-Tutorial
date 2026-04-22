import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { ThemeProvider } from './contexts/ThemeContext';

// 懒加载组件
const Chapter = React.lazy(() => import('./pages/Chapter'));
const QuizPracticeExample = React.lazy(() => import('./pages/QuizPracticeExample'));

// 加载状态组件
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-2xl font-semibold text-gray-600 dark:text-gray-400">加载中...</div>
  </div>
);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router basename="/AI-Tutorial">
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chapter/:id" element={<Chapter />} />
              <Route path="/quiz-practice" element={<QuizPracticeExample />} />
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
