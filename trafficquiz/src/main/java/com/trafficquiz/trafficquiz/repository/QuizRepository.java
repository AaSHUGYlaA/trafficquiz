package com.trafficquiz.trafficquiz.repository;


import com.trafficquiz.trafficquiz.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long> {
    List<Quiz> findByTitleContainingIgnoreCase(String title);
}

