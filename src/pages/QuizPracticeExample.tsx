import React from 'react';
import Quiz from '../components/Quiz';
import Practice from '../components/Practice';
import { useTranslation } from 'react-i18next';

const QuizPracticeExample: React.FC = () => {
  const { t } = useTranslation();

  // 示例测验问题
  const quizQuestions = [
    {
      id: 'q1',
      question: '以下哪个是人工智能的定义？',
      options: [
        '一种模拟人类智能的计算机系统',
        '一种只能执行预设指令的程序',
        '一种只能处理数值计算的工具',
        '一种只能识别图像的技术'
      ],
      correctAnswer: 0,
      explanation: '人工智能是一种模拟人类智能的计算机系统，它可以学习、推理和解决问题。'
    },
    {
      id: 'q2',
      question: '以下哪种是大型语言模型的例子？',
      options: [
        'Microsoft Word',
        'GPT-4',
        'Excel',
        'Photoshop'
      ],
      correctAnswer: 1,
      explanation: 'GPT-4是由OpenAI开发的大型语言模型，能够生成人类般的文本。'
    },
    {
      id: 'q3',
      question: '提示工程（Prompt Engineering）是指什么？',
      options: [
        '设计和优化提示词以获得更好的AI响应',
        '构建AI模型的过程',
        '训练AI模型的技术',
        '评估AI模型性能的方法'
      ],
      correctAnswer: 0,
      explanation: '提示工程是指设计和优化提示词，以引导AI模型产生更准确、相关和有用的响应。'
    }
  ];

  // 示例练习任务
  const practiceTasks = [
    {
      id: 'task1',
      task: '尝试使用GPT生成一篇关于人工智能的简短文章',
      hints: [
        '使用明确的指令，例如："写一篇300字关于人工智能的文章"',
        '可以指定文章的风格，例如："使用通俗易懂的语言"',
        '可以要求包含具体例子，例如："提到至少一个AI的实际应用"'
      ],
      solution: '提示词示例："写一篇300字关于人工智能的文章，使用通俗易懂的语言，并提到至少一个AI的实际应用。"'
    },
    {
      id: 'task2',
      task: '使用AI工具生成一张与人工智能相关的图像',
      hints: [
        '使用清晰的描述，例如："未来的AI助手帮助人类工作的场景"',
        '可以指定风格，例如："科幻风格，明亮的色调"',
        '可以指定细节，例如："包含现代办公环境和先进的AI界面"'
      ],
      solution: '提示词示例："未来的AI助手帮助人类工作的场景，科幻风格，明亮的色调，包含现代办公环境和先进的AI界面。"'
    },
    {
      id: 'task3',
      task: '练习使用AI进行代码编写',
      hints: [
        '明确指定编程语言，例如："使用Python"',
        '描述具体功能，例如："写一个计算斐波那契数列的函数"',
        '可以要求添加注释，例如："添加详细的代码注释"'
      ],
      solution: '提示词示例："使用Python写一个计算斐波那契数列的函数，并添加详细的代码注释。"'
    }
  ];

  const handleQuizComplete = (score: number, total: number) => {
    console.log(`Quiz completed with score: ${score}/${total}`);
  };

  const handlePracticeComplete = () => {
    console.log('Practice completed');
  };

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        {t('hero.title')} - 练习与测验
      </h1>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          知识测验
        </h2>
        <Quiz 
          questions={quizQuestions} 
          title="AI基础知识测验" 
          onComplete={handleQuizComplete} 
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          实践练习
        </h2>
        <Practice 
          title="AI工具实践练习" 
          description="通过以下练习，实践使用AI工具的技巧和方法" 
          tasks={practiceTasks} 
          onComplete={handlePracticeComplete} 
        />
      </div>
    </div>
  );
};

export default QuizPracticeExample;
