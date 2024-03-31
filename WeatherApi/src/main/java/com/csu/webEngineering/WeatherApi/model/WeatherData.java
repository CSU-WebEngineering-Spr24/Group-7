package com.csu.webEngineering.WeatherApi.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@Data
@ToString
public class WeatherData {
        private double app_temp;
        private int aqi;
        private String city_name;
        private int clouds;
        private String country_code;
        private String datetime;
        private double dewpt;
        private double dhi;
        private double dni;
        private double elev_angle;
        private double ghi;
        private Double gust;
        private int h_angle;
        private double lat;
        private double lon;
        private String ob_time;
        private String pod;
        private double precip;
        private double pres;
        private int rh;
        private int slp;
        private double snow;
        private double solar_rad;
        private List<String> sources;
        private String state_code;
        private String station;
        private String sunrise;
        private String sunset;
        private double temp;
        private String timezone;
        private long ts;
        private double uv;
        private int vis;
        private WeatherDescription weather;
        private String wind_cdir;
        private String wind_cdir_full;
        private int wind_dir;
        private double wind_spd;

        // Getters and setters for all fields
        // WeatherDescription class definition is also needed
    }