"use client";
import React, { useState } from "react";
import styles from "./QuizQuestion.module.css";
import QuestionProgress from "./QuestionProgress";
import AnswerOption from "./AnswerOption";
import NavigationButton from "./NavigationButton";

const QuizQuestion = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isHovered, setIsHovered] = useState(null);

  const answers = [
    {
      id: "A",
      text: "Accelerate through the intersection",
      correct: false,
    },
    {
      id: "B",
      text: "Stop and wait for the green light",
      correct: true,
    },
    {
      id: "C",
      text: "Honk your horn and proceed",
      correct: false,
    },
    {
      id: "D",
      text: "Make a quick U-turn",
      correct: false,
    },
  ];

  const checkAnswer = () => {
    setShowFeedback(true);
    setIsCorrect(selectedAnswer === "B");
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => prev + 1);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsCorrect(false);
  };

  return (
    <main className={styles.container}>
      <QuestionProgress current={currentQuestion} total={40} progress={12} />

      <section className={styles.questionContent}>
        <article className={styles.questionCard}>
          <img
            src="https://placehold.co/800x400"
            alt="Traffic Scenario"
            className={styles.questionImage}
          />
        </article>

        <h1 className={styles.questionText}>
          When approaching a yellow traffic light at an intersection, what is
          the correct action to take?
        </h1>

        <div className={styles.answersContainer}>
          {answers.map((answer) => (
            <AnswerOption
              key={answer.id}
              answer={answer}
              selected={selectedAnswer === answer.id}
              showFeedback={showFeedback}
              onSelect={setSelectedAnswer}
              isHovered={isHovered === answer.id}
              onHover={setIsHovered}
              onLeave={() => setIsHovered(null)}
            />
          ))}
        </div>

        <div className={styles.navigationContainer}>
          {!showFeedback ? (
            <div className={styles.checkButtonContainer}>
              <NavigationButton
                onClick={checkAnswer}
                disabled={!selectedAnswer}
                variant="check"
              >
                <span>Check</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={styles.nextIcon}
                >
                  <path
                    d="M9 19c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.06L14.94 11 8.47 4.53c-.293-.293-.293-.768 0-1.06s.768-.293 1.06 0l7 7c.293.293.293.768 0 1.06l-7 7c-.146.147-.338.22-.53.22z"
                    fill="white"
                  />
                </svg>
              </NavigationButton>
            </div>
          ) : (
            <div className={styles.nextButtonContainer}>
              <NavigationButton onClick={handleNext} variant="next">
                <span>Next</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={styles.nextIcon}
                >
                  <path
                    d="M9 19c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.06L14.94 11 8.47 4.53c-.293-.293-.293-.768 0-1.06s.768-.293 1.06 0l7 7c.293.293.293.768 0 1.06l-7 7c-.146.147-.338.22-.53.22z"
                    fill="white"
                  />
                </svg>
              </NavigationButton>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default QuizQuestion;
