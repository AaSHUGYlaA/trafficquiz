package com.trafficquiz.trafficquiz.DTO;

public class UserScoreDTO {
    private Long userId;
    private String username;
    private Long totalScore; // Changed from int to Long

    public UserScoreDTO(Long userId, String username, Long totalScore) {
        this.userId = userId;
        this.username = username;
        this.totalScore = totalScore;
    }

    public Long getUserId() { return userId; }
    public String getUsername() { return username; }
    public Long getTotalScore() { return totalScore; }
}


