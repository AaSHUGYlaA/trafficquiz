import React, { useState } from "react";
import "./AdvancedQuizQuestion.module.css";

function AdvancedQuizQuestion() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [streakCount, setStreakCount] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAchievement, setShowAchievement] = useState(false);

  const [questions] = useState([
    {
      type: "image",
      image: "https://placehold.co/800x400",
      question: "You see this sign ahead. What should you do?",
      scenario: "You're driving on a busy road and notice this sign...",
      options: [
        "Slow down gradually",
        "Speed up to clear the area",
        "Maintain current speed",
        "Signal right",
      ],
      correct: 0,
      points: 100,
      explanation:
        "Always slow down gradually when approaching warning signs to maintain safety.",
    },
    {
      type: "interactive",
      question:
        "Arrange the vehicles in the correct order at this intersection",
      scenario: "Multiple vehicles arrive at a 4-way stop simultaneously...",
      options: [
        "Emergency vehicle",
        "Vehicle on the right",
        "Vehicle going straight",
        "Vehicle turning left",
      ],
      correct: [0, 1, 2, 3],
      points: 200,
      explanation:
        "Emergency vehicles always have priority, followed by vehicles on the right.",
    },
    {
      type: "video",
      videoUrl: "https://placehold.co/800x400",
      question: "What hazards can you identify in this situation?",
      scenario: "Watch this traffic scenario carefully...",
      options: [
        "Pedestrian crossing ahead",
        "Merging traffic",
        "School zone",
        "Construction work",
      ],
      correct: 1,
      points: 150,
      explanation:
        "Always be alert for merging traffic and adjust your speed accordingly.",
    },
  ]);

  function addPoints(questionPoints) {
    const newTotal = totalPoints + questionPoints;
    setTotalPoints(newTotal);
    if (newTotal >= 1000) {
      setShowAchievement(true);
      setTimeout(() => setShowAchievement(false), 3000);
    }
  }

  function checkAnswer(selectedIndex) {
    setSelectedAnswer(selectedIndex);
    const currentCorrect = questions[currentQuestion].correct;
    const isAnswerCorrect = Array.isArray(currentCorrect)
      ? currentCorrect.includes(selectedIndex)
      : selectedIndex === currentCorrect;

    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);

    if (isAnswerCorrect) {
      setScore((prevScore) => prevScore + 1);
      setStreakCount((prevStreak) => prevStreak + 1);
      addPoints(questions[currentQuestion].points);

      if (streakCount + 1 >= 3) {
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 2000);
      }
    } else {
      setStreakCount(0);
    }
  }

  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setShowFeedback(false);
      setSelectedAnswer(null);
    }
  }

  // Generate streak fire emojis
  const renderStreakEmojis = () => {
    const emojis = [];
    for (let i = 0; i < streakCount; i++) {
      emojis.push(
        <div key={i} className="streak-emoji">
          🔥
        </div>,
      );
    }
    return emojis;
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="quiz-title-container">
          <div className="quiz-title">Road Rules Master</div>
          <div className="points-badge">{`${totalPoints} pts`}</div>
        </div>
        <div className="quiz-progress-container">
          <div className="streak-container">
            <div className="streak-label">Streak:</div>
            <div className="streak-emojis">{renderStreakEmojis()}</div>
          </div>
          <div
            className="question-number"
            style={{
              transform: showFeedback ? "scale(1.1)" : "scale(1)",
            }}
          >
            {currentQuestion + 1}
          </div>
        </div>
      </div>

      <div
        className="question-card"
        style={{
          transform: showFeedback ? "translateY(0)" : "translateY(0)",
          opacity: showFeedback ? "1" : "1",
        }}
      >
        <div className="scenario-text">
          {questions[currentQuestion].scenario}
        </div>

        {questions[currentQuestion].type === "image" && (
          <img
            alt="Traffic scenario"
            src={questions[currentQuestion].image}
            className="scenario-image"
            style={{
              transform: showFeedback ? "scale(1.02)" : "scale(1)",
            }}
          />
        )}

        <div className="question-text">
          {questions[currentQuestion].question}
        </div>

        <div className="options-container">
          {questions[currentQuestion].options.map((option, index) => (
            <div
              key={index}
              onClick={() => !showFeedback && checkAnswer(index)}
              className="option-item"
              style={{
                background:
                  showFeedback && index === questions[currentQuestion].correct
                    ? "rgba(88, 204, 2, 0.55)"
                    : showFeedback &&
                        index !== questions[currentQuestion].correct
                      ? "rgba(255, 0, 0, 0.50)"
                      : "#fff",
                cursor: showFeedback ? "default" : "pointer",
                transform:
                  showFeedback && index === questions[currentQuestion].correct
                    ? "scale(1.02)"
                    : "scale(1)",
              }}
            >
              <div className="option-content">
                <div
                  className="option-indicator"
                  style={{
                    borderColor:
                      showFeedback &&
                      index === questions[currentQuestion].correct
                        ? "#58CC02"
                        : showFeedback &&
                            index !== questions[currentQuestion].correct
                          ? "#FF0000"
                          : "#E5E5E5",
                    background:
                      showFeedback &&
                      index === questions[currentQuestion].correct
                        ? "#58CC02"
                        : "transparent",
                  }}
                >
                  {showFeedback &&
                    index === questions[currentQuestion].correct && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="check-icon"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                </div>
                <span className="option-text">{option}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showFeedback && (
        <div
          className="feedback-container"
          style={{
            borderColor: isCorrect ? "#58CC02" : "#FF0000",
            background: isCorrect
              ? "rgba(88, 204, 2, 0.1)"
              : "rgba(255, 0, 0, 0.1)",
            transform: showFeedback
              ? "translateY(0) scale(1)"
              : "translateY(20px) scale(0.95)",
            opacity: showFeedback ? "1" : "0",
          }}
        >
          <div className="feedback-content">
            <div
              className="feedback-icon"
              style={{
                background: isCorrect ? "#58CC02" : "#FF0000",
              }}
            >
              {isCorrect ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="feedback-svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="feedback-svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <div className="feedback-text-container">
              <div
                className="feedback-title"
                style={{
                  color: isCorrect ? "#58CC02" : "#FF0000",
                }}
              >
                {isCorrect ? (
                  <span>
                    {"Excellent! " +
                      questions[currentQuestion].points +
                      " points earned!"}
                  </span>
                ) : (
                  <span>Not quite right. Try again!</span>
                )}
              </div>
              <div className="feedback-explanation">
                {questions[currentQuestion].explanation}
              </div>
            </div>
          </div>
          <div className="feedback-actions">
            {currentQuestion < questions.length - 1 && (
              <button
                onClick={nextQuestion}
                className="continue-button"
                style={{
                  transform: showFeedback
                    ? "translateY(0)"
                    : "translateY(20px)",
                }}
              >
                Continue
              </button>
            )}
          </div>
        </div>
      )}

      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{
            width: `${((currentQuestion + 1) / questions.length) * 100}%`,
          }}
        />
      </div>

      {showCelebration && (
        <div className="celebration-overlay">
          <div className="celebration-content">
            <h2>Amazing Streak!</h2>
            <div className="celebration-emoji">🎉 🔥 🎉</div>
          </div>
        </div>
      )}

      {showAchievement && (
        <div className="achievement-overlay">
          <div className="achievement-content">
            <h2>Achievement Unlocked!</h2>
            <p>1000+ Points Earned</p>
            <div className="achievement-emoji">🏆</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdvancedQuizQuestion;
