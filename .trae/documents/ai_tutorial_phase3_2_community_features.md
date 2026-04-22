# AI教程项目 - 第三阶段第二子阶段：社区功能

## 1. 概述

本开发指导文件详细说明如何实现AI教程项目的社区功能，作为第三阶段的第二个子阶段。通过添加评论和讨论功能，以及实现用户贡献机制，将使教程成为一个更加互动和社区驱动的学习平台。

## 2. 目标

- 添加评论和讨论功能
- 实现用户贡献机制
- 建立社区互动平台
- 鼓励用户参与和知识分享

## 3. 技术栈

- React 18 + TypeScript
- Firebase (用于实时数据库和认证)
- React Firebase Hooks (用于React集成)
- Markdown-it (用于评论内容格式化)
- UUID (用于生成唯一ID)

## 4. 实施步骤

### 4.1 集成Firebase

#### 4.1.1 安装依赖

```bash
npm install firebase react-firebase-hooks uuid markdown-it
```

#### 4.1.2 配置Firebase

1. 创建 `src/firebase.ts` 文件：

```tsx
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
```

### 4.2 实现用户认证

1. 创建 `src/components/Auth.tsx` 文件：

```tsx
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { Google, LogOut } from 'lucide-react';

const Auth: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (loading) {
    return <div>加载中...</div>;
  }

  if (error) {
    return <div>错误: {error.message}</div>;
  }

  if (user) {
    return (
      <div className="flex items-center space-x-2">
        <img 
          src={user.user.photoURL || ''} 
          alt={user.user.displayName || '用户头像'}
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm font-medium">{user.user.displayName}</span>
        <button
          onClick={() => auth.signOut()}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="退出登录"
        >
          <LogOut size={16} />
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signInWithGoogle()}
      className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 border rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
    >
      <Google size={16} />
      <span>使用Google登录</span>
    </button>
  );
};

export default Auth;
```

### 4.3 实现评论功能

1. 创建 `src/components/Comments.tsx` 文件：

