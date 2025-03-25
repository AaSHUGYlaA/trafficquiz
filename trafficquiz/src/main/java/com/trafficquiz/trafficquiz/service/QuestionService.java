package com.trafficquiz.trafficquiz.service;


import com.trafficquiz.trafficquiz.model.Question;
import com.trafficquiz.trafficquiz.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    public List<Question> getQuestionsByQuiz(Long quizId) {
        return questionRepository.findByQuizId(quizId);
    }

    public Question saveQuestion(Question question) {
        return questionRepository.save(question);
    }
}

