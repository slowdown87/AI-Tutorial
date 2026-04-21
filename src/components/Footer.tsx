import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container py-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">AI零基础教程</h3>
          <p className="text-gray-400 mb-6">
            让每个人都能轻松掌握AI工具，提高工作效率
          </p>
          <div className="text-gray-500 text-sm">
            © 2024 AI零基础教程. 保留所有权利。
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
