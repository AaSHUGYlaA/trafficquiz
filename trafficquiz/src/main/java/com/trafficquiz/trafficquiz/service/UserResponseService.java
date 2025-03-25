//package com.trafficquiz.trafficquiz.service;
//
//
//import com.trafficquiz.trafficquiz.model.Answer;
//import com.trafficquiz.trafficquiz.model.UserResponse;
//import com.trafficquiz.trafficquiz.repository.AnswerRepository;
//import com.trafficquiz.trafficquiz.repository.UserResponseRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class UserResponseService {
//
//    @Autowired
//    private UserResponseRepository userResponseRepository;
//
//    @Autowired
//    private AnswerRepository answerRepository;
//
//    // Method to save the user response and check if it's correct
//    public UserResponse saveUserResponse(UserResponse userResponse, boolean isCorrect) {
//        // Set the correctness of the answer before saving
//        userResponse.setCorrect(isCorrect); // Set the isCorrect flag
//
//        // Save the user response to the repository
//        return userResponseRepository.save(userResponse);
//    }
//
//    // Method to check if the answer provided by the user is correct
//    public boolean checkAnswer(UserResponse userResponse) {
//        // Fetch the correct answer for the question
//        Optional<Answer> correctAnswer = answerRepository.findCorrectAnswerByQuestionId(userResponse.getQuestion().getId());
//
//        // If no correct answer is found, throw an exception
//        if (!correctAnswer.isPresent()) {
//            throw new RuntimeException("Correct answer not found");
//        }
//
//        // Compare the selected answer with the correct answer
//        return correctAnswer.get().getAnswerText().equals(userResponse.getAnswer().getAnswerText());
//    }
//
//    // Method to calculate the user's score based on correct answers
//    public int calculateScore(List<UserResponse> userResponses) {
//        int score = 0;
//
//        // Loop through the list of responses and calculate the score based on correctness
//        for (UserResponse response : userResponses) {
//            if (response.isCorrect()) {
//                score += 1;  // Increment score for correct answers
//            }
//        }
//
//        return score;
//    }
//}





