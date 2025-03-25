package com.trafficquiz.trafficquiz.repository;

import com.trafficquiz.trafficquiz.DTO.UserScoreDTO;
import com.trafficquiz.trafficquiz.model.Quiz;
import com.trafficquiz.trafficquiz.model.UserScore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserScoreRepository extends JpaRepository<UserScore, Long> {

    List<UserScore> findTop10ByQuizOrderByScoreDescCompletionTimeAsc(Quiz quiz);
    @Query("SELECT new com.trafficquiz.trafficquiz.DTO.UserScoreDTO(u.id, u.username, SUM(us.score)) " +
            "FROM UserScore us " +
            "JOIN us.user u " +
            "GROUP BY u.id, u.username " +
            "ORDER BY SUM(us.score) DESC")
    List<UserScoreDTO> findTotalScoresGroupedByUser();



}

