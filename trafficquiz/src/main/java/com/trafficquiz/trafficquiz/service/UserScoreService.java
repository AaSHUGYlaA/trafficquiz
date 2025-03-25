package com.trafficquiz.trafficquiz.service;

import com.trafficquiz.trafficquiz.DTO.UserScoreDTO;
import com.trafficquiz.trafficquiz.model.Quiz;
import com.trafficquiz.trafficquiz.model.UserScore;
import com.trafficquiz.trafficquiz.repository.UserScoreRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import com.trafficquiz.trafficquiz.model.User;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserScoreService {
    @Autowired
    private UserScoreRepository userScoreRepository;

    public UserScoreService(UserScoreRepository userScoreRepository) {
        this.userScoreRepository = userScoreRepository;
    }
    @Transactional
    public UserScore saveUserScore(User user, Quiz quiz, int score, int completionTime) {
        UserScore userScore = new UserScore();
        userScore.setUser(user);
        userScore.setQuiz(quiz);
        userScore.setScore(score);
        userScore.setCompletionTime(completionTime);
        return userScoreRepository.save(userScore);
    }
    public List<UserScoreDTO> getGlobalLeaderboard() {
        return userScoreRepository.findTotalScoresGroupedByUser();
    }


    public List<UserScore> getLeaderboard(Quiz quiz) {
        return userScoreRepository.findTop10ByQuizOrderByScoreDescCompletionTimeAsc(quiz);
    }
}