```tsx
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { collection, addDoc, orderBy, query, where, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { Send, ThumbsUp, ThumbsDown, Edit, Trash2, Clock, User } from 'lucide-react';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

interface Comment {
  id: string;
  content: string;
  author: {
    id: string;
    name: string;
    photoURL: string;
  };
  createdAt: Date;
  likes: string[];
  dislikes: string[];
  parentId?: string;
}

interface CommentsProps {
  chapterId: string;
  sectionId?: string;
}

const Comments: React.FC<CommentsProps> = ({ chapterId, sectionId }) => {
  const [user] = useAuthState(auth);
  const [comment, setComment] = useState('');
  const [editingComment, setEditingComment] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');

  const commentsQuery = query(
    collection(db, 'comments'),
    where('chapterId', '==', chapterId),
    where('sectionId', '==', sectionId || ''),
    where('parentId', '==', null),
    orderBy('createdAt', 'desc')
  );

  const [commentsSnapshot, loading, error] = useCollection(commentsQuery);

  const comments = commentsSnapshot?.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Comment[] || [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !comment.trim()) return;

    await addDoc(collection(db, 'comments'), {
      content: comment,
      chapterId,
      sectionId: sectionId || '',
      author: {
        id: user.uid,
        name: user.displayName || '匿名用户',
        photoURL: user.photoURL || '',
      },
      createdAt: new Date(),
      likes: [],
      dislikes: [],
      parentId: null,
    });

    setComment('');
  };

  const handleLike = async (commentId: string) => {
    if (!user) return;

    const commentRef = doc(db, 'comments', commentId);
    const [commentSnapshot] = useDocument(commentRef);
    const commentData = commentSnapshot?.data() as Comment;

    if (!commentData) return;

    let newLikes = [...commentData.likes];
    let newDislikes = [...commentData.dislikes];

    if (newLikes.includes(user.uid)) {
      newLikes = newLikes.filter(id => id !== user.uid);
    } else {
      newLikes.push(user.uid);
      newDislikes = newDislikes.filter(id => id !== user.uid);
    }

    await updateDoc(commentRef, {
      likes: newLikes,
      dislikes: newDislikes,
    });
  };

  const handleDislike = async (commentId: string) => {
    if (!user) return;

    const commentRef = doc(db, 'comments', commentId);
    const [commentSnapshot] = useDocument(commentRef);
    const commentData = commentSnapshot?.data() as Comment;

    if (!commentData) return;

    let newLikes = [...commentData.likes];
    let newDislikes = [...commentData.dislikes];

    if (newDislikes.includes(user.uid)) {
      newDislikes = newDislikes.filter(id => id !== user.uid);
    } else {
      newDislikes.push(user.uid);
      newLikes = newLikes.filter(id => id !== user.uid);
    }

    await updateDoc(commentRef, {
      likes: newLikes,
      dislikes: newDislikes,
    });
  };

  const handleEdit = (comment: Comment) => {
    setEditingComment(comment.id);
    setEditContent(comment.content);
  };

  const handleSaveEdit = async (commentId: string) => {
    if (!user || !editContent.trim()) return;

    const commentRef = doc(db, 'comments', commentId);
    await updateDoc(commentRef, {
      content: editContent,
    });

    setEditingComment(null);
    setEditContent('');
  };

  const handleDelete = async (commentId: string) => {
    if (!user) return;

    const commentRef = doc(db, 'comments', commentId);
    await deleteDoc(commentRef);
  };

  if (loading) {
    return <div className="p-4">加载评论中...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600">加载评论失败: {error.message}</div>;
  }

  return (
    <div className="w-full p-4 border rounded-lg">
      <h3 className="text-lg font-medium mb-4">评论与讨论</h3>

      {user ? (
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-2">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="分享你的想法或问题..."
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!comment.trim()}
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
            >
              <Send size={16} className="mr-2" />
              发布评论
            </button>
          </div>
        </form>
      ) : (
        <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900 rounded-md">
          <p className="text-sm">
            请先登录以发表评论。
          </p>
        </div>
      )}

      <div className="space-y-4">
        {comments.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            还没有评论，快来发表第一条评论吧！
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="border rounded-md p-4">
              <div className="flex items-start space-x-3">
                <img 
                  src={comment.author.photoURL || 'https://via.placeholder.com/40'} 
                  alt={comment.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{comment.author.name}</h4>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <Clock size={12} className="mr-1" />
                        <span>{new Date(comment.createdAt.toDate()).toLocaleString()}</span>
                      </div>
                    </div>
                    {user && user.uid === comment.author.id && (
                      <div className="flex space-x-1">
                        <button
                          onClick={() => handleEdit(comment)}
                          className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                          aria-label="编辑评论"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(comment.id)}
                          className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-red-500"
                          aria-label="删除评论"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {editingComment === comment.id ? (
                    <div className="mt-2">
                      <textarea
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                      />
                      <div className="flex justify-end space-x-2 mt-2">
                        <button
                          onClick={() => setEditingComment(null)}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          取消
                        </button>
                        <button
                          onClick={() => handleSaveEdit(comment.id)}
                          className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                          保存
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-2" dangerouslySetInnerHTML={{ __html: md.render(comment.content) }} />
                  )}
                  
                  <div className="flex items-center space-x-4 mt-3">
                    <button
                      onClick={() => handleLike(comment.id)}
                      className={`flex items-center space-x-1 ${user && comment.likes.includes(user.uid) ? 'text-blue-500' : 'text-gray-500'}`}
                    >
                      <ThumbsUp size={16} />
                      <span>{comment.likes.length}</span>
                    </button>
                    <button
                      onClick={() => handleDislike(comment.id)}
                      className={`flex items-center space-x-1 ${user && comment.dislikes.includes(user.uid) ? 'text-red-500' : 'text-gray-500'}`}
                    >
                      <ThumbsDown size={16} />
                      <span>{comment.dislikes.length}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
```

### 4.4 实现用户贡献机制

1. 创建 `src/components/ContributionForm.tsx` 文件：

