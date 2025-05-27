package com.trafficquiz.trafficquiz.service;


import com.trafficquiz.trafficquiz.DTO.QuizDTO;
import com.trafficquiz.trafficquiz.model.Quiz;
import com.trafficquiz.trafficquiz.repository.QuestionRepository;
import com.trafficquiz.trafficquiz.repository.QuizRepository;
import com.trafficquiz.trafficquiz.repository.UserScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class QuizService {

    @Autowired
    private QuizRepository quizRepository;
    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private UserScoreRepository userScoreRepository;
    public Page<Quiz> getQuizzes(Pageable pageable) {
        return quizRepository.findAll(pageable);
    }
    public List<Quiz> searchQuizzesByTitle(String title) {
        return quizRepository.findByTitleContainingIgnoreCase(title);
    }
    public Optional<Quiz> getQuizById(Long id) {
        return quizRepository.findById(id);
    }


    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }

    public Quiz saveQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    public List<QuizDTO> getAllQuizDTOs(Long userId) {
        List<Quiz> quizzes = quizRepository.findAll();

        return quizzes.stream().map(quiz -> {
            int questionCount = questionRepository.countByQuizId(quiz.getId());
            int duration = questionCount * 1;
            boolean completed = userScoreRepository
                    .findByUserIdAndQuizId(userId, quiz.getId())
                    .isPresent();

            return new QuizDTO(quiz, questionCount, duration, completed);
        }).collect(Collectors.toList());
    }



}

