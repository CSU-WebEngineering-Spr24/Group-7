package com.csu.webEngineering.WeatherApi.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Data
@Setter
@ToString
public  class WeatherDescription {
        private String description;
        private int code;
        private String icon;

        // Getters and setters for description, code, and icon
    }