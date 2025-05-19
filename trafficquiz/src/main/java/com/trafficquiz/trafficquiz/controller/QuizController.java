package com.trafficquiz.trafficquiz.controller;


import com.trafficquiz.trafficquiz.DTO.QuizDTO;
import com.trafficquiz.trafficquiz.model.Quiz;
import com.trafficquiz.trafficquiz.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/api/quizzes")

public class QuizController {

    @Autowired
    private QuizService quizService;
    @GetMapping("/{id}")
    public ResponseEntity<Quiz> getQuizById(@PathVariable Long id) {
        return quizService.getQuizById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    //Get quizzes with pagination
    @GetMapping
    public List<Quiz> getQuizzes(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Page<Quiz> pagedQuizzes = quizService.getQuizzes(PageRequest.of(page, size));
        return pagedQuizzes.getContent();  // Return only quiz list
    }

    // Search quizzes by title (if a title is provided)
    @GetMapping("/search")
    public List<Quiz> searchQuizzes(@RequestParam(required = false) String title) {
        if (title != null) {
            return quizService.searchQuizzesByTitle(title);
        }
        return quizService.getAllQuizzes();
    }

    // Get all quizzes without pagination
    @GetMapping("/all")
    public List<QuizDTO> getAllQuizDTOs(@RequestParam Long userId) {
        return quizService.getAllQuizDTOs(userId);
    }


    // Create a new quiz
    @PostMapping
    public Quiz createQuiz(@RequestBody Quiz quiz) {
        return quizService.saveQuiz(quiz);
    }


    @GetMapping("/user/{userId}")
    public ResponseEntity<List<QuizDTO>> getQuizzesWithCompletion(@PathVariable Long userId) {
        List<QuizDTO> quizzes = quizService.getAllQuizDTOs(userId);
        return ResponseEntity.ok(quizzes);
    }



}


