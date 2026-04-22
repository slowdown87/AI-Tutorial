# AI教程项目 - 第三阶段第一子阶段：AI工具集成

## 1. 概述

本开发指导文件详细说明如何实现AI教程项目的AI工具集成功能，作为第三阶段的第一个子阶段。通过集成实际的AI工具演示和API调用示例，将使教程更加实用和互动，帮助用户了解如何在实际应用中使用AI工具。

## 2. 目标

- 集成实际的AI工具演示
- 添加API调用示例
- 实现AI工具的交互式演示
- 提供实际的AI应用场景

## 3. 技术栈

- React 18 + TypeScript
- OpenAI API (用于大语言模型集成)
- Replicate API (用于图像生成和其他AI模型)
- Axios (用于API调用)
- React Hook Form (用于表单处理)

## 4. 实施步骤

### 4.1 集成OpenAI API

#### 4.1.1 安装依赖

```bash
npm install axios react-hook-form
```

#### 4.1.2 创建API服务

1. 创建 `src/services/api.ts` 文件：

```tsx
import axios from 'axios';

export interface OpenAIRequest {
  model: string;
  messages: Array<{
    role: 'system' | 'user' | 'assistant';
    content: string;
  }>;
  temperature?: number;
  max_tokens?: number;
}

export interface OpenAIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export const openaiApi = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setOpenAIKey = (apiKey: string) => {
  openaiApi.defaults.headers.common['Authorization'] = `Bearer ${apiKey}`;
};

export const callOpenAI = async (request: OpenAIRequest): Promise<OpenAIResponse> => {
  const response = await openaiApi.post<OpenAIResponse>('/chat/completions', request);
  return response.data;
};
```

#### 4.1.3 创建AI聊天组件

1. 创建 `src/components/AIChat.tsx` 文件：

```tsx
import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { callOpenAI, setOpenAIKey } from '../services/api';
import { Send, Loader2, Key, X } from 'lucide-react';

interface AIChatProps {
  defaultPrompt?: string;
  title?: string;
  description?: string;
}

const AIChat: React.FC<AIChatProps> = ({
  defaultPrompt = '解释什么是人工智能',
  title = 'AI聊天演示',
  description = '与AI进行对话，测试大语言模型的能力',
}) => {
  const [messages, setMessages] = useState<Array<{
    role: 'user' | 'assistant';
    content: string;
  }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<{
    message: string;
  }>();

  useEffect(() => {
    // 加载保存的API密钥
    const savedApiKey = localStorage.getItem('openai-api-key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
      setOpenAIKey(savedApiKey);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const onSubmit = async (data: { message: string }) => {
    if (!apiKey) {
      setShowApiKeyInput(true);
      return;
    }

    const userMessage = {
      role: 'user' as const,
      content: data.message,
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    reset();

    try {
      const response = await callOpenAI({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: '你是一个帮助用户学习AI的助手，回答要清晰易懂，适合初学者。',
          },
          ...messages,
          userMessage,
        ],
        temperature: 0.7,
        max_tokens: 1000,
      });

      const assistantMessage = {
        role: 'assistant' as const,
        content: response.choices[0].message.content,
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      const errorMessage = {
        role: 'assistant' as const,
        content: '抱歉，API调用失败。请检查你的API密钥是否正确，或者稍后再试。',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('openai-api-key', apiKey);
    setOpenAIKey(apiKey);
    setShowApiKeyInput(false);
  };

  return (
    <div className="w-full p-4 border rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          {description && <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>}
        </div>
        {!apiKey && (
          <button
            onClick={() => setShowApiKeyInput(true)}
            className="flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200"
          >
            <Key size={16} className="mr-1" />
            设置API密钥
          </button>
        )}
      </div>

      {showApiKeyInput && (
        <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900 rounded-md">
          <h4 className="font-medium mb-2">设置OpenAI API密钥</h4>
          <p className="text-sm mb-3">
            要使用此功能，你需要一个OpenAI API密钥。你可以在
            <a 
              href="https://platform.openai.com/account/api-keys" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
            >
              OpenAI平台
            </a>
            获取。
          </p>
          <form onSubmit={handleApiKeySubmit} className="flex">
            <input
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-..."
              className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
            >
              保存
            </button>
            <button
              type="button"
              onClick={() => setShowApiKeyInput(false)}
              className="ml-2 px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              <X size={18} />
            </button>
          </form>
        </div>
      )}

      <div className="w-full h-96 border rounded-md p-4 overflow-y-auto mb-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <p>开始与AI对话吧！</p>
            <p className="text-sm mt-1">输入你的问题，AI会为你解答。</p>
          </div>
        ) : (
          messages.map((message, index) => (
            <div key={index} className={`mb-4 ${message.role === 'user' ? 'flex justify-end' : 'flex'}`}>
              <div className={`max-w-[80%] p-3 rounded-lg ${message.role === 'user' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-tr-none' : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-none'}`}>
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-none">
              <div className="flex items-center">
                <Loader2 size={16} className="animate-spin mr-2" />
                <p>AI正在思考...</p>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex">
        <input
          type="text"
          {...register('message', { required: '请输入消息' })}
          placeholder="输入你的问题..."
          className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
        </button>
      </form>
      {errors.message && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
      )}
    </div>
  );
};

export default AIChat;
```

