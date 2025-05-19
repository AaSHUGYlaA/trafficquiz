package com.trafficquiz.trafficquiz.repository;


import com.trafficquiz.trafficquiz.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findByQuizId(Long quizId);
    int countByQuizId(Long quizId);

}

