import React, { useState } from 'react';
import { Check, X, ChevronRight, Award } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizProps {
  questions: Question[];
  title?: string;
  onComplete?: (score: number, total: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ 
  questions, 
  title = "知识测验",
  onComplete 
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResult(true);
      if (onComplete) {
        const score = answers.filter((answer, index) => 
          answer === questions[index].correctAnswer
        ).length;
        onComplete(score, questions.length);
      }
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(false);
    }
  };

  const calculateScore = () => {
    return answers.filter((answer, index) => 
      answer === questions[index].correctAnswer
    ).length;
  };

  if (showResult) {
    const score = calculateScore();
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <div className="text-center mb-6">
          <Award className="h-16 w-16 text-primary-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {title}完成！
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            你的得分：{score} / {questions.length}
          </p>
        </div>
        <div className="space-y-4">
          {questions.map((question, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            return (
              <div key={question.id} className="border rounded-lg p-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                  {index + 1}. {question.question}
                </h3>
                <div className="space-y-2 mt-2">
                  {question.options.map((option, optionIndex) => (
                    <div 
                      key={optionIndex}
                      className={`flex items-center p-2 rounded ${userAnswer === optionIndex 
                        ? isCorrect 
                          ? 'bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800' 
                          : 'bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800' 
                        : 'bg-gray-50 dark:bg-gray-700/50' 
                      }`}
                    >
                      {userAnswer === optionIndex && (
                        <div className="mr-2">
                          {isCorrect ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <X className="h-4 w-4 text-red-500" />
                          )}
                        </div>
                      )}
                      <span className={`${userAnswer === optionIndex 
                        ? isCorrect 
                          ? 'text-green-700 dark:text-green-300 font-medium' 
                          : 'text-red-700 dark:text-red-300 font-medium' 
                        : 'text-gray-600 dark:text-gray-400' 
                      }`}>
                        {option}
                      </span>
                    </div>
                  ))}
                </div>
                {question.explanation && (
                  <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      {question.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h2>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            问题 {currentQuestionIndex + 1} / {questions.length}
          </span>
          <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div 
              className="bg-primary-600 h-2.5 rounded-full" 
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          {currentQuestion.question}
        </h3>
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = answers[currentQuestionIndex] === index;
            const isCorrect = index === currentQuestion.correctAnswer;
            const showFeedback = showExplanation && isSelected;
            
            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showExplanation}
                className={`w-full text-left p-3 rounded-lg border transition-colors ${showFeedback 
                  ? isCorrect 
                    ? 'bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-800' 
                    : 'bg-red-100 dark:bg-red-900/30 border-red-200 dark:border-red-800' 
                  : isSelected 
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' 
                    : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50' 
                }`}
              >
                <div className="flex items-center">
                  {showFeedback && (
                    <div className="mr-3">
                      {isCorrect ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                  )}
                  <span className={`${showFeedback 
                    ? isCorrect 
                      ? 'text-green-700 dark:text-green-300 font-medium' 
                      : 'text-red-700 dark:text-red-300 font-medium' 
                    : 'text-gray-700 dark:text-gray-300' 
                  }`}>
                    {option}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {showExplanation && currentQuestion.explanation && (
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              {currentQuestion.explanation}
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className={`px-4 py-2 rounded-lg transition-colors ${currentQuestionIndex === 0 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700' 
          }`}
        >
          上一题
        </button>
        <button
          onClick={handleNext}
          disabled={answers[currentQuestionIndex] === undefined && !showExplanation}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${answers[currentQuestionIndex] === undefined && !showExplanation 
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
            : 'bg-primary-600 text-white hover:bg-primary-700' 
          }`}
        >
          {isLastQuestion ? '完成测验' : '下一题'}
          <ChevronRight className="inline ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Quiz;
