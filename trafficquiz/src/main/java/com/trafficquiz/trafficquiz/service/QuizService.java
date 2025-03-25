package com.trafficquiz.trafficquiz.service;


import com.trafficquiz.trafficquiz.model.Quiz;
import com.trafficquiz.trafficquiz.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuizService {

    @Autowired
    private QuizRepository quizRepository;
    public Page<Quiz> getQuizzes(Pageable pageable) {
        return quizRepository.findAll(pageable);
    }
    public List<Quiz> searchQuizzesByTitle(String title) {
        return quizRepository.findByTitleContainingIgnoreCase(title);
    }
    // ✅ Get quiz by ID
    public Optional<Quiz> getQuizById(Long id) {
        return quizRepository.findById(id);
    }


    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }

    public Quiz saveQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }
}

