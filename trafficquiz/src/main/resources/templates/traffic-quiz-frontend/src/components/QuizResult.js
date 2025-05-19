
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import "./QuizDetails.css"
import "./question.css"

const QuizResult = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const quizData = location.state ?? {};
    const { score, totalQuestions, userAnswers, questions, userId, quizId } = quizData;

    // Debugging logs to check if data exists
    useEffect(() => {
        console.log("📌 Quiz Data from location.state:", quizData);
        if (!userId || !quizId) {
            console.warn("🚨 Missing userId or quizId! Check navigation.");
        }
    }, [quizData]);

    // Function to save the user's score
    const saveUserScore = async (completionTime) => {
        try {
            if (!userId || !quizId || score == null) {
                console.warn("🚨 Missing data:", { userId, quizId, score, completionTime });
                return Promise.reject(new Error("Missing required data"));
            }

            console.log("📤 Sending score:", { userId, quizId, score, completionTime });

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
                throw new Error(`❌ Failed to save score: ${errorText}`);
            }

            console.log("✅ Score saved successfully");
            return Promise.resolve();
        } catch (error) {
            console.error("❌ Error saving score:", error.message);
            return Promise.reject(error);
        }
    };


    // Save the user's score when the component loads, but only if all data is available
    useEffect(() => {
        if (userId && quizId && score !== undefined) {
            const completionTime = 30;
            saveUserScore(completionTime)
                .then(() => console.log("✅ Score successfully submitted!"))
                .catch(error => console.error("❌ Error saving score:", error));
        } else {
            console.warn("⏳ Waiting for valid data before saving score...");
        }
    }, [userId, quizId, score]);



    // Handle missing quiz data
    if (!location.state) {
        return <p className="text-center text-red-500 text-lg">⚠️ No quiz data available.</p>;
    }

    // Calculate performance
    const percentage = (score / totalQuestions) * 100;
    let message = "Продолжай тренироваться! ";
    let scoreClass = "low-score";
    let confetti = "";

    if (percentage >= 80) {
        message = "🏆 Потрясающе! Ты чемпион викторины! ";
        scoreClass = "high-score";
        confetti = "🎉🎊";
    } else if (percentage >= 50) {
        message = " Хорошая работа! Ты на верном пути! ";
        scoreClass = "medium-score";
    }

    return (
        <div className="quiz-result-container">
            <div className="quiz-result-card">
                {/* Left Section - Score */}
                <div className="result-left">
                    {confetti && <div className="confetti">{confetti}</div>}
                    <h2 className="quiz-title"> Викторина завершена !</h2>
                    <p className="congratulations-message">{message}</p>
                    <p className="quiz-score">
                        Ты набрал <span>{score}</span> из <span>{totalQuestions}</span>
                    </p>
                    <div className="button-container">
                        <button onClick={() => navigate("/")} className="button button-home">На главную</button>
                        <button onClick={() => navigate(-1)} className="button button-retry">Пройти заново</button>
                    </div>
                </div>

                {/* Right Section - Answer Review */}
                <div className="result-right">
                    <h3 className="answer-title"> Обзор твоих ответов:</h3>
                    {questions?.length > 0 ? (
                        <ul className="answer-list">
                            {questions.map((question, index) => {
                                const correctAnswer = question.answers.find(a => a.correct)?.answerText;
                                const userAnswer = userAnswers?.[index]?.answerText || "Ответ не выбран";
                                const isCorrect = userAnswer === correctAnswer;

                                return (
                                    <li key={index} className={`answer-item ${isCorrect ? "correct-answer1" : "wrong-answer1 "}`}>
                                        <strong>{question.questionText}</strong>
                                        <p>Твой ответ: {userAnswer} {isCorrect ? "✅" : "❌"}</p>
                                        <p className="text-sm">Правильный ответ: {correctAnswer}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        <p className="text-red-500">Вопросы не найдены.</p>
                    )}
                </div>
            </div>

        </div>

    );
};
export default QuizResult;