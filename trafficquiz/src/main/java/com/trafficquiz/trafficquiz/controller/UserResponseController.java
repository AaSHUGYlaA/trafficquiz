//package com.trafficquiz.trafficquiz.controller;
//
//
//import com.trafficquiz.trafficquiz.DTO.AnswerResult;
//import com.trafficquiz.trafficquiz.model.UserResponse;
//import com.trafficquiz.trafficquiz.service.QuizService;
//import com.trafficquiz.trafficquiz.service.UserResponseService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.Collections;
//
//@RestController
//@RequestMapping("/api/responses")
//public class UserResponseController {
//
//    @Autowired
//    private UserResponseService userResponseService;
//
//    @Autowired
//    private QuizService quizService;
//
//    // Submit user response for a given quiz
//    @PostMapping("/submit")
//    public ResponseEntity<?> submitAnswer(@RequestBody UserResponse userResponse) {
//        try {
//            // Step 1: Check if the answer is correct
//            boolean isCorrect = userResponseService.checkAnswer(userResponse);
//
//            // Step 2: Save the user's response with the correctness flag
//            UserResponse savedResponse = userResponseService.saveUserResponse(userResponse, isCorrect);
//
//            // Step 3: Calculate score (You might need to adjust this logic based on your needs)
//            int score = userResponseService.calculateScore(Collections.singletonList(savedResponse)); // Using a list with a single response for now
//
//            // Optionally, you can return the score or other info if needed
//            return ResponseEntity.ok(new AnswerResult(isCorrect, score)); // AnswerResult is a custom response object
//
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error processing response: " + e.getMessage());
//        }
//    }
//}






//@RestController
//@RequestMapping("/api/responses")
//public class UserResponseController {
//
//    @Autowired
//    private UserResponseService userResponseService;
//
//    @PostMapping
//    public UserResponse saveResponse(@RequestBody UserResponse userResponse) {
//        return userResponseService.saveUserResponse(userResponse);
//    }
//}

