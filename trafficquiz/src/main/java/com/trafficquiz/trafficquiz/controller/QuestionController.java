package com.trafficquiz.trafficquiz.controller;


import com.trafficquiz.trafficquiz.DTO.AnswerDTO;
import com.trafficquiz.trafficquiz.DTO.QuestionDTO;
import com.trafficquiz.trafficquiz.model.Question;
import com.trafficquiz.trafficquiz.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping("/quiz/{quizId}")
    public List<QuestionDTO> getQuestionsByQuiz(@PathVariable Long quizId) {
        List<Question> questions = questionService.getQuestionsByQuiz(quizId);

        return questions.stream().map(question ->
                new QuestionDTO(
                        question.getId(),
                        question.getQuestionText(),
                        question.getAnswers() != null
                                ? question.getAnswers().stream()
                                .map(answer -> new AnswerDTO(answer.getId(), answer.getAnswerText(), answer.isCorrect()))
                                .collect(Collectors.toList())
                                : new ArrayList<>()
                )
        ).collect(Collectors.toList());
    }


    @PostMapping
    public Question createQuestion(@RequestBody Question question) {
        return questionService.saveQuestion(question);
    }
}

