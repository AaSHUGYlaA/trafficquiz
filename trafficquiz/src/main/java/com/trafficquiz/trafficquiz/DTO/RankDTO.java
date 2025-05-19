package com.trafficquiz.trafficquiz.DTO;

public class RankDTO {
    private int position;
    private double percentile;

    public RankDTO(int position, double percentile) {
        this.position = position;
        this.percentile = percentile;
    }

    public int getPosition() { return position; }
    public double getPercentile() { return percentile; }
}

