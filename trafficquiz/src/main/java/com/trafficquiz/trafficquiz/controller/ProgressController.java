package com.trafficquiz.trafficquiz.controller;

import com.trafficquiz.trafficquiz.DTO.DailyProgressDTO;
import com.trafficquiz.trafficquiz.DTO.RankDTO;
import com.trafficquiz.trafficquiz.service.ProgressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/progress")
public class ProgressController {

    @Autowired
    private ProgressService progressService;

    @GetMapping("/daily/{userId}")
    public List<DailyProgressDTO> getDailyProgress(@PathVariable Long userId) {
        return progressService.getDailyProgress(userId);
    }

    @GetMapping("/streak/{userId}")
    public int getStreakCount(@PathVariable Long userId) {
        return progressService.getStreakCount(userId);
    }

    @GetMapping("/rank/{userId}")
    public RankDTO getUserRank(@PathVariable Long userId) {
        return progressService.getUserRank(userId);
    }
}

