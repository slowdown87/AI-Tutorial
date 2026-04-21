import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, MessageSquare, Edit, BookOpen, ChevronRight } from 'lucide-react';
import { Chapter } from '../data/chapters';

interface ChapterCardProps {
  chapter: Chapter;
}

const IconMap = {
  brain: Brain,
  'message-square': MessageSquare,
  edit: Edit,
  'book-open': BookOpen
};

const ChapterCard: React.FC<ChapterCardProps> = ({ chapter }) => {
  const IconComponent = IconMap[chapter.icon as keyof typeof IconMap] || Brain;
  
  return (
    <Link 
      to={`/chapter/${chapter.id}`}
      className="card group"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
            <IconComponent className="h-6 w-6 text-primary-600" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
            {chapter.title}
          </h3>
          <p className="mt-1 text-gray-600">
            {chapter.description}
          </p>
          <div className="mt-3 flex items-center text-primary-600 font-medium text-sm">
            <span>开始学习</span>
            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChapterCard;
