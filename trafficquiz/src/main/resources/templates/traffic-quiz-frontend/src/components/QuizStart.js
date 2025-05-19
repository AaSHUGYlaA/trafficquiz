import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./question.css";

const QuizStart = () => {
    const navigate = useNavigate();
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    const { id } = useParams(); // Get quiz ID from URL
    const [quiz, setQuiz] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [timeLeft, setTimeLeft] = useState(30); // 30 sec timer
    const [loading, setLoading] = useState(true);

    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const fetchQuizData = async () => {
            try {
                // Fetch Quiz Details
                const quizRes = await fetch(`http://localhost:8080/api/quizzes/${id}`);
                const quizData = await quizRes.json();
                console.log("Quiz data:", quizData);
                setQuiz(quizData);

                // Fetch Questions for the Quiz
                const questionsRes = await fetch(`http://localhost:8080/api/questions/quiz/${id}`);
                const questionsData = await questionsRes.json();
                console.log("Questions data:", questionsData);

                if (questionsData.length > 0) {
                    setQuestions(questionsData);
                } else {
                    console.warn("No questions found!");
                }
            } catch (error) {
                console.error("Error fetching quiz data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchQuizData();
    }, [id]);

    useEffect(() => {
        if (questions.length > 0) {
            setTimeLeft(30); // Reset time for first question
            const timer = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        handleNextQuestion(); // Auto-next if time runs out
                        return 30;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [questions, currentQuestion]);

    if (loading) return <p>Loading quiz...</p>;
    if (!quiz) return <p>Quiz not found.</p>;
    if (questions.length === 0) return <p>No questions available.</p>;

    const handleSelectAnswer = (answer) => {
        setSelectedAnswer(answer);
        setUserAnswers([...userAnswers, answer]);

        if (answer.correct) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setTimeLeft(30);
        } else {
            navigate("/quiz-result", {
                state: {
                    score,
                    totalQuestions: questions.length,
                    userAnswers,
                    questions,
                },
            });
        }
    };

    console.log("Current Question:", questions[currentQuestion]);


    return (
        <div className="quiz-container">
            <header className="quiz-header">
                <div className="quiz-title-container">
                    <div className="quiz-title">{quiz.title}</div>
                    <span className="points-badge">{score} баллов</span>
                </div>

                <div className="quiz-progress-container">
                    <div className="streak-container">
                        <span className="streak-label"> Вопрос  - </span>
                    </div>
                    <div className="question-number">
                        {currentQuestion + 1}
                    </div>
                </div>
            </header>

            <div className="question-card">
                {questions[currentQuestion]?.image && (
                    <img
                        src={questions[currentQuestion].image}
                        alt="Question visual"
                        className="scenario-image"
                    />
                )}

                <p className="question-text">{questions[currentQuestion]?.questionText}</p>

                <div className="options-container">
                    {questions[currentQuestion]?.answers.map((answer, index) => (
                        <div
                            key={answer.id}
                            onClick={() => handleSelectAnswer(answer)}
                            className={`option-item ${
                                selectedAnswer?.id === answer.id
                                    ? selectedAnswer.correct
                                        ? 'correct-answer'
                                        : 'wrong-answer'
                                    : ''
                            }`}
                        >
                            <div className="option-content">
                                <div className="option-indicator">
                                    {String.fromCharCode(65 + index)}
                                </div>
                                <div className="option-text">
                                    {answer.answerText}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="quiz-footer" style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
                <button
                    className="continue-button"
                    onClick={() => setCurrentQuestion(prev => Math.max(prev - 1, 0))}
                    disabled={currentQuestion === 0}
                >
                    Назад
                </button>
                <button
                    className="continue-button"
                    onClick={handleNextQuestion}
                    disabled={!selectedAnswer}
                >
                    {currentQuestion + 1 < questions.length ? "Следующий вопрос" : "Завершить Тест"}
                </button>
            </footer>

            <div className="progress-bar-container">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
            </div>
        </div>
    );


};

export default QuizStart;

