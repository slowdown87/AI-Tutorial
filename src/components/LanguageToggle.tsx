import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2" role="group" aria-label="语言选择">
      <button
        onClick={() => changeLanguage('zh-CN')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            changeLanguage('zh-CN');
          }
        }}
        className={`px-3 py-1 rounded-md text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
          i18n.language === 'zh-CN'
            ? 'bg-primary-600 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
        aria-pressed={i18n.language === 'zh-CN'}
        role="button"
      >
        中文
      </button>
      <button
        onClick={() => changeLanguage('en-US')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            changeLanguage('en-US');
          }
        }}
        className={`px-3 py-1 rounded-md text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
          i18n.language === 'en-US'
            ? 'bg-primary-600 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
        aria-pressed={i18n.language === 'en-US'}
        role="button"
      >
        English
      </button>
    </div>
  );
};

export default LanguageToggle;
