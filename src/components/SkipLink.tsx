import React from 'react';

const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="absolute top-0 left-0 z-50 px-4 py-2 bg-primary-600 text-white transform -translate-y-full focus:translate-y-0 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      aria-label="跳过导航到主要内容"
    >
      跳过导航
    </a>
  );
};

export default SkipLink;
