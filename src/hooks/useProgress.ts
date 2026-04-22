import { useState, useEffect } from 'react';

interface ProgressData {
  [chapterId: string]: {
    [sectionId: string]: boolean;
  };
}

export const useProgress = () => {
  const [progress, setProgress] = useState<ProgressData>(() => {
    const savedProgress = localStorage.getItem('ai-tutorial-progress');
    return savedProgress ? JSON.parse(savedProgress) : {};
  });

  useEffect(() => {
    localStorage.setItem('ai-tutorial-progress', JSON.stringify(progress));
  }, [progress]);

  const markSectionComplete = (chapterId: string, sectionId: string) => {
    setProgress(prev => {
      const chapterProgress = prev[chapterId] || {};
      return {
        ...prev,
        [chapterId]: {
          ...chapterProgress,
          [sectionId]: true
        }
      };
    });
  };

  const isSectionComplete = (chapterId: string, sectionId: string) => {
    return progress[chapterId]?.[sectionId] || false;
  };

  const resetProgress = () => {
    setProgress({});
  };

  return {
    progress,
    markSectionComplete,
    isSectionComplete,
    resetProgress
  };
};
