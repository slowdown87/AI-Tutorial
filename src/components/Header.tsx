import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">AI零基础教程</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-primary-600 font-medium">
              首页
            </Link>
            <Link to="/chapter/1" className="text-gray-600 hover:text-primary-600 font-medium">
              开始学习
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
