# AI教程项目第三阶段开发指导

## 第三阶段：高级功能

### 1. AI工具集成

#### 1.1 集成实际的AI工具演示

**目标**：在教程中集成真实的AI工具演示，让用户可以直接在网页上体验AI功能。

**实现步骤**：
1. 创建AI工具演示组件
2. 实现API调用接口
3. 添加实际的AI功能示例
4. 实现安全的API密钥管理

**代码实现**：
1. 创建API服务：
```typescript
// src/services/aiService.ts
export interface AIServiceConfig {
  apiKey?: string;
  endpoint?: string;
  model?: string;
}

export interface AITextRequest {
  prompt: string;
  maxTokens?: number;
  temperature?: number;
  systemPrompt?: string;
}

export interface AITextResponse {
  text: string;
  success: boolean;
  error?: string;
}

// 模拟AI服务（实际项目中可使用真实API）
export const mockAIService = {
  async generateText(request: AITextRequest): Promise<AITextResponse> {
    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    let responseText = '';
    
    // 根据提示词返回不同的模拟响应
    if (request.prompt.includes('翻译') || request.prompt.includes('translate')) {
      responseText = '这是一个翻译功能的演示。在实际应用中，你可以配置真实的翻译API。';
    } else if (request.prompt.includes('写作') || request.prompt.includes('write')) {
      responseText = '这是一个写作辅助功能的演示。在实际应用中，你可以配置真实的文本生成API。';
    } else if (request.prompt.includes('代码') || request.prompt.includes('code')) {
      responseText = '```python\n# 这是一个生成Python代码的示例\ndef hello_ai():\n    print("Hello, AI World!")\n    return "AI is awesome!"\n\n# 调用函数\nresult = hello_ai()\nprint(result)\n```';
    } else {
      responseText = '你好！这是一个AI交互的演示。在实际应用中，你可以配置真实的AI API来提供更强大的功能。';
    }
    
    return {
      text: responseText,
      success: true
    };
  }
};

export class AIServiceManager {
  private config: AIServiceConfig;
  
  constructor(config: AIServiceConfig = {}) {
    this.config = {
      model: 'gpt-3.5-turbo',
      endpoint: 'https://api.openai.com/v1',
      ...config
    };
  }
  
  updateConfig(newConfig: Partial<AIServiceConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }
  
  async generateText(request: AITextRequest): Promise<AITextResponse> {
    // 如果有API密钥，则使用真实API，否则使用模拟服务
    if (this.config.apiKey) {
      return this.callRealAPI(request);
    } else {
      return mockAIService.generateText(request);
    }
  }
  
