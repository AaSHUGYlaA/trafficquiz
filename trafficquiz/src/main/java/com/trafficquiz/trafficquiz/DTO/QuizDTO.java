package com.trafficquiz.trafficquiz.DTO;

import com.trafficquiz.trafficquiz.model.Quiz;

// QuizDTO.java
public class QuizDTO {
    private Long id;
    private String title;
    private String description;
    private String icon;
    private int questionCount;
    private int duration;
    private boolean completed;

    public QuizDTO(Quiz quiz, int questionCount, int duration, boolean completed) {
        this.id = quiz.getId();
        this.title = quiz.getTitle();
        this.description = quiz.getDescription();
        this.icon = quiz.getIcon();
        this.questionCount = questionCount;
        this.duration = duration;
        this.completed = completed;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public int getQuestionCount() {
        return questionCount;
    }

    public void setQuestionCount(int questionCount) {
        this.questionCount = questionCount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

}

