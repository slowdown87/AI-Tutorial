import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Home, 
  Menu,
  X,
  BookOpen,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { chapters, getChapterById } from '../data/chapters';
import ContentManager from '../components/ContentManager';
import { useTranslation } from 'react-i18next';

const Chapter: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const chapterId = parseInt(id || '1');
  const chapter = getChapterById(chapterId);
  const { t } = useTranslation();
  
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTableOfContentsOpen, setMobileTableOfContentsOpen] = useState(true);
  
  // 页面加载或切换小节时自动滚动到顶部
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSectionIndex, chapterId]);

  // 检查URL参数中的section参数
  useEffect(() => {
    if (chapter) {
      const sectionParam = searchParams.get('section');
      if (sectionParam) {
        const sectionIndex = chapter.sections.findIndex(section => section.id === sectionParam);
        if (sectionIndex !== -1) {
          setCurrentSectionIndex(sectionIndex);
        }
      }
    }
  }, [searchParams, chapter]);
  
  if (!chapter) {
    return (
      <div className="container py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">章节未找到</h2>
        <Link to="/" className="btn-primary inline-flex items-center">
          <Home className="mr-2 h-4 w-4" />
          返回首页
        </Link>
      </div>
    );
  }
  
  const currentSection = chapter.sections[currentSectionIndex];
  const hasPrev = currentSectionIndex > 0;
  const hasNext = currentSectionIndex < chapter.sections.length - 1;
  const isLastChapter = chapterId >= chapters.length;
  const isLastSection = !hasNext;
  
  const handlePrev = () => {
    if (hasPrev) {
      setCurrentSectionIndex(prev => prev - 1);
    }
  };
  
  const handleNext = () => {
    if (hasNext) {
      setCurrentSectionIndex(prev => prev + 1);
    } else if (!isLastChapter) {
      navigate(`/chapter/${chapterId + 1}`);
      setCurrentSectionIndex(0);
    }
  };
  
  // 使用ContentManager组件渲染内容
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-16 z-10">
        <h2 className="font-semibold text-gray-900 truncate">{chapter.title}</h2>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      <div className="container flex flex-col lg:flex-row gap-6 py-8">
        {/* Sidebar */}
        <aside 
          className={`lg:w-72 flex-shrink-0 ${
            mobileMenuOpen ? 'fixed inset-0 bg-white z-50 p-4' : 'hidden lg:block'
          }`}
        >
          {mobileMenuOpen && (
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          )}
          
          <div className="lg:sticky lg:top-24">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('common.home')}</h3>
            <nav className="space-y-1">
              {chapters.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => {
                    navigate(`/chapter/${ch.id}`);
                    setCurrentSectionIndex(0);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    ch.id === chapterId
                      ? 'bg-primary-100 text-primary-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="mr-3">{ch.id}.</span>
                    {ch.title}
                  </div>
                </button>
              ))}
            </nav>
            
            {/* 小节目录 */}
            <div className="mt-6">
              <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-3">{t('chapter.toc')}</h4>
              <nav className="space-y-1 pl-2">
                {chapter.sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setCurrentSectionIndex(index);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      index === currentSectionIndex
                        ? 'bg-primary-100 text-primary-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center">
                      {index < currentSectionIndex ? (
                        <CheckCircle2 className="h-4 w-4 mr-2 text-success-500 flex-shrink-0" />
                      ) : (
                        <span className="h-2 w-2 rounded-full bg-gray-300 mr-3 flex-shrink-0" />
                      )}
                      {section.title}
                    </div>
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Link
                to="/"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm"
              >
                <Home className="h-4 w-4 mr-2" />
                {t('chapter.backHome')}
              </Link>
            </div>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1">
          {/* Mobile Table of Contents - Default Expanded */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setMobileTableOfContentsOpen(!mobileTableOfContentsOpen)}
              className="w-full flex items-center justify-between p-4 bg-white rounded-xl shadow-sm mb-2"
            >
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-primary-600" />
                <span className="font-semibold text-gray-900 dark:text-white">{t('chapter.toc')}</span>
              </div>
              {mobileTableOfContentsOpen ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            
            {mobileTableOfContentsOpen && (
              <div className="bg-white rounded-xl shadow-sm p-4">
                <div className="space-y-1">
                  {chapter.sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => setCurrentSectionIndex(index)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        index === currentSectionIndex
                          ? 'bg-primary-100 text-primary-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center">
                        {index < currentSectionIndex ? (
                          <CheckCircle2 className="h-4 w-4 mr-2 text-success-500" />
                        ) : (
                          <span className="h-2 w-2 rounded-full bg-gray-300 mr-3" />
                        )}
                        {section.title}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <article className="bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{currentSection.title}</h1>
            
            <ContentManager content={currentSection.content} />
            
            {/* Navigation */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={handlePrev}
                disabled={!hasPrev}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  hasPrev
                    ? 'text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-800'
                    : 'text-gray-400 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="h-5 w-5 mr-2" />
                {t('chapter.previous')}
              </button>
              
              <button
                onClick={handleNext}
                disabled={!hasNext && isLastChapter}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  (hasNext || !isLastChapter)
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isLastSection && !isLastChapter ? t('chapter.nextChapter') : t('chapter.next')}
                <ChevronRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

export default Chapter;
