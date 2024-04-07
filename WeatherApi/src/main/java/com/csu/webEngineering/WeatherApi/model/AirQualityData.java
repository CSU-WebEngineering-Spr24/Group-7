package com.csu.webEngineering.WeatherApi.model;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

//@JsonIgnoreProperties(ignoreUnknown = true)
@Data
@Setter
@Getter
@ToString
public class AirQualityData {
    private double lat;
    private double lon;
    private String timezone;
    private String city_name;
    private String country_code;
    private String state_code;
    private AirQuality[] data;

    /* "lat":35.7721,
             "lon":-78.63861,
             "timezone":"America\/New_York",
             "city_name":"Raleigh",
             "country_code":"US",
             "state_code":"NC",*/

}