```tsx
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { FileText, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface Contribution {
  title: string;
  content: string;
  type: 'article' | 'tutorial' | 'resource';
  tags: string[];
  author: {
    id: string;
    name: string;
    photoURL: string;
  };
  createdAt: Date;
  status: 'pending' | 'approved' | 'rejected';
}

const ContributionForm: React.FC = () => {
  const [user] = useAuthState(auth);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<{
    title: string;
    content: string;
    type: 'article' | 'tutorial' | 'resource';
    tags: string;
  }>();

  const onSubmit = async (data: {
    title: string;
    content: string;
    type: 'article' | 'tutorial' | 'resource';
    tags: string;
  }) => {
    if (!user) return;

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'contributions'), {
        title: data.title,
        content: data.content,
        type: data.type,
        tags: data.tags.split(',').map(tag => tag.trim()),
        author: {
          id: user.uid,
          name: user.displayName || '匿名用户',
          photoURL: user.photoURL || '',
        },
        createdAt: new Date(),
        status: 'pending' as const,
      });

      setSuccess(true);
      reset();

      // 3秒后重置成功状态
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting contribution:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user) {
    return (
      <div className="p-6 border rounded-lg">
        <h3 className="text-lg font-medium mb-4">贡献内容</h3>
        <div className="p-4 bg-yellow-50 dark:bg-yellow-900 rounded-md">
          <p className="text-sm">
            请先登录以贡献内容。
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 border rounded-lg">
      <h3 className="text-lg font-medium mb-4">贡献内容</h3>

      {success && (
        <div className="mb-4 p-4 bg-green-50 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md">
          <p>贡献提交成功！我们会尽快审核你的内容。</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">标题</label>
          <input
            id="title"
            type="text"
            {...register('title', { required: '请输入标题' })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium mb-1">内容类型</label>
          <select
            id="type"
            {...register('type', { required: '请选择内容类型' })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">请选择</option>
            <option value="article">文章</option>
            <option value="tutorial">教程</option>
            <option value="resource">资源</option>
          </select>
          {errors.type && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.type.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-1">内容</label>
          <textarea
            id="content"
            {...register('content', { required: '请输入内容' })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={6}
            placeholder="请输入你的内容，支持Markdown格式"
          />
          {errors.content && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.content.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm font-medium mb-1">标签</label>
          <input
            id="tags"
            type="text"
            {...register('tags')}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="请输入标签，用逗号分隔"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
          >
            {isSubmitting ? (
              <>
                <FileText size={16} className="mr-2 animate-spin" />
                提交中...
              </>
            ) : (
              <>
                <Send size={16} className="mr-2" />
                提交贡献
              </>
            )}
          </button>
        </div>
      </form>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-md">
        <h4 className="font-medium mb-2">贡献指南</h4>
        <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>• 请确保你的内容与AI相关</li>
          <li>• 内容应该是原创的，或者你有分享的权限</li>
          <li>• 请使用清晰的标题和结构</li>
          <li>• 支持Markdown格式，你可以使用它来格式化你的内容</li>
          <li>• 我们会审核所有贡献，通过后会在网站上发布</li>
        </ul>
      </div>
    </div>
  );
};

export default ContributionForm;
```

### 4.5 创建社区页面

1. 创建 `src/pages/Community.tsx` 文件：

```tsx
import React from 'react';
import Auth from '../components/Auth';
import Comments from '../components/Comments';
import ContributionForm from '../components/ContributionForm';
import { BookOpen, Users, FileText } from 'lucide-react';

const Community: React.FC = () => {
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
            <a href="/ai-tools" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
              AI工具
            </a>
            <a href="/community" className="text-blue-600 dark:text-blue-400 font-medium">
              社区
            </a>
            <Auth />
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">AI社区</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-xl font-medium">讨论区</h2>
            </div>
            <Comments chapterId="0" sectionId="community" />
          </div>

          <div>
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-xl font-medium">贡献内容</h2>
            </div>
            <ContributionForm />
          </div>
        </div>

        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900 rounded-lg">
          <h2 className="text-xl font-medium mb-4">社区规范</h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>尊重他人，保持友善和专业的交流态度</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>专注于AI相关的话题，保持讨论的相关性</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>分享有价值的内容和见解，避免 spam 和低质量的帖子</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>尊重知识产权，引用他人内容时请注明来源</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
              <span>遵守相关法律法规，不发布违法或有害的内容</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Community;
```

