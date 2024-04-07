package com.csu.webEngineering.WeatherApi.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Data
@Setter
@Getter
@ToString
public class AirQuality {
    private int aqi;
    private double co;
    private int mold_level;
    private int no2;
    private int o3;
    private int pm10;
    private int pm25;
    private int pollen_level_grass;
    private int pollen_level_tree;
    private int pollen_level_weed;
    private String predominant_pollen_type;
    private int so2;
}