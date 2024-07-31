"use client";
import React, { useState } from "react";

export type QuestionType = {
  question: string;
  options: string[];
  answer: string;
};

export type MultipleChoiceQuestionProps = {
  questionData: QuestionType;
  correctAnswer: string;
};

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
  questionData,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (option: string) => {
    setSelectedAnswer(option);
    setIsAnswered(true);
  };

  const resetQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const isCorrect = selectedAnswer === questionData.answer;

  return (
    <div className="text-foreground">
      <p className="font-bold my-0">{questionData.question}</p>
      <ul className="space-y-2">
        {questionData.options.map((option, index) => (
          <li className="list-none" key={index}>
            <button
              onClick={() => handleAnswerClick(option)}
              className={`w-full text-left p-2 rounded text-white ${
                isAnswered
                  ? option === questionData.answer
                    ? "bg-green-200 text-green-800"
                    : option === selectedAnswer
                    ? "bg-red-200 text-red-800"
                    : "bg-gray-100 text-muted-foreground"
                  : "bg-muted-foreground hover:bg-muted-foreground/90"
              }`}
            >
              {String.fromCharCode(65 + index)}: {option}
            </button>
          </li>
        ))}
      </ul>
      {isAnswered && (
        <div className="mt-4">
          <p
            className={`font-semibold ${
              isCorrect ? "text-green-600" : "text-red-600"
            }`}
          >
            {isCorrect ? "Correct!" : "Incorrect. Try again!"}
          </p>
          {!isCorrect && (
            <button
              onClick={resetQuestion}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Retry
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export { MultipleChoiceQuestion };
