package com.trafficquiz.trafficquiz.service;


import com.trafficquiz.trafficquiz.model.Answer;
import com.trafficquiz.trafficquiz.repository.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerService {

    @Autowired
    private AnswerRepository answerRepository;

    public List<Answer> getAnswersByQuestion(Long questionId) {
        return answerRepository.findByQuestionId(questionId);
    }
}

