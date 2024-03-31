package com.csu.webEngineering.WeatherApi.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Data
@Setter
@Getter
@ToString
public class WeatherApiResponse {
    private int count;
    private List<WeatherData> data;

    public
    int getCount () {
        return count;
    }

    public
    void setCount ( int count ) {
        this.count = count;
    }

    public
    List<WeatherData> getData () {
        return data;
    }

    public
    void setData ( List<WeatherData> data ) {
        this.data = data;
    }
}