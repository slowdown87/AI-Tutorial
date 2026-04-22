import React, { useState, useEffect, useRef } from 'react';
import { Play, Copy, Check, Code } from 'lucide-react';

interface CodeEditorProps {
  language: string;
  code: string;
  editable?: boolean;
  showExecution?: boolean;
  onCodeChange?: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ 
  language, 
  code, 
  editable = false, 
  showExecution = false,
  onCodeChange 
}) => {
  const [editedCode, setEditedCode] = useState(code);
  const [executionResult, setExecutionResult] = useState<string | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setEditedCode(code);
  }, [code]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setEditedCode(newCode);
    if (onCodeChange) {
      onCodeChange(newCode);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(editedCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleExecute = () => {
    setIsExecuting(true);
    // 模拟代码执行
    setTimeout(() => {
      setExecutionResult(`执行结果: ${new Date().toLocaleString()}`);
      setIsExecuting(false);
    }, 1000);
  };

  // 根据语言设置不同的语法高亮样式
  const getLanguageClass = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'javascript':
      case 'js':
        return 'bg-yellow-50 dark:bg-yellow-900/20';
      case 'python':
      case 'py':
        return 'bg-blue-50 dark:bg-blue-900/20';
      case 'html':
        return 'bg-orange-50 dark:bg-orange-900/20';
      case 'css':
        return 'bg-purple-50 dark:bg-purple-900/20';
      case 'json':
        return 'bg-green-50 dark:bg-green-900/20';
      default:
        return 'bg-gray-50 dark:bg-gray-800';
    }
  };

  return (
    <div className="mt-6 mb-8">
      {/* Code Editor Header */}
      <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-t-lg px-4 py-2 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <Code className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{language}</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Copy code"
          >
            {isCopied ? (
              <Check className="h-4 w-4 text-success-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
          {showExecution && (
            <button
              onClick={handleExecute}
              disabled={isExecuting}
              className={`p-1.5 rounded-md ${isExecuting 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              aria-label="Execute code"
            >
              <Play className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Code Editor Content */}
      <div className={`${getLanguageClass(language)} rounded-b-lg overflow-hidden`}>
        {editable ? (
          <textarea
            ref={textareaRef}
            value={editedCode}
            onChange={handleCodeChange}
            className="w-full p-4 font-mono text-sm bg-transparent border-none focus:outline-none resize-none min-h-[200px]"
            spellCheck={false}
          />
        ) : (
          <pre className="p-4 font-mono text-sm overflow-x-auto">
            <code>{editedCode}</code>
          </pre>
        )}
      </div>

      {/* Execution Result */}
      {showExecution && executionResult && (
        <div className="mt-3 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">执行结果</h4>
          <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">{executionResult}</pre>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;
