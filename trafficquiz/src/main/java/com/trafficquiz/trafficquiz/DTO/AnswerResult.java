package com.trafficquiz.trafficquiz.DTO;

public class AnswerResult {
    private boolean correct;
    private int score;

    // Constructor, getters, and setters
    public AnswerResult(boolean correct, int score) {
        this.correct = correct;
        this.score = score;
    }

    public boolean isCorrect() {
        return correct;
    }

    public void setCorrect(boolean correct) {
        this.correct = correct;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }
}


