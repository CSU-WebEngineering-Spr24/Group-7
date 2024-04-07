package com.csu.webEngineering.WeatherApi.controller;


import com.csu.webEngineering.WeatherApi.model.AirQualityData;
import com.csu.webEngineering.WeatherApi.model.WeatherApiResponse;
import com.csu.webEngineering.WeatherApi.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public
class WeatherController {


    @Autowired
    private WeatherService weatherService;


    @GetMapping("/weather")
    public
    ResponseEntity<WeatherApiResponse> getWeather (
            @RequestParam(required = false) Double lat ,
            @RequestParam(required = false) Double lon ,
            @RequestParam(required = false, defaultValue = "en") String lang ,
            @RequestParam(required = false, defaultValue = "M") String units ,
            @RequestParam(required = false) String include ,
            @RequestParam(required = false) String city ,
            @RequestParam(required = false) String state ,
            @RequestParam(required = false) String country ,
            @RequestParam(required = false) String postalCode ,
            @RequestParam(required = false) String cityId ,
            @RequestParam(required = false) String station ,
            @RequestParam(required = false) String cities ,
            @RequestParam(required = false) String stations ,
            @RequestParam(required = false) String points
                                                  ) {
        return weatherService.getWeather ( lat , lon , lang , units , include , city , state , country , postalCode , cityId , station , cities , stations , points );
    }


    @GetMapping("/airquality")
    public
    ResponseEntity<AirQualityData> getAirQualityData (
            @RequestParam(required = false) Double lat ,
            @RequestParam(required = false) Double lon ,
            @RequestParam(required = false) String city ,
            @RequestParam(required = false) String state ,
            @RequestParam(required = false) String country
                                                     ) {
        return weatherService.getAirQuality ( lat , lon , city , state , country );
    }
}
