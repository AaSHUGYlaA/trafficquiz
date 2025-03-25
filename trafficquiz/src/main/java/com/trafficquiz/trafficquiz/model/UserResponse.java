//package com.trafficquiz.trafficquiz.model;
//
//import jakarta.persistence.*;
//import lombok.*;
//
//@Entity
//@Table(name = "user_responses")
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//public class UserResponse {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @ManyToOne
//    @JoinColumn(name = "user_id", nullable = false)
//    private User user;
//
//    @ManyToOne
//    @JoinColumn(name = "question_id", nullable = false)
//    private Question question;
//
//    @ManyToOne
//    @JoinColumn(name = "answer_id", nullable = false)
//    private Answer answer;
//
//    private boolean isCorrect; // To mark if the user's answer is correct
//
//    @Column(nullable = false)
//    private String selectedAnswer; // Store the selected answer's text for comparison
//
//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
//
//    public String getSelectedAnswer() {
//        return selectedAnswer;
//    }
//
//    public void setSelectedAnswer(String selectedAnswer) {
//        this.selectedAnswer = selectedAnswer;
//    }
//
//    public Question getQuestion() {
//        return question;
//    }
//
//    public void setQuestion(Question question) {
//        this.question = question;
//    }
//
//    public boolean isCorrect() {
//        return isCorrect;
//    }
//
//    public void setCorrect(boolean correct) {
//        isCorrect = correct;
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public Answer getAnswer() {
//        return answer;
//    }
//
//    public void setAnswer(Answer answer) {
//        this.answer = answer;
//    }
//}


