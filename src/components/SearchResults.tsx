import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, SearchX } from 'lucide-react';

interface SearchResult {
  chapterId: number;
  chapterTitle: string;
  sectionId: string;
  sectionTitle: string;
  content: string;
  snippet: string;
  score: number;
}

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  onClear: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, query, onClear }) => {
  if (!query) {
    return null;
  }

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          搜索结果: {results.length} 个匹配
        </h3>
        <button
          onClick={onClear}
          className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
        >
          <SearchX className="h-4 w-4 mr-1" />
          清除搜索
        </button>
      </div>

      {results.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            没有找到与 "{query}" 相关的内容
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {results.map((result, index) => (
            <Link
              key={index}
              to={`/chapter/${result.chapterId}?section=${result.sectionId}`}
              className="block bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <BookOpen className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                <div className="ml-3 flex-1">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <span>第 {result.chapterId} 章</span>
                    <span className="mx-2">•</span>
                    <span>{result.chapterTitle}</span>
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    {result.sectionTitle}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {result.snippet}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
