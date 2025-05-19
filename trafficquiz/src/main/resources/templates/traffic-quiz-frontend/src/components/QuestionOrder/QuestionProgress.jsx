import React from "react";
import styles from "./QuestionProgress.module.css";

const QuestionProgress = ({ current, total, progress }) => {
  return (
    <section className={styles.progressContainer}>
      <header className={styles.header}>
        <button className={styles.backButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 19c-.192 0-.384-.073-.53-.22l-7-7c-.293-.293-.293-.768 0-1.06l7-7c.293-.293.768-.293 1.06 0s.293.768 0 1.06L9.06 11l6.47 6.47c.293.293.293.768 0 1.06-.146.147-.338.22-.53.22z"
              fill="white"
            />
          </svg>
          <span className={styles.backText}>Back</span>
        </button>
        <div className={styles.questionCounter}>
          <span>
            Question {current}/{total}
          </span>
        </div>
      </header>
      <div className={styles.progressBarContainer}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default QuestionProgress;