### 4.2 集成图像生成API

#### 4.2.1 创建Replicate API服务

1. 更新 `src/services/api.ts` 文件，添加Replicate API支持：

```tsx
// 现有OpenAI代码...

export interface ReplicateRequest {
  version: string;
  input: {
    prompt: string;
    width?: number;
    height?: number;
    num_outputs?: number;
    prompt_strength?: number;
    negative_prompt?: string;
  };
}

export interface ReplicateResponse {
  id: string;
  version: string;
  status: string;
  input: {
    prompt: string;
    width: number;
    height: number;
  };
  output: string[];
  error: string | null;
}

export const replicateApi = axios.create({
  baseURL: 'https://api.replicate.com/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setReplicateKey = (apiKey: string) => {
  replicateApi.defaults.headers.common['Authorization'] = `Token ${apiKey}`;
};

export const callReplicate = async (request: ReplicateRequest): Promise<ReplicateResponse> => {
  const response = await replicateApi.post<ReplicateResponse>('/predictions', request);
  return response.data;
};

export const getReplicatePrediction = async (predictionId: string): Promise<ReplicateResponse> => {
  const response = await replicateApi.get<ReplicateResponse>(`/predictions/${predictionId}`);
  return response.data;
};
```

#### 4.2.2 创建图像生成组件

1. 创建 `src/components/ImageGenerator.tsx` 文件：

