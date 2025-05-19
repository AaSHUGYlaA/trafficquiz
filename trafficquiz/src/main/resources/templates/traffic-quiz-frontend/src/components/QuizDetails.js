// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getQuizById } from "../services/quizService";
//
// const QuizDetail = () => {
//     const { id } = useParams(); // Extract quiz ID from URL
//     const [quiz, setQuiz] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//         console.log("Quiz ID from URL:", id); // ✅ Check if ID is correctly retrieved
//
//         if (!id) {
//             setError("Invalid quiz ID");
//             setLoading(false);
//             return;
//         }
//
//         getQuizById(id)
//             .then((data) => {
//                 console.log("Fetched Quiz:", data);
//                 setQuiz(data);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 console.error("Error fetching quiz:", err);
//                 setError("Failed to load quiz details");
//                 setLoading(false);
//             });
//     }, [id]);
//
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p style={{ color: "red" }}>{error}</p>;
//
//     return (
//         <div>
//             <h2>{quiz?.title}</h2>
//             <p>{quiz?.description}</p>
//         </div>
//     );
// };
//
// export default QuizDetail;


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { submitAnswer } from "../services/quizService"; // Method to submit answer

const QuizDetail = () => {
    const { quizId } = useParams(); // Get the quiz id from URL params
    const [questions, setQuestions] = useState([]); // List of questions for the quiz
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Current question index
    const [score, setScore] = useState(0); // Track the score
    const [answerStatus, setAnswerStatus] = useState(null); // To show if the answer is correct/incorrect
    const [quizFinished, setQuizFinished] = useState(false); // To track if the quiz is complete

    useEffect(() => {
        // Fetch quiz questions from the backend when the component mounts
        fetch(`http://localhost:8080/api/questions/quiz/${quizId}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to load quiz questions");
                }
                return res.json();
            })
            .then((data) => setQuestions(data))
            .catch((err) => console.error("Error fetching questions:", err));
    }, [quizId]);


    const handleAnswerSubmit = async (selectedAnswer) => {
        const currentQuestion = questions[currentQuestionIndex];

        // Create a user response object
        const userResponse = {
            user_id: 1, // Get from logged-in user (you may need a proper user session)
            question_id: currentQuestion.id,
            answer_id: selectedAnswer.id,
            selected_answer: selectedAnswer.text,
        };

        try {
            const result = await submitAnswer(userResponse); // Send answer to backend
            setAnswerStatus(result.isCorrect ? "Correct!" : "Incorrect");

            // Update score if answer is correct
            if (result.isCorrect) {
                setScore((prevScore) => prevScore + result.score);
            }

            // Move to the next question or finish the quiz
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            } else {
                // If it's the last question, show final score
                setQuizFinished(true);
            }
        } catch (error) {
            console.error("Error submitting answer:", error);
            setAnswerStatus("Error submitting your answer.");
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div>
            <h2>{currentQuestion ? currentQuestion.title : "Loading question..."}</h2>
            <p>{answerStatus}</p>

            {/* Display options for current question */}
            <div>
                {currentQuestion?.answers.map((answer) => (
                    <button
                        key={answer.id}
                        onClick={() => handleAnswerSubmit(answer)}
                        style={{
                            backgroundColor:
                                answerStatus && answer.isCorrect
                                    ? "green"
                                    : answerStatus && !answer.isCorrect
                                        ? "red"
                                        : "initial",
                        }}
                    >
                        {answer.text}
                    </button>
                ))}
            </div>

            {/* Display score */}
            <div>
                <p>Current Score: {score}</p>
            </div>

            {/* Display final score at the end of the quiz */}
            {quizFinished && <h3>Quiz complete! Your final score is: {score}</h3>}
        </div>
    );
};

export default QuizDetail;


