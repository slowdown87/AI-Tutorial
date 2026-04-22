import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder 
}) => {
  const { t } = useTranslation();
  const effectivePlaceholder = placeholder || t('common.searchPlaceholder');
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const searchTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // 防抖搜索
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (query.trim()) {
      searchTimeoutRef.current = setTimeout(() => {
        onSearch(query.trim());
      }, 300);
    }

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [query, onSearch]);

  const handleClear = () => {
    setQuery('');
    onSearch('');
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              handleClear();
            }
          }}
          placeholder={effectivePlaceholder}
          className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          aria-label={t('common.search')}
          role="searchbox"
          aria-autocomplete="both"
          aria-expanded="false"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-full p-1"
            aria-label={t('common.clearSearch')}
            aria-describedby="search-input"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
