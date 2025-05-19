package com.trafficquiz.trafficquiz.DTO;

public class DailyProgressDTO {
    private String date;
    private boolean completed;

    public DailyProgressDTO(String date, boolean completed) {
        this.date = date;
        this.completed = completed;
    }

    public String getDate() { return date; }
    public boolean isCompleted() { return completed; }
}

