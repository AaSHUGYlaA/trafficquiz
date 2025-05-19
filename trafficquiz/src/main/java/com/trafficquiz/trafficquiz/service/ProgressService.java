package com.trafficquiz.trafficquiz.service;

import com.trafficquiz.trafficquiz.DTO.DailyProgressDTO;
import com.trafficquiz.trafficquiz.DTO.RankDTO;
import com.trafficquiz.trafficquiz.repository.UserScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProgressService {

    @Autowired
    private UserScoreRepository userScoreRepository;

    public List<DailyProgressDTO> getDailyProgress(Long userId) {
        List<Object[]> results = userScoreRepository.getDailyProgress(userId);
        return results.stream()
                .map(row -> new DailyProgressDTO(
                        row[0].toString(),    // date
                        (Boolean) row[1]      // completed
                )).collect(Collectors.toList());
    }

    public int getStreakCount(Long userId) {
        List<LocalDate> completedDates = userScoreRepository.findDistinctCompletedDates(userId);

        int streak = 0;
        LocalDate today = LocalDate.now();

        while (completedDates.contains(today.minusDays(streak))) {
            streak++;
        }

        return streak;
    }

    public RankDTO getUserRank(Long userId) {
        List<Object[]> rankings = userScoreRepository.getUserRanks();
        int rank = 1;
        int totalUsers = rankings.size();

        for (Object[] row : rankings) {
            Long uid = (Long) row[0];
            if (uid.equals(userId)) break;
            rank++;
        }

        double percentile = ((double)(totalUsers - rank) / totalUsers) * 100;

        return new RankDTO(rank, percentile);
    }
}