```tsx
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { callReplicate, getReplicatePrediction, setReplicateKey } from '../services/api';
import { Generate, Loader2, Key, X } from 'lucide-react';

interface ImageGeneratorProps {
  defaultPrompt?: string;
  title?: string;
  description?: string;
}

const ImageGenerator: React.FC<ImageGeneratorProps> = ({
  defaultPrompt = '一只可爱的小猫在花园里玩耍',
  title = '图像生成演示',
  description = '使用AI生成图像，测试图像生成模型的能力',
}) => {
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [predictionId, setPredictionId] = useState<string>('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<{
    prompt: string;
    negativePrompt: string;
    width: number;
    height: number;
  }>({
    defaultValues: {
      prompt: defaultPrompt,
      negativePrompt: '模糊, 变形, 低质量',
      width: 512,
      height: 512,
    },
  });

  useEffect(() => {
    // 加载保存的API密钥
    const savedApiKey = localStorage.getItem('replicate-api-key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
      setReplicateKey(savedApiKey);
    }
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (predictionId) {
      interval = setInterval(async () => {
        try {
          const response = await getReplicatePrediction(predictionId);
          if (response.status === 'succeeded' && response.output) {
            setImages(response.output);
            setIsGenerating(false);
            setPredictionId('');
            clearInterval(interval);
          } else if (response.status === 'failed' && response.error) {
            console.error('Error generating image:', response.error);
            setIsGenerating(false);
            setPredictionId('');
            clearInterval(interval);
          }
        } catch (error) {
          console.error('Error checking prediction status:', error);
          clearInterval(interval);
        }
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [predictionId]);

  const onSubmit = async (data: {
    prompt: string;
    negativePrompt: string;
    width: number;
    height: number;
  }) => {
    if (!apiKey) {
      setShowApiKeyInput(true);
      return;
    }

    setIsGenerating(true);
    setImages([]);

    try {
      const response = await callReplicate({
        version: 'a9758cbfbd5f3c2094457d996681af52552901775aa2d6dd0b17fd15df959bef', // Stable Diffusion v1.5
        input: {
          prompt: data.prompt,
          negative_prompt: data.negativePrompt,
          width: data.width,
          height: data.height,
          num_outputs: 1,
          prompt_strength: 0.8,
        },
      });

      setPredictionId(response.id);
    } catch (error) {
      console.error('Error generating image:', error);
      setIsGenerating(false);
    }
  };

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('replicate-api-key', apiKey);
    setReplicateKey(apiKey);
    setShowApiKeyInput(false);
  };

  return (
    <div className="w-full p-4 border rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          {description && <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>}
        </div>
        {!apiKey && (
          <button
            onClick={() => setShowApiKeyInput(true)}
            className="flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200"
          >
            <Key size={16} className="mr-1" />
            设置API密钥
          </button>
        )}
      </div>

      {showApiKeyInput && (
        <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900 rounded-md">
          <h4 className="font-medium mb-2">设置Replicate API密钥</h4>
          <p className="text-sm mb-3">
            要使用此功能，你需要一个Replicate API密钥。你可以在
            <a 
              href="https://replicate.com/account/api-tokens" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
            >
              Replicate平台
            </a>
            获取。
          </p>
          <form onSubmit={handleApiKeySubmit} className="flex">
            <input
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="r8_..."
              className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
            >
              保存
            </button>
            <button
              type="button"
              onClick={() => setShowApiKeyInput(false)}
              className="ml-2 px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              <X size={18} />
            </button>
          </form>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-6">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium mb-1">提示词</label>
          <input
            id="prompt"
            type="text"
            {...register('prompt', { required: '请输入提示词' })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isGenerating}
          />
          {errors.prompt && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.prompt.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="negativePrompt" className="block text-sm font-medium mb-1">负面提示词</label>
          <input
            id="negativePrompt"
            type="text"
            {...register('negativePrompt')}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isGenerating}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="width" className="block text-sm font-medium mb-1">宽度</label>
            <input
              id="width"
              type="number"
              {...register('width', { min: 256, max: 1024 })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isGenerating}
            />
          </div>
          <div>
            <label htmlFor="height" className="block text-sm font-medium mb-1">高度</label>
            <input
              id="height"
              type="number"
              {...register('height', { min: 256, max: 1024 })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isGenerating}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isGenerating}
          className="w-full flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isGenerating ? (
            <>
              <Loader2 size={18} className="animate-spin mr-2" />
              生成中...
            </>
          ) : (
            <>
              <Generate size={18} className="mr-2" />
              生成图像
            </>
          )}
        </button>
      </form>

      {images.length > 0 && (
        <div className="mt-6">
          <h4 className="text-sm font-medium mb-2">生成结果</h4>
          <div className="grid grid-cols-1 gap-4">
            {images.map((image, index) => (
              <div key={index} className="border rounded-md overflow-hidden">
                <img src={image} alt={`Generated image ${index + 1}`} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
```

### 4.3 在章节页面中集成AI工具

1. 更新 `src/pages/Chapter.tsx` 文件，添加AI工具组件：

```tsx
import AIChat from '../components/AIChat';
import ImageGenerator from '../components/ImageGenerator';

// 在组件中
// ...

{/* 集成AI聊天 */}
{section.id === '3' && (
  <div className="mt-8">
    <AIChat
      title="AI聊天演示"
      description="与大语言模型进行对话，测试其理解和生成能力"
      defaultPrompt="解释什么是提示词工程"
    />
  </div>
)}

{/* 集成图像生成 */}
{section.id === '4' && (
  <div className="mt-8">
    <ImageGenerator
      title="图像生成演示"
      description="使用AI生成图像，测试图像生成模型的能力"
      defaultPrompt="一个未来风格的城市景观，有飞行汽车和高楼大厦"
    />
  </div>
)}
```

### 4.4 创建AI工具集成页面

1. 创建 `src/pages/AITools.tsx` 文件：

