package com.trafficquiz.trafficquiz.repository;

import com.trafficquiz.trafficquiz.DTO.UserScoreDTO;
import com.trafficquiz.trafficquiz.model.Quiz;
import com.trafficquiz.trafficquiz.model.UserScore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserScoreRepository extends JpaRepository<UserScore, Long> {

    List<UserScore> findByUserId(Long userId);
    Optional<UserScore> findByUserIdAndQuizId(Long userId, Long quizId);


    //leaderboard
    List<UserScore> findTop10ByQuizOrderByScoreDescCompletionTimeAsc(Quiz quiz);
    @Query("SELECT new com.trafficquiz.trafficquiz.DTO.UserScoreDTO(u.id, u.username, SUM(us.score)) " +
            "FROM UserScore us " +
            "JOIN us.user u " +
            "GROUP BY u.id, u.username " +
            "ORDER BY SUM(us.score) DESC")
    List<UserScoreDTO> findTotalScoresGroupedByUser();

    @Query("SELECT DATE(us.dateTaken), COUNT(us) > 0 FROM UserScore us WHERE us.user.id = :userId GROUP BY DATE(us.dateTaken)")
    List<Object[]> getDailyProgress(@Param("userId") Long userId);

    @Query("SELECT DISTINCT CAST(us.dateTaken AS date) FROM UserScore us WHERE us.user.id = :userId")
    List<LocalDate> findDistinctCompletedDates(@Param("userId") Long userId);

    @Query("SELECT us.user.id, SUM(us.score) as totalScore FROM UserScore us GROUP BY us.user.id ORDER BY totalScore DESC")
    List<Object[]> getUserRanks();

}

