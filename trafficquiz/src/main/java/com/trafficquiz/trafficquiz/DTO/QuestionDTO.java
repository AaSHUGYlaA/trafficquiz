package com.trafficquiz.trafficquiz.DTO;

import java.util.List;

public class QuestionDTO {
    private Long id;
    private String questionText;
    private List<AnswerDTO> answers;

    public QuestionDTO(Long id, String questionText, List<AnswerDTO> answers) {
        this.id = id;
        this.questionText = questionText;
        this.answers = answers;
    }

    public String getQuestionText() {
        return questionText;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<AnswerDTO> getAnswers() {
        return answers;
    }

    public void setAnswers(List<AnswerDTO> answers) {
        this.answers = answers;
    }
}
