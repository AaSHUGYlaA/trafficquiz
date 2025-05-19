
// "use client";
// import React, { useEffect, useState } from "react";
// import QuizCard from "./QuizCard";
// import styles from "./QuizSection.module.css";
//
// function QuizSection() {
//     const [quizzes, setQuizzes] = useState([]);
//     const [completedCount, setCompletedCount] = useState(0); // optional
//
//     useEffect(() => {
//         fetch("http://localhost:8080/api/quizzes/all") // or your actual endpoint
//             .then((response) => response.json())
//             .then((data) => {
//                 setQuizzes(data);
//                 // optionally count completed ones
//                 const count = data.filter((quiz) => quiz.completed).length;
//                 setCompletedCount(count);
//             })
//             .catch((error) => console.error("Error fetching quizzes:", error));
//     }, []);
//
//     return (
//         <section className={styles.quizSection}>
//             <header className={styles.sectionHeader}>
//                 <h2 className={styles.title}>Доступные тесты</h2>
//                 <p className={styles.completion}>
//                     Выполнено 🎯 {completedCount}/{quizzes.length}
//                 </p>
//             </header>
//
//             <div className={styles.quizGrid}>
//                 {quizzes.map((quiz, index) => (
//                     <QuizCard
//                         key={index}
//                         id={quiz.id}
//                         icon={quiz.icon}
//                         title={quiz.title}
//                         description={quiz.description}
//                         questions={quiz.questionCount}
//                         duration={quiz.duration}
//                         completed={quiz.completed}
//                     />
//
//                 ))}
//             </div>
//         </section>
//     );
// }
//
// export default QuizSection;








"use client";
import React, { useEffect, useState } from "react";
import QuizCard from "./QuizCard";
import styles from "./QuizSection.module.css";

function QuizSection() {
    const [quizzes, setQuizzes] = useState([]);
    const [completedCount, setCompletedCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchUserQuizzes = async () => {
    //         const user = JSON.parse(localStorage.getItem("user"));
    //         if (!user?.userId) {
    //             setError("Пользователь не авторизован.");
    //             setLoading(false);
    //             return;
    //         }
    //
    //         try {
    //             const response = await fetch(`http://localhost:8080/api/quizzes/user/${user.userId}`);
    //             if (!response.ok) {
    //                 throw new Error("Не удалось загрузить тесты.");
    //             }
    //
    //             const data = await response.json();
    //             if (Array.isArray(data)) {
    //                 setQuizzes(data);
    //                 const count = data.filter((quiz) => quiz.completed === true).length;
    //                 setCompletedCount(count);
    //             } else {
    //                 console.error("Ожидался массив, получено:", data);
    //                 setError("Неверный формат данных.");
    //             }
    //         } catch (err) {
    //             console.error("Ошибка при загрузке тестов:", err);
    //             setError(err.message || "Ошибка загрузки.");
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //
    //     fetchUserQuizzes();
    // }, []);
    //
    // if (loading) return <p className={styles.loading}>Загрузка тестов...</p>;
    // if (error) return <p className={styles.error}>{error}</p>;







    useEffect(() => {
        fetch("http://localhost:8080/api/quizzes/user/1")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch quizzes");
                }
                return response.json();
            })
            .then((data) => {
                if (Array.isArray(data)) {
                    setQuizzes(data);
                    const count = data.filter((quiz) => quiz.completed).length;
                    setCompletedCount(count);
                } else {
                    console.error("Expected array but got:", data);
                }
            })
            .catch((error) => {
                console.error("Error fetching quizzes:", error);
            });
    }, []);

    return (
        <section className={styles.quizSection}>
            <header className={styles.sectionHeader}>
                <h2 className={styles.title}>Доступные тесты</h2>
                <p className={styles.completion}>
                    Выполнено 🎯 {completedCount}/{quizzes.length}
                </p>
            </header>

            <div className={styles.quizGrid}>
                {quizzes.map((quiz, index) => (
                    <QuizCard
                        key={quiz.id || index}
                        id={quiz.id}
                        icon={quiz.icon}
                        title={quiz.title}
                        description={quiz.description}
                        questions={quiz.questionCount}
                        duration={quiz.duration}
                        completed={quiz.completed}
                    />
                ))}
            </div>
        </section>
    );
}

export default QuizSection;







