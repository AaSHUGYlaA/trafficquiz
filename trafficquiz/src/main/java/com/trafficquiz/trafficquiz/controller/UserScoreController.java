package com.trafficquiz.trafficquiz.controller;

import com.trafficquiz.trafficquiz.DTO.UserScoreDTO;
import com.trafficquiz.trafficquiz.model.Quiz;
import com.trafficquiz.trafficquiz.model.User;
import com.trafficquiz.trafficquiz.model.UserScore;
import com.trafficquiz.trafficquiz.repository.QuizRepository;
import com.trafficquiz.trafficquiz.repository.UserRepository;
import com.trafficquiz.trafficquiz.repository.UserScoreRepository;
import com.trafficquiz.trafficquiz.service.UserScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/user-scores")
public class UserScoreController {
    @Autowired
    private UserScoreService userScoreService;

    @Autowired
    private UserRepository userRepository; // Inject UserRepository

    @Autowired
    private QuizRepository quizRepository; // Inject QuizRepository

    @PostMapping("/submit")
    public ResponseEntity<UserScore> submitScore(@RequestBody UserScore userScore) {
        UserScore saved = userScoreService.saveScore(userScore);
        return ResponseEntity.ok(saved);
    }

//    @PostMapping("/submit")
//    public ResponseEntity<?> submitScore(@RequestBody Map<String, Object> payload) {
//        try {
//            if (!payload.containsKey("userId") || !payload.containsKey("quizId") ||
//                    !payload.containsKey("score") || !payload.containsKey("completionTime")) {
//                return ResponseEntity.badRequest().body("❌ Missing required fields.");
//            }
//
//            Long userId = ((Number) payload.get("userId")).longValue();
//            Long quizId = ((Number) payload.get("quizId")).longValue();
//            int score = ((Number) payload.get("score")).intValue();
//            int completionTime = ((Number) payload.get("completionTime")).intValue();
//
//            User user = userRepository.findById(userId)
//                    .orElseThrow(() -> new RuntimeException("❌ User not found"));
//            Quiz quiz = quizRepository.findById(quizId)
//                    .orElseThrow(() -> new RuntimeException("❌ Quiz not found"));
//
//            UserScore userScore = userScoreService.saveUserScore(user, quiz, score, completionTime);
//            return ResponseEntity.ok(userScore);
//
//        } catch (Exception e) {
//            return ResponseEntity.badRequest().body("❌ Error saving score: " + e.getMessage());
//        }
//    }

    @GetMapping("/leaderboard")
    public ResponseEntity<List<UserScoreDTO>> getGlobalLeaderboard() {
        return ResponseEntity.ok(userScoreService.getGlobalLeaderboard());
    }

    @GetMapping("/leaderboard/{quizId}")
    public ResponseEntity<List<UserScore>> getLeaderboard(@PathVariable Long quizId) {
        Quiz quiz = new Quiz();
        quiz.setId(quizId);
        List<UserScore> leaderboard = userScoreService.getLeaderboard(quiz);
        return ResponseEntity.ok(leaderboard);
    }
}