  private async callRealAPI(request: AITextRequest): Promise<AITextResponse> {
    try {
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.config.apiKey}`
      };
      
      const body = JSON.stringify({
        model: this.config.model,
        messages: [
          ...(request.systemPrompt ? [{ role: 'system', content: request.systemPrompt }] : []),
          { role: 'user', content: request.prompt }
        ],
        max_tokens: request.maxTokens || 500,
        temperature: request.temperature || 0.7
      });
      
      const response = await fetch(`${this.config.endpoint}/chat/completions`, {
        method: 'POST',
        headers,
        body
      });
      
      if (!response.ok) {
        throw new Error(`API请求失败: ${response.status}`);
      }
      
      const data = await response.json();
      
      return {
        text: data.choices[0].message.content,
        success: true
      };
    } catch (error) {
      return {
        text: '',
        success: false,
        error: error instanceof Error ? error.message : '未知错误'
      };
    }
  }
}

// 创建默认管理器实例
let aiServiceManager = new AIServiceManager();

export const getAIService = () => aiServiceManager;
export const configureAIService = (config: AIServiceConfig) => {
  aiServiceManager.updateConfig(config);
};
```

2. 创建AI交互组件：
```typescript
// src/components/AIDemo.tsx
import React, { useState } from 'react';
import { Send, Bot, Settings, Loader2 } from 'lucide-react';
import { getAIService, configureAIService, type AIServiceConfig } from '../services/aiService';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIDemoProps {
  title?: string;
  initialMessage?: string;
  systemPrompt?: string;
}

const AIDemo: React.FC<AIDemoProps> = ({ 
  title = 'AI交互演示',
  initialMessage = '你好！我是一个AI助手。有什么可以帮助你的吗？',
  systemPrompt = '你是一个友好的AI助手，专门帮助用户学习AI工具的使用。'
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: initialMessage,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [apiKey, setApiKey] = useState('');
  
  const aiService = getAIService();
  
  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    
    try {
      const response = await aiService.generateText({
        prompt: input,
        systemPrompt
      });
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.success ? response.text : `抱歉，发生错误：${response.error}`,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: '抱歉，处理请求时出错了。请稍后再试。',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };
  
  const handleSaveSettings = () => {
    configureAIService({ apiKey: apiKey.trim() || undefined });
    setShowSettings(false);
  };
  
  return (
    <div className="my-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="bg-primary-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          <h3 className="font-semibold">{title}</h3>
        </div>
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="p-1 hover:bg-primary-700 rounded"
        >
          <Settings className="h-4 w-4" />
        </button>
      </div>
      
      {/* 设置面板 */}
      {showSettings && (
        <div className="p-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">API设置</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            可选：输入API密钥以使用真实的AI服务（目前使用模拟服务）
          </p>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="输入API密钥..."
            className="w-full px-3 py-2 border rounded mb-2"
          />
          <button
            onClick={handleSaveSettings}
            className="px-3 py-1 bg-primary-600 text-white rounded hover:bg-primary-700"
          >
            保存设置
          </button>
        </div>
      )}
      
      {/* 消息区域 */}
      <div className="h-80 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-primary-100 text-gray-900'
                  : 'bg-gray-100 dark:bg-gray-700 dark:text-gray-100'
              }`}
            >
              <p className="whitespace-pre-wrap">{message.content}</p>
              <span className="text-xs text-gray-500 dark:text-gray-400 block mt-1">
                {message.timestamp.toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin text-gray-600 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400">思考中...</span>
            </div>
          </div>
        )}
      </div>
      
      {/* 输入区域 */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="输入消息..."
            className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                handleSendMessage();
              }
            }}
            disabled={loading}
          />
          <button
            onClick={handleSendMessage}
            disabled={loading || !input.trim()}
            className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <Send className="h-4 w-4" />
            <span className="hidden sm:inline">发送</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIDemo;
```

3. 创建特定AI功能的演示组件：
```typescript
// src/components/TextGeneratorDemo.tsx
import React, { useState } from 'react';
import { Bot, Settings, Send, Loader2 } from 'lucide-react';
import AIDemo from './AIDemo';

const TextGeneratorDemo: React.FC = () => {
  const demoPrompt = `你是一个专业的内容创作者，专门帮助用户学习AI写作。
请针对用户的需求提供帮助，包括：
1. 邮件写作
2. 文章创作
3. 报告撰写
4. 内容优化

请以友好、专业的风格回复。`;

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
        AI写作辅助工具演示
      </h3>
      <AIDemo
        title="AI写作助手"
        initialMessage="你好！我是你的AI写作助手。我可以帮助你写邮件、文章、报告等。需要什么帮助？"
        systemPrompt={demoPrompt}
      />
      
      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
        <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">尝试这些提示词：</h4>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <li>• "写一封简短的商务邮件，感谢客户的订单"</li>
          <li>• "写一篇关于AI发展的短文，300字左右"</li>
          <li>• "帮我写一份简单的周报摘要"</li>
          <li>• "修改这段文字，让它更专业：[你的文字]"</li>
        </ul>
      </div>
    </div>
  );
};

