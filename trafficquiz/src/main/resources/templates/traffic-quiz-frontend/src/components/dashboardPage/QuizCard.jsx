// "use client";
// import React from "react";
// import styles from "./QuizCard.module.css";
//
// function QuizCard({ icon, title, level, questions, duration, completed }) {
//   return (
//     <article className={styles.card}>
//       <span className={styles.icon}>{icon}</span>
//       <div className={styles.content}>
//         <div className={styles.titleWrapper}>
//           <h3 className={styles.title}>{title}</h3>
//           {completed && (
//             <span className={styles.completedBadge}>Completed ✓</span>
//           )}
//         </div>
//         <div className={styles.level}>{level}</div>
//         <div className={styles.stats}>
//           <span>📝 {questions} questions</span>
//           <span>⏱️ {duration} min</span>
//         </div>
//         <button
//           className={completed ? styles.reviewButton : styles.startButton}
//         >
//           {completed ? "Review Quiz" : "Start Quiz"}
//         </button>
//       </div>
//     </article>
//   );
// }
//
// export default QuizCard;


"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./QuizCard.module.css";

function QuizCard({ id, icon, title, description, questions, duration, completed }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (!id) {
            console.error("Quiz ID is missing");
            return;
        }

        if (completed) {
            navigate(`/quiz/${id}/review`);
        } else {
            navigate(`/quiz/${id}/start`);
        }
    };

    return (
        <article className={styles.card}>
            <span className={styles.icon}>{icon}</span>
            <div className={styles.content}>
                <div className={styles.titleWrapper}>
                    <h3 className={styles.title}>{title}</h3>
                    {completed && (
                        <span className={styles.completedBadge}>Завершено  ✓</span>
                    )}
                </div>

                <div className={styles.level}>{description}</div>

                <div className={styles.stats}>
                    <span>📝 {questions} вопросов</span>
                    <span>⏱️ {duration} минут</span>
                </div>

                <button
                    className={completed ? styles.reviewButton : styles.startButton}
                    onClick={handleClick}
                >
                    {completed ? "Пройти повторно" : "Начать тест"}
                </button>
            </div>
        </article>
    );
}

export default QuizCard;

