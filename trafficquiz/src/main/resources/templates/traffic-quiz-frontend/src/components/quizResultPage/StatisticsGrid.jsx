import React from "react";
import styles from "./QuizResults.module.css";

const StatisticsGrid = ({ totalQuestions, correctAnswers, timeSpent }) => {
  return (
    <div className={styles.statsGrid}>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>Questions</span>
        <span className={styles.statValue}>{totalQuestions}</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>Correct</span>
        <span className={styles.statValue}>{correctAnswers}</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>Time</span>
        <span className={styles.statValue}>{timeSpent}</span>
      </div>
    </div>
  );
};

export default StatisticsGrid;
