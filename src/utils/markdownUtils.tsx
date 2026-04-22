import React from 'react';

/**
 * 解析Markdown内容为React元素
 * @param content Markdown字符串
 * @returns React.ReactNode
 */
export const parseMarkdown = (content: string): React.ReactNode => {
  return content
    .split('\n')
    .map((line, index) => {
      // 图片
      const imgMatch = line.match(/!\[(.*?)\]\((.*?)\)/);
      if (imgMatch) {
        const alt = imgMatch[1];
        const src = imgMatch[2];
        return (
          <div key={index} className="my-6">
            <img 
              src={src} 
              alt={alt} 
              className="w-full h-auto rounded-lg shadow-sm"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">{alt}</p>
          </div>
        );
      }
      
      // 标题
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">{line.slice(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">{line.slice(4)}</h3>;
      }
      if (line.startsWith('#### ')) {
        return <h4 key={index} className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-4 mb-2">{line.slice(5)}</h4>;
      }
      
      // 列表项
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        return <li key={index} className="ml-6 mb-2 text-gray-700 dark:text-gray-300">{line.trim().slice(2)}</li>;
      }
      if (line.match(/^\d+\.\s/)) {
        return <li key={index} className="ml-6 mb-2 text-gray-700 dark:text-gray-300 list-decimal">{line.trim().replace(/^\d+\.\s/, '')}</li>;
      }
      
      // 分隔线
      if (line.trim() === '---') {
        return <hr key={index} className="my-8 border-gray-200 dark:border-gray-700" />;
      }
      
      // 空行
      if (!line.trim()) {
        return <br key={index} />;
      }
      
      // 普通段落
      return <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">{line}</p>;
    });
};

/**
 * 提取Markdown中的所有标题
 * @param content Markdown字符串
 * @returns 标题数组
 */
export const extractHeadings = (content: string): { level: number; text: string; id: string }[] => {
  const headings: { level: number; text: string; id: string }[] = [];
  const lines = content.split('\n');
  
  lines.forEach(line => {
    if (line.startsWith('## ')) {
      const text = line.slice(3);
      headings.push({
        level: 2,
        text,
        id: text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
      });
    } else if (line.startsWith('### ')) {
      const text = line.slice(4);
      headings.push({
        level: 3,
        text,
        id: text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
      });
    } else if (line.startsWith('#### ')) {
      const text = line.slice(5);
      headings.push({
        level: 4,
        text,
        id: text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
      });
    }
  });
  
  return headings;
};

/**
 * 生成目录
 * @param headings 标题数组
 * @returns React.ReactNode
 */
export const generateTableOfContents = (headings: { level: number; text: string; id: string }[]): React.ReactNode => {
  if (headings.length === 0) {
    return null;
  }
  
  return (
    <nav className="py-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">目录</h3>
      <ul className="space-y-2">
        {headings.map((heading, index) => (
          <li key={index} className={`pl-${(heading.level - 2) * 4}`}>
            <a 
              href={`#${heading.id}`} 
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
