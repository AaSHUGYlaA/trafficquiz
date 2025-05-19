"use client";
import React, { useState, useEffect } from "react";
import styles from "./QuizResults.module.css";
import ScoreDisplay from "./ScoreDisplay";
import StatisticsGrid from "./StatisticsGrid";
import DetailedResults from "./DetailedResults";
import { useLocation, useNavigate } from "react-router-dom";

const QuizResults = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const quizData = location.state ?? {};
  const { score, totalQuestions, userAnswers, questions, userId, quizId, timeSpent } = quizData;

  // Проверка данных
  useEffect(() => {
    console.log("📌 Данные квиза из location.state:", quizData);
    if (!userId || !quizId) {
      console.warn("🚨 Отсутствуют userId или quizId! Проверьте навигацию.");
    }
  }, [quizData]);

  // Функция для сохранения результата пользователя
  const saveUserScore = async (completionTime) => {
    try {
      if (!userId || !quizId || score == null) {
        console.warn("🚨 Отсутствуют данные:", { userId, quizId, score, completionTime });
        return Promise.reject(new Error("Отсутствуют необходимые данные"));
      }

      console.log("📤 Отправка балла:", { userId, quizId, score, completionTime });

      const response = await fetch("http://localhost:8080/api/user-scores/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          quizId,
          score,
          completionTime,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`❌ Ошибка при сохранении балла: ${errorText}`);
      }

      console.log("✅ Балл успешно сохранён");
      return Promise.resolve();
    } catch (error) {
      console.error("❌ Ошибка при сохранении балла:", error.message);
      return Promise.reject(error);
    }
  };

  // Сохранение балла пользователя при загрузке компонента
  useEffect(() => {
    if (userId && quizId && score !== undefined) {
      const completionTime = timeSpent || 30; // Используем время, переданное в данных квиза
      saveUserScore(completionTime)
          .then(() => console.log("✅ Балл успешно отправлен!"))
          .catch((error) => console.error("❌ Ошибка при отправке балла:", error));
    } else {
      console.warn("⏳ Ожидание правильных данных перед отправкой...");
    }
  }, [userId, quizId, score, timeSpent]);

  // Проверка наличия данных квиза
  if (!quizData) {
    return <p className="text-center text-red-500 text-lg">⚠️ Нет данных о квизе.</p>;
  }

  // Рассчитаем проценты
  const percentage = (score / totalQuestions) * 100;
  let message = "Продолжай тренироваться! ";
  let scoreClass = "low-score";
  let confetti = "";

  if (percentage >= 80) {
    message = "🏆 Отлично! Ты — чемпион квиза! ";
    scoreClass = "high-score";
    confetti = "🎉🎊";
  } else if (percentage >= 50) {
    message = "Хорошая работа! Ты уже близок! ";
    scoreClass = "medium-score";
  }

  return (
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <section className={styles.card}>
            <ScoreDisplay score={score} message={message} />

            <StatisticsGrid
                totalQuestions={totalQuestions}
                correctAnswers={userAnswers?.filter((answer) => answer.correct).length}
                timeSpent={timeSpent}
            />

            <DetailedResults answers={userAnswers} questions={questions} />

            <div className={styles.actionButtons}>
              <button onClick={() => navigate("/")} className={styles.primaryButton}>
                На главную
              </button>
              <button onClick={() => navigate(-1)} className={styles.secondaryButton}>
                Повторить квиз
              </button>
            </div>
          </section>
        </div>
      </main>
  );
};

export default QuizResults;


// "use client";
// import React, { useState } from "react";
// import styles from "./QuizResults.module.css";
// import ScoreDisplay from "./ScoreDisplay";
// import StatisticsGrid from "./StatisticsGrid";
// import DetailedResults from "./DetailedResults";
//
// const QuizResults = () => {
//   const [quizData] = useState({
//     score: 85,
//     totalQuestions: 10,
//     correctAnswers: 8,
//     timeSpent: "12:45",
//     answers: [
//       {
//         question: "What is the capital of France?",
//         userAnswer: "Paris",
//         correct: true,
//       }
//     ],
//   });
//
//   return (
//     <main className={styles.container}>
//       <div className={styles.wrapper}>
//         <section className={styles.card}>
//           <ScoreDisplay score={quizData.score} />
//
//           <StatisticsGrid
//             totalQuestions={quizData.totalQuestions}
//             correctAnswers={quizData.correctAnswers}
//             timeSpent={quizData.timeSpent}
//           />
//
//           <DetailedResults answers={quizData.answers} />
//
//           <div className={styles.actionButtons}>
//             <button className={styles.primaryButton}>Try Again</button>
//             <button className={styles.secondaryButton}>Share Results</button>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };
//
// export default QuizResults;