export default TextGeneratorDemo;
```

#### 1.2：添加API调用示例

**目标**：在教程中添加实际的API调用示例，让用户可以学习如何与AI API进行交互。

**实现步骤**：
1. 创建API交互组件
2. 提供示例API调用代码
3. 添加代码运行功能
4. 实现结果展示和解释

**代码实现**：
1. 创建API调用示例组件：
```typescript
// src/components/APIDemo.tsx
import React, { useState } from 'react';
import { Code, Play, Copy, Check, Settings } from 'lucide-react';

interface APIDemoProps {
  title: string;
  description: string;
  code: string;
  language?: string;
  onRun?: () => Promise<any>;
}

const APIDemo: React.FC<APIDemoProps> = ({
  title,
  description,
  code,
  language = 'javascript',
  onRun
}) => {
  const [copied, setCopied] = useState(false);
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [showCode, setShowCode] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [apiKey, setApiKey] = useState('');
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleRun = async () => {
    if (!onRun) return;
    
    setRunning(true);
    try {
      const response = await onRun();
      setResult(response);
    } catch (error) {
      setResult({ error: error instanceof Error ? error.message : '发生错误' });
    } finally {
      setRunning(false);
    }
  };
  
  return (
    <div className="my-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* 标题和描述 */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <Code className="h-5 w-5 text-primary-600" />
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-1">{description}</p>
      </div>
      
      {/* 设置按钮 */}
      {onRun && (
        <div className="px-4 py-2 flex justify-end">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 flex items-center gap-1"
          >
            <Settings className="h-4 w-4" />
            设置
          </button>
        </div>
      )}
      
      {/* 设置面板 */}
      {onRun && showSettings && (
        <div className="px-4 pb-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              API密钥
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="输入API密钥..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>
      )}
      
      {/* 代码区域 */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={() => setShowCode(!showCode)}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600"
          >
            {showCode ? '隐藏代码' : '显示代码'}
          </button>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 flex items-center gap-1"
            >
              {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
              {copied ? '已复制' : '复制代码'}
            </button>
            {onRun && (
              <button
                onClick={handleRun}
                disabled={running}
                className="px-3 py-1 bg-primary-600 text-white rounded text-sm hover:bg-primary-700 disabled:opacity-50 flex items-center gap-1"
              >
                {running ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
                {running ? '运行中...' : '运行代码'}
              </button>
            )}
          </div>
        </div>
        
        {showCode && (
          <div className="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto">
            <pre className="text-sm whitespace-pre-wrap">{code}</pre>
          </div>
        )}
      </div>
      
      {/* 结果区域 */}
      {result && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
            运行结果
          </h4>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-md p-4 overflow-x-auto">
            {result.error ? (
              <p className="text-red-600 dark:text-red-400">{result.error}</p>
            ) : (
              <pre className="text-sm whitespace-pre-wrap text-gray-700 dark:text-gray-300">
                {JSON.stringify(result, null, 2)}
              </pre>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default APIDemo;
```

2. 创建具体的API示例：
```typescript
// src/components/AudioToTextDemo.tsx
import React, { useState } from 'react';
import APIDemo from './APIDemo';

const audioToTextCode = `// 使用OpenAI的音频转文本API
async function audioToText(audioFile) {
  const formData = new FormData();
  formData.append('file', audioFile);
  formData.append('model', 'whisper-1');
  
  const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${API_KEY}\`
    },
    body: formData
  });
  
  const result = await response.json();
  return result.text;
}

// 使用示例
// const audioFile = document.querySelector('input[type="file"]').files[0];
// const transcript = await audioToText(audioFile);
// console.log('转录文本:', transcript);`;

const AudioToTextDemo: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [transcript, setTranscript] = useState('');
  const [transcribing, setTranscribing] = useState(false);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };
  
  const handleRun = async () => {
    if (!selectedFile) {
      throw new Error('请先选择音频文件');
    }
    
    // 模拟音频转文本过程
    setTranscribing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      return {
        success: true,
        message: '模拟：音频转文本功能',
        note: '在实际项目中，需要配置真实的API',
        file: selectedFile.name,
        transcript: '这是模拟的音频转录文本。实际使用中，会从API获取真实的转录结果。'
      };
    } finally {
      setTranscribing(false);
    }
  };
  
  return (
    <div>
      <APIDemo
        title="音频转文本API示例"
        description="学习如何使用AI API将音频文件转换为文本"
        code={audioToTextCode}
        onRun={handleRun}
      />
      
      {/* 文件选择器 */}
      <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
        <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
          尝试上传音频文件（模拟）
        </h4>
        <div className="flex items-center gap-3">
          <input
            type="file"
            accept="audio/*"
            onChange={handleFileChange}
            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-100 file:text-primary-700 hover:file:bg-primary-200"
          />
          {selectedFile && (
            <div className="text-sm text-gray-600 dark:text-gray-400">
              已选择: {selectedFile.name}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AudioToTextDemo;
```

### 2. 社区功能

#### 2.1：添加评论和讨论功能

**目标**：添加用户评论和讨论功能，建立学习社区。

**实现步骤**：
1. 创建评论组件
2. 实现评论存储（本地存储或后端API）
3. 添加评论回复功能
4. 实现简单的用户身份

**代码实现**：
1. 创建评论系统服务：
```typescript
// src/services/commentService.ts
export interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: Date;
  replies?: Comment[];
  chapterId: number;
  sectionId?: string;
}

// 使用localStorage存储评论
const STORAGE_KEY = 'ai-tutorial-comments';

export const commentService = {
  getComments(chapterId: number, sectionId?: string): Comment[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return [];
      
      let comments: Comment[] = JSON.parse(stored, (key, value) => {
        if (key === 'timestamp') return new Date(value);
        return value;
      });
      
      comments = comments.filter(comment => 
        comment.chapterId === chapterId && 
        (sectionId === undefined || comment.sectionId === sectionId)
      );
      
      return comments;
    } catch {
      return [];
    }
  },
  
  addComment(comment: Omit<Comment, 'id' | 'timestamp'>): Comment {
    const newComment: Comment = {
      ...comment,
      id: Date.now().toString(),
      timestamp: new Date()
    };
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const comments: Comment[] = stored ? JSON.parse(stored) : [];
      comments.push(newComment);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
    } catch (error) {
      console.error('保存评论失败:', error);
    }
    
    return newComment;
  },
  
  addReply(parentId: string, reply: Omit<Comment, 'id' | 'timestamp'>): Comment | null {
    const newReply: Comment = {
      ...reply,
      id: Date.now().toString(),
      timestamp: new Date()
    };
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return null;
      
      const comments: Comment[] = JSON.parse(stored);
      
      // 查找父评论并添加回复
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].id === parentId) {
          if (!comments[i].replies) {
            comments[i].replies = [];
          }
          comments[i].replies.push(newReply);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
          return newReply;
        }
        
        // 检查回复中的回复（仅支持两层回复）
        if (comments[i].replies) {
          for (let j = 0; j < comments[i].replies.length; j++) {
            if (comments[i].replies[j].id === parentId) {
              // 不支持深层嵌套
              return null;
            }
          }
        }
      }
      
      return null;
    } catch (error) {
      console.error('保存回复失败:', error);
      return null;
    }
  }
};
```

2. 创建评论组件：
```typescript
// src/components/CommentSection.tsx
import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, User, Trash2 } from 'lucide-react';
import { commentService, type Comment } from '../services/commentService';

interface CommentSectionProps {
  chapterId: number;
  sectionId?: string;
  title?: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({
  chapterId,
  sectionId,
  title = '评论和讨论'
}) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [username, setUsername] = useState(() => {
    return localStorage.getItem('ai-tutorial-username') || '访客用户';
  });
  const [showUsernameInput, setShowUsernameInput] = useState(!localStorage.getItem('ai-tutorial-username'));
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');
  
  // 加载评论
  useEffect(() => {
    const loadedComments = commentService.getComments(chapterId, sectionId);
    setComments(loadedComments);
  }, [chapterId, sectionId]);
  
  // 保存用户名
  const saveUsername = () => {
    if (username.trim()) {
      localStorage.setItem('ai-tutorial-username', username.trim());
      setShowUsernameInput(false);
    }
  };
  
  // 提交评论
  const submitComment = () => {
    if (!newComment.trim()) return;
    
    const comment = commentService.addComment({
      author: username,
      content: newComment,
      chapterId,
      sectionId
    });
    
    setComments(prev => [...prev, comment]);
    setNewComment('');
  };
  
  // 提交回复
  const submitReply = (parentId: string) => {
    if (!replyText.trim()) return;
    
    const reply = commentService.addReply(parentId, {
      author: username,
      content: replyText,
      chapterId,
      sectionId
    });
    
    if (reply) {
      // 更新评论列表
      const updatedComments = commentService.getComments(chapterId, sectionId);
      setComments(updatedComments);
    }
    
    setReplyingTo(null);
    setReplyText('');
  };
  
  // 渲染单个评论
  const renderComment = (comment: Comment, isReply = false) => (
    <div key={comment.id} className={`${isReply ? 'ml-8 mt-3' : 'mt-4'}`}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-primary-600" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-gray-900 dark:text-gray-100">
              {comment.author}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {comment.timestamp.toLocaleString()}
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2">{comment.content}</p>
          {!isReply && (
            <button
              onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
              className="text-sm text-primary-600 hover:text-primary-700"
            >
              回复
            </button>
          )}
          
          {/* 回复区域 */}
          {replyingTo === comment.id && (
            <div className="mt-3">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="写下你的回复..."
                className="w-full p-2 border rounded-md mb-2 resize-none"
                rows={3}
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => {
                    setReplyingTo(null);
                    setReplyText('');
                  }}
                  className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
                >
                  取消
                </button>
                <button
                  onClick={() => submitReply(comment.id)}
                  disabled={!replyText.trim()}
                  className="px-3 py-1 bg-primary-600 text-white rounded text-sm hover:bg-primary-700 disabled:opacity-50"
                >
                  回复
                </button>
              </div>
            </div>
          )}
          
          {/* 渲染子回复 */}
          {comment.replies && comment.replies.length > 0 && (
            <div>
              {comment.replies.map(reply => renderComment(reply, true))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="my-8">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="h-5 w-5 text-primary-600" />
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
      </div>
      
      {/* 用户设置 */}
      {showUsernameInput && (
        <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            设置你的用户名
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="输入用户名..."
              className="flex-1 px-3 py-2 border rounded-md"
            />
            <button
              onClick={saveUsername}
              className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
            >
              保存
            </button>
          </div>
        </div>
      )}
      
      {/* 添加新评论 */}
      <div className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="分享你的想法、问题或学习心得..."
          className="w-full p-3 border rounded-md mb-2 resize-none"
          rows={4}
        />
        <div className="flex justify-end">
          <button
            onClick={submitComment}
            disabled={!newComment.trim() || showUsernameInput}
            className="flex items-center gap-1 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
            发表评论
          </button>
        </div>
      </div>
      
      {/* 评论列表 */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        {comments.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center py-8">
            还没有评论，来做第一个发表评论的人吧！
          </p>
        ) : (
          comments.map(comment => renderComment(comment))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
```

#### 2.2：实现用户贡献机制

**目标**：建立用户贡献内容的机制，让用户可以提交示例、练习和改进建议。

**实现步骤**：
1. 创建贡献表单组件
2. 实现内容提交和审核流程（简化版本）
3. 添加贡献展示功能
4. 建立贡献者展示页面

**代码实现**：
1. 创建贡献服务：
```typescript
// src/services/contributionService.ts
export interface Contribution {
  id: string;
  title: string;
  description: string;
  content: string;
  type: 'example' | 'exercise' | 'suggestion' | 'other';
  author: string;
  submittedAt: Date;
  status: 'pending' | 'approved' | 'rejected';
}

const STORAGE_KEY = 'ai-tutorial-contributions';

export const contributionService = {
  submitContribution(contribution: Omit<Contribution, 'id' | 'status' | 'submittedAt'>): Contribution {
    const newContribution: Contribution = {
      ...contribution,
      id: Date.now().toString(),
      submittedAt: new Date(),
      status: 'pending'
    };
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const contributions: Contribution[] = stored ? JSON.parse(stored) : [];
      contributions.push(newContribution);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(contributions));
    } catch (error) {
      console.error('保存贡献失败:', error);
    }
    
    return newContribution;
  },
  
  getContributions(status?: Contribution['status']): Contribution[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return [];
      
      let contributions: Contribution[] = JSON.parse(stored, (key, value) => {
        if (key === 'submittedAt') return new Date(value);
        return value;
      });
      
      if (status !== undefined) {
        contributions = contributions.filter(c => c.status === status);
      }
      
      return contributions;
    } catch {
      return [];
    }
  }
};
```

2. 创建贡献表单组件：
```typescript
// src/components/ContributionForm.tsx
import React, { useState } from 'react';
import { Upload, CheckCircle } from 'lucide-react';
import { contributionService, type Contribution } from '../services/contributionService';

const ContributionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    type: 'example' as const,
    author: localStorage.getItem('ai-tutorial-username') || ''
  });
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    contributionService.submitContribution(formData);
    setSubmitted(true);
    
    // 重置表单
    setTimeout(() => {
      setFormData({
        title: '',
        description: '',
        content: '',
        type: 'example',
        author: localStorage.getItem('ai-tutorial-username') || ''
      });
      setSubmitted(false);
    }, 3000);
  };
  
  if (submitted) {
    return (
      <div className="my-6 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
        <div className="flex items-center justify-center">
          <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 text-center mt-4">
          感谢你的贡献！
        </h3>
        <p className="text-green-700 dark:text-green-300 text-center mt-2">
          我们会审核你的贡献，并尽快回复。
        </p>
      </div>
    );
  }
  
  return (
    <div className="my-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
        <Upload className="h-5 w-5" />
        贡献内容
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            你的名字
          </label>
          <input
            type="text"
            value={formData.author}
            onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            贡献类型
          </label>
          <select
            value={formData.type}
            onChange={(e) => setFormData(prev => ({ 
              ...prev, 
              type: e.target.value as any 
            }))}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="example">代码示例</option>
            <option value="exercise">练习题</option>
            <option value="suggestion">改进建议</option>
            <option value="other">其他</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            标题
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            描述
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            className="w-full px-3 py-2 border rounded-md resize-none"
            rows={3}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            内容
          </label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
            className="w-full px-3 py-2 border rounded-md resize-none"
            rows={6}
            placeholder="详细描述你的贡献内容..."
            required
          />
        </div>
        
        <div className="pt-4">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
          >
            提交贡献
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContributionForm;
```

### 3. 安全

#### 3.1：配置内容安全策略

**目标**：实施内容安全策略(CSP)，提高网站安全性。

**实现步骤**：
1. 配置HTML元标签CSP
2. 配置构建工具CSP
3. 实施XSS防护措施
4. 添加内容清理功能

**代码实现**：
1. 更新index.html添加CSP：
```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- 内容安全策略 -->
    <meta http-equiv="Content-Security-Policy" content="
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      connect-src 'self' https://*.github.io https://api.openai.com https://*.openai.com;
      font-src 'self' data:;
      object-src 'none';
      frame-src 'none';
      base-uri 'self';
      form-action 'self';
    ">
    <meta name="description" content="AI零基础教程 - 从入门到精通" />
    <meta name="keywords" content="AI, 人工智能, 教程, 零基础, 入门" />
    <meta name="author" content="AI Tutorial Team" />
    <title>AI零基础教程 - 从入门到精通</title>
    <link rel="canonical" href="https://slowdown87.github.io/AI-Tutorial/" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

2. 创建内容清理工具：
```typescript
// src/utils/sanitize.ts
export function sanitizeHTML(input: string): string {
  // 创建临时DOM元素进行清理
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = input;
  
  // 移除危险的标签和属性
  const dangerousTags = ['script', 'iframe', 'form', 'input', 'button', 'textarea', 'select'];
  dangerousTags.forEach(tag => {
    const elements = tempDiv.querySelectorAll(tag);
    elements.forEach(el => el.remove());
  });
  
  // 移除危险属性
  const allElements = tempDiv.querySelectorAll('*');
  allElements.forEach(el => {
    // 移除所有以on开头的事件处理器
    const attributesToRemove: string[] = [];
    for (let i = 0; i < el.attributes.length; i++) {
      const attr = el.attributes[i];
      if (attr.name.toLowerCase().startsWith('on')) {
        attributesToRemove.push(attr.name);
      }
    }
    
    attributesToRemove.forEach(attrName => el.removeAttribute(attrName));
    
    // 移除可能危险的其他属性
    el.removeAttribute('src');
    el.removeAttribute('href');
  });
  
  return tempDiv.innerHTML;
}

export function sanitizeMarkdown(content: string): string {
  // 对Markdown内容进行基本清理
  let sanitized = content;
  
  // 移除script标签（即使在代码块中）
  sanitized = sanitized.replace(/<script[^>]*>(?:[\s\S]*?)<\/script>/gi, '');
  
  // 限制链接协议
  sanitized = sanitized.replace(/\[([^\]]*)\]\(javascript:/gi, '[$1](#' );
  
  return sanitized;
}

export function sanitizeUserContent(content: string): string {
  // 清理用户生成的内容
  return content
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
```

#### 3.2：定期检查依赖安全

**目标**：建立依赖安全检查机制。

**实现步骤**：
1. 添加安全检查脚本
2. 配置GitHub Actions自动检查
3. 设置依赖更新机制

**代码实现**：
1. 在package.json添加安全脚本：
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "security:check": "npm audit",
    "security:fix": "npm audit fix",
    "deps:update": "npx npm-check-updates -u"
  }
}
```

2. 创建安全检查工作流：
```yaml
# .github/workflows/security-check.yml
name: Security Check

