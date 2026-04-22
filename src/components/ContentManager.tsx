import React, { useState } from 'react';
import { parseMarkdown } from '../utils/markdownUtils.tsx';
import { Edit, Save, X } from 'lucide-react';

interface ContentManagerProps {
  content: string;
  onContentChange?: (content: string) => void;
  editable?: boolean;
}

const ContentManager: React.FC<ContentManagerProps> = ({ 
  content, 
  onContentChange, 
  editable = false 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const handleSave = () => {
    if (onContentChange) {
      onContentChange(editedContent);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedContent(content);
    setIsEditing(false);
  };

  return (
    <div>
      {/* 内容 */}
      <div>
        {isEditing ? (
          <div className="space-y-4">
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="w-full min-h-[400px] p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="输入Markdown内容..."
            />
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleCancel}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="h-4 w-4 mr-2 inline" />
                取消
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              >
                <Save className="h-4 w-4 mr-2 inline" />
                保存
              </button>
            </div>
          </div>
        ) : (
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {parseMarkdown(content)}
          </div>
        )}

        {/* 编辑按钮 */}
        {editable && !isEditing && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
            >
              <Edit className="h-4 w-4 mr-2" />
              编辑内容
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentManager;
