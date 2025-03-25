package com.trafficquiz.trafficquiz.model;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "answers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question; // Assuming there's a Question entity

    private String answerText; // The answer text (e.g., "A", "B", "C", etc.)

    private boolean isCorrect; // Marked as true for the correct answer

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public String getAnswerText() {
        return answerText;
    }

    public boolean isCorrect() {
        return isCorrect;
    }

    public void setCorrect(boolean correct) {
        isCorrect = correct;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setAnswerText(String answerText) {
        this.answerText = answerText;
    }
    // Getters and Setters
}

