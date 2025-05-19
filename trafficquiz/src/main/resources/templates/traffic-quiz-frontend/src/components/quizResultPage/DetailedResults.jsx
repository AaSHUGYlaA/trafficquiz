"use client";
import React, { useState } from "react";
import styles from "./QuizResults.module.css";

const DetailedResults = ({ answers }) => {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <section className={styles.detailedResults}>
      <div className={styles.resultsHeader}>
        <h2 className={styles.resultsTitle}>Detailed Results</h2>
        <button
          onClick={() => setShowAnswers(!showAnswers)}
          className={styles.toggleButton}
        >
          {showAnswers ? "Hide Answers" : "Show Answers"}
        </button>
      </div>

      {showAnswers && (
        <div className={styles.answersList}>
          {answers.map((answer, index) => (
            <div key={index} className={styles.answerItem}>
              <p className={styles.question}>{answer.question}</p>
              <div className={styles.answerDetails}>
                <span
                  className={`${styles.answer} ${answer.correct ? styles.correct : styles.incorrect}`}
                >
                  {answer.userAnswer}
                </span>
                <span className={styles.answerStatus}>
                  {answer.correct ? "✓ Correct" : "✗ Incorrect"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default DetailedResults;
