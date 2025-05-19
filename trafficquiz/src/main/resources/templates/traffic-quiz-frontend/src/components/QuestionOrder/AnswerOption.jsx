"use client";
import React from "react";
import styles from "./AnswerOption.module.css";

const AnswerOption = ({
  answer,
  selected,
  showFeedback,
  onSelect,
  isHovered,
  onHover,
  onLeave,
}) => {
  const getBackground = () => {
    if (selected) {
      if (showFeedback) {
        return answer.correct
          ? "rgba(88, 204, 2, 0.55)"
          : "rgba(255, 0, 0, 0.50)";
      }
      return "rgba(137, 65, 255, 0.15)";
    }
    return isHovered ? "rgba(137, 65, 255, 0.05)" : "white";
  };

  return (
    <article
      className={styles.answerOption}
      onMouseEnter={() => onHover(answer.id)}
      onMouseLeave={onLeave}
      onClick={() => onSelect(answer.id)}
      style={{ background: getBackground() }}
      role="button"
      aria-pressed={selected}
    >
      <span className={styles.answerText}>{answer.text}</span>
      <div className={styles.indicator}>
        {showFeedback && (answer.correct || (selected && !answer.correct)) && (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle
              cx="10"
              cy="10"
              r="7.5"
              stroke="#6F6C87"
              strokeWidth="1.66667"
            />
          </svg>
        )}
      </div>
    </article>
  );
};

export default AnswerOption;
