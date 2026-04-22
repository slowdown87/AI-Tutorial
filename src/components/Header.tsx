import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Brain, Menu, X, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';
import LanguageToggle from './LanguageToggle';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    if (query) {
      // 导航到首页并显示搜索结果
      navigate('/');
      // 这里可以通过localStorage或其他方式传递搜索查询
      localStorage.setItem('searchQuery', query);
    }
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10" role="banner">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md p-1">
            <Brain className="h-8 w-8 text-primary-600" aria-hidden="true" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">AI零基础教程</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4" aria-label="主导航">
            <div className="w-64">
              <SearchBar onSearch={handleSearch} placeholder="搜索教程..." />
            </div>
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md px-2 py-1">
              首页
            </Link>
            <Link to="/chapter/1" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md px-2 py-1">
              开始学习
            </Link>
            <Link to="/quiz-practice" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md px-2 py-1">
              练习与测验
            </Link>
            <LanguageToggle />
            <ThemeToggle />
          </nav>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="搜索"
              aria-expanded={showSearch}
            >
              <Search className="h-6 w-6" aria-hidden="true" />
            </button>
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-4 p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="打开菜单"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Search */}
        {showSearch && (
          <div className="md:hidden p-4 border-t border-gray-200 dark:border-gray-700">
            <SearchBar onSearch={handleSearch} placeholder="搜索教程..." />
          </div>
        )}
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-2 space-y-2" role="navigation" aria-label="移动导航">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              首页
            </Link>
            <Link
              to="/chapter/1"
              className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              开始学习
            </Link>
            <Link
              to="/quiz-practice"
              className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              练习与测验
            </Link>
            <div className="px-3 py-2">
              <LanguageToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
