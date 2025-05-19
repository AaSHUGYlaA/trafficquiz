import React from "react";
import styles from "./QuizResults.module.css";

const ScoreDisplay = ({ score, totalQuestions }) => {
    const percentage = (score / totalQuestions) * 100;

    return (
        <header className={styles.scoreHeader}>
            <div className={styles.scoreCircle}>
                <span className={styles.scoreText}>{percentage.toFixed(0)}%</span>
            </div>
            <h1 className={styles.title}>Отлично!</h1>
            <p className={styles.subtitle}>Вы завершили квиз</p>
        </header>
    );
};

export default ScoreDisplay;
