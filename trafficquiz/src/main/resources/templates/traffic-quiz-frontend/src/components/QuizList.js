import React, { useEffect, useState } from "react";
import { getQuizzes } from "../services/quizService";
import "./QuizList.css"; // Import the CSS file
import { fetchQuizzes } from '../services/quizService';
import {useNavigate} from "react-router-dom"; // Import the fetchQuizzes function


const QuizList = ({ onSelectQuiz }) => {
    const navigate = useNavigate(); // useNavigate hook instead of useHistory
    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getQuizzes = async () => {
            try {
                const quizzesData = await fetchQuizzes(); // Fetch quizzes from API
                setQuizzes(quizzesData); // Set quizzes data
            } catch (err) {
                setError(err.message); // Set error message
            } finally {
                setLoading(false); // Set loading to false
            }
        };

        getQuizzes();
    }, []);

    if (loading) return <p className="loading">Loading quizzes...</p>;
    if (error) return <p className="error-message">{error}</p>;

    return (
        <div className="quiz-container">
            <h2 className="quiz-title">📚 Choose Your Challenge!</h2>
            <p className="quiz-subtitle">Test your knowledge and become a master! 🚀</p>

            {quizzes.length > 0 ? (
                <ul className="quiz-list">
                    {quizzes.map((quiz) => (
                        <li
                            key={quiz.id}
                            className="quiz-item"
                            onClick={() => {
                                if (!quiz.id) {
                                    console.error("Quiz ID is missing!", quiz);
                                    return;
                                }
                                navigate(`/quiz/${quiz.id}/start`);
                            }}
                        >
                            <span className="quiz-icon">📖</span> {quiz.title}
                            <span className="quiz-start">▶ Start Quiz</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="no-quizzes-container">
                    <p className="no-quizzes">😕 No quizzes available.</p>
                    <p className="motivation">New quizzes are coming soon! Stay curious and keep learning! 💡</p>
                </div>
            )}
        </div>
    );
};
export default QuizList;


