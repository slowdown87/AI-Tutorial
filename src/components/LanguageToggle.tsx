import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('zh-CN')}
        className={`px-3 py-1 rounded-md text-sm transition-colors ${
          i18n.language === 'zh-CN'
            ? 'bg-primary-600 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
      >
        中文
      </button>
      <button
        onClick={() => changeLanguage('en-US')}
        className={`px-3 py-1 rounded-md text-sm transition-colors ${
          i18n.language === 'en-US'
            ? 'bg-primary-600 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
      >
        English
      </button>
    </div>
  );
};

export default LanguageToggle;