on:
  schedule:
    - cron: '0 0 * * 1' # 每周一运行
  push:
    branches:
      - master
  pull_request:
    branches:
      - master

jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run security audit
        run: npm audit --audit-level=moderate
      
      - name: Check dependencies for known vulnerabilities
        uses: snyk/actions/node@master
        with:
          args: --severity-threshold=high
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
        continue-on-error: true
```

## 4. 实施步骤总结

### 阶段3：高级功能

1. **AI工具集成**：
   - 实现AI演示组件
   - 添加API调用示例
   - 集成真实AI服务

2. **社区功能**：
   - 添加评论系统
   - 实现贡献机制
   - 建立用户互动

3. **安全**：
   - 配置内容安全策略
   - 实现XSS防护
   - 设置安全检查流程

## 5. 预期成果

### 高级功能效果：
- 交互式AI工具演示
- 活跃的学习社区
- 高级安全保护
- 持续的安全检查

### 社区建设：
- 用户可以分享学习心得
- 贡献内容会被审核展示
- 建立学习社区氛围
- 激励用户积极参与

## 6. 风险评估

### 技术风险：
- **API成本**：真实API集成可能产生费用
- **内容审核**：社区内容需要审核机制
- **安全挑战**：开放用户输入带来安全风险

### 风险应对策略：
- 提供模拟API演示
- 实现内容过滤和审核
- 添加用户身份验证
- 实施严格的内容清理
- 建立明确的社区规范
