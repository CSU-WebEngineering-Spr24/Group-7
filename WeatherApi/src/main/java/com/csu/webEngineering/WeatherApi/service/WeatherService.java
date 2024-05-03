package com.csu.webEngineering.WeatherApi.service;


import com.csu.webEngineering.WeatherApi.model.AirQualityData;
import com.csu.webEngineering.WeatherApi.model.WeatherApiResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public
class WeatherService {

    @Value("${weather.api.key}") // Load API key from application.properties
    private String apiKey;
    RestTemplate restTemplate = new RestTemplate ( );

    public
    ResponseEntity<WeatherApiResponse> 
     getWeather ( Double lat , Double lon , String lang , String units , String include , String city , String state , String country , String postalCode , String cityId , String station , String cities , String stations , String points ) {
        String apiUrl = "http://api.weatherbit.io/v2.0/current";
        String fullUrl = apiUrl + "?key=" + apiKey;

        if ( lat != null && lon != null ) {
            fullUrl += "&lat=" + lat + "&lon=" + lon;
        }
        else if ( city != null ) {
            fullUrl += "&city=" + city;
            if ( state != null ) {
                fullUrl += "," + state;
            }
            if ( country != null ) {
                fullUrl += "&country=" + country;
            }
        }
        else if ( postalCode != null ) {
            fullUrl += "&postal_code=" + postalCode;
            if ( country != null ) {
                fullUrl += "&country=" + country;
            }
        }
        else if ( cityId != null ) {
            fullUrl += "&city_id=" + cityId;
        }
        else if ( station != null ) {
            fullUrl += "&station=" + station;
        }
        else if ( cities != null ) {
            fullUrl += "&cities=" + cities;
        }
        else if ( stations != null ) {
            fullUrl += "&stations=" + stations;
        }
        else if ( points != null ) {
            fullUrl += "&points=" + points;
        }
        else {
            // Handle error or provide default behavior
            //  return ResponseEntity.badRequest().body (  )
        }

        if ( lang != null ) {
            fullUrl += "&lang=" + lang;
        }
        if ( units != null ) {
            fullUrl += "&units=" + units;
        }
        if ( include != null ) {
            fullUrl += "&include=" + include;
        }

        // RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<WeatherApiResponse> response = restTemplate.getForEntity ( fullUrl , WeatherApiResponse.class );
        if (response.getStatusCode() == HttpStatus.OK) {
            return ResponseEntity.ok(response.getBody());
        } else {
            // If response is not OK, construct a new ResponseEntity with appropriate status code
            WeatherApiResponse errorResponse = new WeatherApiResponse();
            errorResponse.setCount(0);
            errorResponse.setData(null);
            // return new ResponseEntity<>(errorResponse, response.getStatusCode());
            return ResponseEntity.ok(errorResponse);
        }

       
    }



    public
    ResponseEntity<AirQualityData> getAirQuality ( Double lat , Double lon , String city , String state , String country ) {
        String apiUrl = "https://api.weatherbit.io/v2.0/current/airquality";
        String fullUrl = apiUrl + "?key=" + apiKey;
        if ( lat != null && lon != null ) {
            fullUrl += "&lat=" + lat + "&lon=" + lon;
        }
        else if ( city != null ) {
            fullUrl += "&city=" + city;
            if ( state != null ) {
                fullUrl += "," + state;
            }
            if ( country != null ) {
                fullUrl += "&country=" + country;
            }
        }
        else {
            // Handle invalid request
            return ResponseEntity.badRequest ( ).build ( );
        }
        System.out.println ( "full url " + fullUrl );
        AirQualityData airQualityData = restTemplate.getForObject ( fullUrl , AirQualityData.class );
        return ResponseEntity.ok ( airQualityData );
    }

}