```tsx
import React from 'react';
import AIChat from '../components/AIChat';
import ImageGenerator from '../components/ImageGenerator';
import { BookOpen, MessageSquare, Image } from 'lucide-react';

const AITools: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span className="font-bold text-lg">AI零基础教程</span>
          </a>
          <div className="flex items-center space-x-4">
            <a href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
              首页
            </a>
            <a href="/ai-tools" className="text-blue-600 dark:text-blue-400 font-medium">
              AI工具
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">AI工具集成演示</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-xl font-medium">AI聊天</h2>
            </div>
            <AIChat
              title="与AI对话"
              description="测试大语言模型的理解和生成能力"
              defaultPrompt="解释什么是人工智能，用简单易懂的语言"
            />
          </div>

          <div>
            <div className="flex items-center mb-4">
              <Image className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-xl font-medium">图像生成</h2>
            </div>
            <ImageGenerator
              title="AI图像生成"
              description="使用AI生成各种风格的图像"
              defaultPrompt="一个宁静的森林场景，有阳光透过树叶洒下"
            />
          </div>
        </div>

        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900 rounded-lg">
          <h2 className="text-xl font-medium mb-4">使用说明</h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>要使用这些AI工具，你需要相应的API密钥。</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>API密钥将保存在你的浏览器本地存储中，不会被发送到任何服务器。</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>使用这些工具可能会产生API调用费用，请确保你了解相关的 pricing。</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>生成的内容仅供学习和演示 purposes，请勿用于商业或非法用途。</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AITools;
```

2. 更新 `src/App.tsx` 文件，添加AI工具页面路由：

```tsx
import AITools from './pages/AITools';

// 在路由配置中
<Route path="/ai-tools" element={<AITools />} />
```

## 5. 测试步骤

### 5.1 AI聊天功能测试

1. 启动开发服务器：
   ```bash
   npm run dev
   ```

2. 打开浏览器并访问 `http://localhost:5173/AI-Tutorial/ai-tools`

3. 测试AI聊天功能：
   - 点击"设置API密钥"按钮
   - 输入你的OpenAI API密钥
   - 在聊天输入框中输入问题
   - 点击发送按钮
   - 验证AI是否返回合理的回答

4. 测试不同类型的问题：
   - 技术问题："解释什么是机器学习"
   - 创意问题："写一首关于AI的诗"
   - 实用问题："如何使用AI提高工作效率"

### 5.2 图像生成功能测试

1. 访问 `http://localhost:5173/AI-Tutorial/ai-tools` 页面

2. 测试图像生成功能：
   - 点击"设置API密钥"按钮
   - 输入你的Replicate API密钥
   - 在提示词输入框中输入图像描述
   - 调整宽度和高度参数
   - 点击"生成图像"按钮
   - 等待图像生成完成
   - 验证生成的图像是否符合描述

3. 测试不同类型的提示词：
   - 风景："一个美丽的海滩日落场景"
   - 人物："一个穿着太空服的宇航员"
   - 创意："一个由数字组成的抽象艺术"

### 5.3 集成测试

1. 导航到包含AI工具集成的章节（如第三章和第四章）

2. 测试章节中的AI工具：
   - 验证AI聊天组件是否正常工作
   - 验证图像生成组件是否正常工作
   - 验证API密钥设置是否持久化

3. 测试响应式设计：
   - 在不同屏幕尺寸上测试AI工具组件
   - 验证在移动设备上的可用性

## 6. 常见问题及解决方案

### 6.1 API调用问题

**问题**：API调用失败或返回错误
**解决方案**：
- 检查API密钥是否正确
- 验证API密钥是否有足够的权限
- 检查网络连接是否正常
- 查看控制台错误信息以获取详细信息

### 6.2 图像生成问题

**问题**：图像生成速度慢或失败
**解决方案**：
- 减少图像尺寸（宽度和高度）
- 简化提示词
- 检查Replicate API的使用限制
- 稍后再试，可能是API服务器繁忙

### 6.3 性能问题

**问题**：AI工具组件加载缓慢
**解决方案**：
- 实现组件的懒加载
- 优化API调用逻辑
- 考虑使用缓存来减少重复API调用

### 6.4 安全性问题

**问题**：API密钥的安全存储
**解决方案**：
- API密钥仅存储在浏览器的localStorage中
- 确保不在代码中硬编码API密钥
- 提醒用户保护好自己的API密钥

## 7. 总结

本开发指导文件详细说明了如何实现AI教程项目的AI工具集成功能。通过集成OpenAI API和Replicate API，项目将获得以下好处：

- **实践体验**：用户可以直接在教程中体验AI工具的使用
- **互动学习**：通过实际操作加深对AI概念的理解
- **实用技能**：学习如何调用AI API，为实际应用做准备
- **内容丰富**：增加了教程的实用性和吸引力

这些AI工具集成将使教程成为一个更加全面、互动的学习平台，帮助用户不仅了解AI的理论知识，还能掌握实际应用技能。