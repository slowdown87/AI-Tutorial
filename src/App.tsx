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
