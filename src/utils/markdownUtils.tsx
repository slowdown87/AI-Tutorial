import React from 'react';
import CodeEditor from '../components/CodeEditor';

/**
 * 解析Markdown内容为React元素
 * @param content Markdown字符串
 * @returns React.ReactNode
 */
export const parseMarkdown = (content: string): React.ReactNode => {
  const elements: React.ReactNode[] = [];
  const lines = content.split('\n');
  let inCodeBlock = false;
  let codeBlockContent = '';
  let codeBlockLanguage = 'plaintext';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // 代码块开始
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        // 代码块结束
        elements.push(
          <CodeEditor
            key={i}
            language={codeBlockLanguage}
            code={codeBlockContent}
          />
        );
        inCodeBlock = false;
        codeBlockContent = '';
        codeBlockLanguage = 'plaintext';
      } else {
        // 代码块开始
        inCodeBlock = true;
        // 提取语言
        const languageMatch = line.match(/^```(\w+)/);
        if (languageMatch) {
          codeBlockLanguage = languageMatch[1];
        }
      }
    } else if (inCodeBlock) {
      // 在代码块内部
      codeBlockContent += line + '\n';
    } else {
      // 图片
        const imgMatch = line.match(/!\[(.*?)\]\((.*?)\)/);
        if (imgMatch) {
          const alt = imgMatch[1];
          let src = imgMatch[2];
          
          // 处理图片路径，确保在GitHub Pages上正确显示
          if (src.startsWith('/images/')) {
            // 检查是否在GitHub Pages环境中
            const isGitHubPages = window.location.hostname === 'slowdown87.github.io';
            if (isGitHubPages) {
              src = `/AI-Tutorial${src}`;
            }
          }
          
          elements.push(
            <div key={`img-${src}-${i}`} className="my-6">
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
      else if (line.startsWith('## ')) {
        elements.push(<h2 key={i} className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">{line.slice(3)}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={i} className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">{line.slice(4)}</h3>);
      } else if (line.startsWith('#### ')) {
        elements.push(<h4 key={i} className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-4 mb-2">{line.slice(5)}</h4>);
      }
      
      // 列表项
      else if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        elements.push(<li key={i} className="ml-6 mb-2 text-gray-700 dark:text-gray-300">{line.trim().slice(2)}</li>);
      } else if (line.match(/^\d+\.\s/)) {
        elements.push(<li key={i} className="ml-6 mb-2 text-gray-700 dark:text-gray-300 list-decimal">{line.trim().replace(/^\d+\.\s/, '')}</li>);
      }
      
      // 分隔线
      else if (line.trim() === '---') {
        elements.push(<hr key={i} className="my-8 border-gray-200 dark:border-gray-700" />);
      }
      
      // 空行
      else if (!line.trim()) {
        elements.push(<br key={i} />);
      }
      
      // 普通段落
      else {
        elements.push(<p key={i} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">{line}</p>);
      }
    }
  }

  return elements;
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
