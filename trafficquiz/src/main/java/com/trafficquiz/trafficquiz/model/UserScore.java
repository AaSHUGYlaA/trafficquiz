package com.trafficquiz.trafficquiz.model;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "user_scores")
public class UserScore {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "quiz_id", nullable = false)
    private Quiz quiz;

    private int score;
    private int completionTime; // In seconds

    private Timestamp dateTaken;

    @PrePersist
    protected void onCreate() {
        this.dateTaken = new Timestamp(System.currentTimeMillis());
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Timestamp getDateTaken() {
        return dateTaken;
    }

    public void setDateTaken(Timestamp dateTaken) {
        this.dateTaken = dateTaken;
    }

    public int getCompletionTime() {
        return completionTime;
    }

    public void setCompletionTime(int completionTime) {
        this.completionTime = completionTime;
    }

    // Getters and Setters
}

