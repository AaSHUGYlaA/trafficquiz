import React, { useState, useEffect } from "react";
import QuizList from "./QuizList";
import QuizDetails from "./QuizDetails";

const QuizPage = () => {
    const [selectedQuiz, setSelectedQuiz] = useState(null);

    return (
        <div>
            <h1>Traffic Quiz App</h1>
            {selectedQuiz ? (
                <QuizDetails quizId={selectedQuiz} />
            ) : (
                <QuizList onSelectQuiz={setSelectedQuiz} />
            )}
        </div>
    );
};

export default QuizPage;
