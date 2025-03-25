package com.trafficquiz.trafficquiz.repository;


import com.trafficquiz.trafficquiz.model.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {
    List<Answer> findByQuestionId(Long questionId);

    // Find the correct answer for a given question
    Optional<Answer> findCorrectAnswerByQuestionId(Long questionId);
}


