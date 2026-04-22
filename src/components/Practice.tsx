import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface PracticeProps {
  title: string;
  description: string;
  tasks: {
    id: string;
    task: string;
    hints?: string[];
    solution?: string;
  }[];
  onComplete?: () => void;
}

const Practice: React.FC<PracticeProps> = ({ 
  title, 
  description, 
  tasks, 
  onComplete 
}) => {
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [showHints, setShowHints] = useState<Set<string>>(new Set());
  const [showSolutions, setShowSolutions] = useState<Set<string>>(new Set());

  const handleTaskComplete = (taskId: string) => {
    const newCompletedTasks = new Set(completedTasks);
    if (newCompletedTasks.has(taskId)) {
      newCompletedTasks.delete(taskId);
    } else {
      newCompletedTasks.add(taskId);
    }
    setCompletedTasks(newCompletedTasks);

    // 检查是否所有任务都已完成
    if (newCompletedTasks.size === tasks.length && onComplete) {
      onComplete();
    }
  };

  const toggleHints = (taskId: string) => {
    const newShowHints = new Set(showHints);
    if (newShowHints.has(taskId)) {
      newShowHints.delete(taskId);
    } else {
      newShowHints.add(taskId);
    }
    setShowHints(newShowHints);
  };

  const toggleSolution = (taskId: string) => {
    const newShowSolutions = new Set(showSolutions);
    if (newShowSolutions.has(taskId)) {
      newShowSolutions.delete(taskId);
    } else {
      newShowSolutions.add(taskId);
    }
    setShowSolutions(newShowSolutions);
  };

  const isAllCompleted = completedTasks.size === tasks.length;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>

      <div className="space-y-6">
        {tasks.map((task) => {
          const isCompleted = completedTasks.has(task.id);
          const isHintsVisible = showHints.has(task.id);
          const isSolutionVisible = showSolutions.has(task.id);

          return (
            <div key={task.id} className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {task.task}
                </h3>
                <button
                  onClick={() => handleTaskComplete(task.id)}
                  className={`p-2 rounded-full ${isCompleted 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700' 
                  }`}
                  aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <div className="h-5 w-5 border border-gray-300 dark:border-gray-600 rounded-full" />
                  )}
                </button>
              </div>

              {task.hints && (
                <div className="mt-3">
                  <button
                    onClick={() => toggleHints(task.id)}
                    className="text-sm text-primary-600 dark:text-primary-400 hover:underline mb-2"
                  >
                    {isHintsVisible ? '隐藏提示' : '显示提示'}
                  </button>
                  {isHintsVisible && (
                    <div className="pl-4 border-l-2 border-blue-200 dark:border-blue-800">
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        {task.hints.map((hint, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 text-blue-500">💡</span>
                            {hint}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {task.solution && (
                <div className="mt-3">
                  <button
                    onClick={() => toggleSolution(task.id)}
                    className="text-sm text-primary-600 dark:text-primary-400 hover:underline mb-2"
                  >
                    {isSolutionVisible ? '隐藏解决方案' : '显示解决方案'}
                  </button>
                  {isSolutionVisible && (
                    <div className="pl-4 border-l-2 border-green-200 dark:border-green-800">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {task.solution}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {isAllCompleted && (
        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <div className="flex items-center">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <h3 className="font-medium text-green-700 dark:text-green-300">
              所有练习已完成！
            </h3>
          </div>
          <p className="mt-2 text-sm text-green-600 dark:text-green-400">
            恭喜你完成了所有练习任务。继续保持良好的学习状态！
          </p>
        </div>
      )}
    </div>
  );
};

export default Practice;
