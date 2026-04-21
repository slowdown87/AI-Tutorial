import React from 'react';
import { ArrowRight, Zap, Book, Users } from 'lucide-react';
import ChapterCard from '../components/ChapterCard';
import { chapters } from '../data/chapters';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              AI零基础教程
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              从零开始，轻松学习AI工具使用方法，让AI成为你的得力助手
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/chapter/1" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                开始学习
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            学习三步曲
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. 了解基础</h3>
              <p className="text-gray-600">
                认识AI是什么，了解它能做什么
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-success-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. 动手实践</h3>
              <p className="text-gray-600">
                跟着教程，一步步实际操作
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. 灵活运用</h3>
              <p className="text-gray-600">
                把学到的技巧应用到实际生活中
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters List */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            教程章节
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            从基础开始，循序渐进地学习AI工具使用
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter) => (
              <ChapterCard key={chapter.id} chapter={chapter} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
