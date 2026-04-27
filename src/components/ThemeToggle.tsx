import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      }}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
      aria-label={isDarkMode ? '切换到浅色模式' : '切换到深色模式'}
      role="switch"
      aria-checked={isDarkMode}
      title={isDarkMode ? '切换到浅色模式' : '切换到深色模式'}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-gray-200" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5 text-gray-700" aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeToggle;
