import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Book, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ChapterCard from '../components/ChapterCard';
import SearchResults from '../components/SearchResults';
import { chapters } from '../data/chapters';
import { searchService } from '../services/searchService';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(searchService.search(''));
  const { t } = useTranslation();

  // 从localStorage读取搜索查询
  useEffect(() => {
    const savedQuery = localStorage.getItem('searchQuery');
    if (savedQuery) {
      setSearchQuery(savedQuery);
      setSearchResults(searchService.search(savedQuery));
      // 清除localStorage中的搜索查询
      localStorage.removeItem('searchQuery');
    }
  }, []);

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/chapter/1" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                {t('hero.startButton')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchQuery && (
        <section className="py-8 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <SearchResults 
                results={searchResults} 
                query={searchQuery} 
                onClear={handleClearSearch} 
              />
            </div>
          </div>
        </section>
      )}

      {/* Quick Start Guide */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t('steps.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. {t('steps.step1')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('steps.step1Desc')}
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-success-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. {t('steps.step2')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('steps.step2Desc')}
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. {t('steps.step3')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('steps.step3Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters List */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            {t('chapters.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            {t('chapters.subtitle')}
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
