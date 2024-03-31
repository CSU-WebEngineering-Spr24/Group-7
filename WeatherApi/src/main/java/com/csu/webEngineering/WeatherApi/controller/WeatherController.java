package com.csu.webEngineering.WeatherApi.controller;


import com.csu.webEngineering.WeatherApi.model.WeatherApiResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class WeatherController {

    @Value("${weather.api.key}") // Load API key from application.properties
    private String apiKey;

    @GetMapping("/weather")
    public ResponseEntity<WeatherApiResponse> getWeather (
            @RequestParam(required = false) Double lat,
            @RequestParam(required = false) Double lon,
            @RequestParam(required = false, defaultValue = "en") String lang,
            @RequestParam(required = false, defaultValue = "M") String units,
            @RequestParam(required = false) String include,
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String state,
            @RequestParam(required = false) String country,
            @RequestParam(required = false) String postalCode,
            @RequestParam(required = false) String cityId,
            @RequestParam(required = false) String station,
            @RequestParam(required = false) String cities,
            @RequestParam(required = false) String stations,
            @RequestParam(required = false) String points ) {

        String apiUrl = "https://api.weatherbit.io/v2.0/current";
        String fullUrl = apiUrl + "?key=" + apiKey;

        if (lat != null && lon != null) {
            fullUrl += "&lat=" + lat + "&lon=" + lon;
        } else if (city != null) {
            fullUrl += "&city=" + city;
            if (state != null) {
                fullUrl += "," + state;
            }
            if (country != null) {
                fullUrl += "&country=" + country;
            }
        } else if (postalCode != null) {
            fullUrl += "&postal_code=" + postalCode;
            if (country != null) {
                fullUrl += "&country=" + country;
            }
        } else if (cityId != null) {
            fullUrl += "&city_id=" + cityId;
        } else if (station != null) {
            fullUrl += "&station=" + station;
        } else if (cities != null) {
            fullUrl += "&cities=" + cities;
        } else if (stations != null) {
            fullUrl += "&stations=" + stations;
        } else if (points != null) {
            fullUrl += "&points=" + points;
        } else {
            // Handle error or provide default behavior
          //  return ResponseEntity.badRequest().body (  )
        }

        if (lang != null) {
            fullUrl += "&lang=" + lang;
        }
        if (units != null) {
            fullUrl += "&units=" + units;
        }
        if (include != null) {
            fullUrl += "&include=" + include;
        }

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<WeatherApiResponse> response = restTemplate.getForEntity (fullUrl, WeatherApiResponse.class );
        return response;
    }
}
