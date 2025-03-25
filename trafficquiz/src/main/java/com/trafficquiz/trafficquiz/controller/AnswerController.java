package com.trafficquiz.trafficquiz.controller;


import com.trafficquiz.trafficquiz.model.Answer;
import com.trafficquiz.trafficquiz.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/answers")
public class AnswerController {

    @Autowired
    private AnswerService answerService;

    @GetMapping("/question/{questionId}")
    public List<Answer> getAnswersByQuestion(@PathVariable Long questionId) {
        return answerService.getAnswersByQuestion(questionId);
    }
}

