import React from "react";
import styles from "./GeneratedDesign.module.css";

export function QuizCard({
  title,
  xp,
  questions,
  duration,
  progress,
  buttonText,
  image,
}) {
  return (
    <article className={styles.quizCard}>
      <div className={styles.quizContent}>
        <div className={styles.quizImage} />
        <div className={styles.quizInfo}>
          <div className={styles.quizHeader}>
            <h3 className={styles.quizTitle}>{title}</h3>
            <span className={styles.quizXp}>{xp}</span>
          </div>
          <div className={styles.quizStats}>
            <span className={styles.quizQuestions}>{questions}</span>
            <span>{duration}</span>
          </div>
        </div>
      </div>
      <button className={styles.quizButton}>{buttonText}</button>
    </article>
  );
}