### 4.6 更新App.tsx，添加社区页面路由

1. 更新 `src/App.tsx` 文件：

```tsx
import Community from './pages/Community';

// 在路由配置中
<Route path="/community" element={<Community />} />
```

### 4.7 在章节页面中集成评论功能

1. 更新 `src/pages/Chapter.tsx` 文件：

```tsx
import Comments from '../components/Comments';

// 在组件中
// ...

{/* 集成评论功能 */}
<div className="mt-12">
  <Comments chapterId={id || '1'} sectionId={activeSectionId} />
</div>
```

## 5. 测试步骤

### 5.1 用户认证测试

1. 启动开发服务器：
   ```bash
   npm run dev
   ```

2. 打开浏览器并访问 `http://localhost:5173/AI-Tutorial/community`

3. 测试用户认证功能：
   - 点击"使用Google登录"按钮
   - 选择你的Google账号进行登录
   - 验证登录是否成功，是否显示用户头像和名称
   - 点击退出登录按钮，验证是否成功退出

### 5.2 评论功能测试

1. 登录后，在社区页面或章节页面测试评论功能：
   - 在评论输入框中输入内容
   - 点击"发布评论"按钮
   - 验证评论是否成功发布
   - 测试评论的编辑和删除功能
   - 测试评论的点赞和点踩功能

2. 测试未登录状态：
   - 退出登录
   - 尝试发表评论，验证是否显示登录提示

### 5.3 贡献功能测试

1. 登录后，在社区页面测试贡献功能：
   - 填写贡献表单，包括标题、内容类型、内容和标签
   - 点击"提交贡献"按钮
   - 验证贡献是否成功提交，是否显示成功提示

2. 测试未登录状态：
   - 退出登录
   - 访问贡献表单，验证是否显示登录提示

### 5.4 响应式测试

1. 在不同屏幕尺寸上测试社区功能：
   - 移动设备（320px - 480px）
   - 平板设备（481px - 768px）
   - 桌面设备（769px+）

2. 验证：
   - 布局是否适应不同屏幕尺寸
   - 功能是否在所有设备上正常工作
   - 交互元素是否易于点击

## 6. 常见问题及解决方案

### 6.1 认证问题

**问题**：Google登录失败
**解决方案**：
- 检查Firebase配置是否正确
- 确保在Firebase控制台中启用了Google认证
- 检查浏览器是否阻止了弹出窗口
- 验证网络连接是否正常

### 6.2 评论问题

**问题**：评论不显示或发布失败
**解决方案**：
- 检查Firebase数据库规则是否正确配置
- 验证用户是否已登录
- 检查网络连接是否正常
- 查看控制台错误信息

### 6.3 贡献问题

**问题**：贡献提交失败
**解决方案**：
- 检查Firebase数据库规则是否正确配置
- 验证表单是否填写完整
- 检查网络连接是否正常
- 查看控制台错误信息

### 6.4 性能问题

**问题**：社区页面加载缓慢
**解决方案**：
- 实现评论的分页加载
- 优化Firebase查询
- 考虑使用缓存策略
- 实现组件的懒加载

## 7. 总结

本开发指导文件详细说明了如何实现AI教程项目的社区功能。通过添加评论和讨论功能，以及实现用户贡献机制，项目将获得以下好处：

- **社区互动**：用户可以在教程中进行讨论，分享想法和问题
- **知识分享**：用户可以贡献自己的知识和资源
- **用户参与**：提高用户的参与度和粘性
- **内容丰富**：通过用户贡献不断丰富教程内容
- **学习社区**：建立一个围绕AI学习的社区生态

这些社区功能将使AI教程成为一个更加互动、开放和持续发展的学习平台，不仅提供知识，还能促进用户之间的交流和协作。