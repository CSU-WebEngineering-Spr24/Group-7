package com.csu.webEngineering.WeatherApi.controller;


import com.csu.webEngineering.WeatherApi.model.AirQualityData;
import com.csu.webEngineering.WeatherApi.model.User;
import com.csu.webEngineering.WeatherApi.model.WeatherApiResponse;
import com.csu.webEngineering.WeatherApi.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public
class WeatherController {


    @Autowired
    private WeatherService weatherService;
    private static List<User> users = new ArrayList<> ();


    @GetMapping("/weather")
    public 
    ResponseEntity<WeatherApiResponse>
     getWeather (
            @RequestParam(required = false) Double lat ,
            @RequestParam(required = false) Double lon ,
            @RequestParam(required = false, defaultValue = "en") String lang ,
            @RequestParam(required = false, defaultValue = "I") String units ,
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

    @PostMapping("/register")
    public String registerUser (@RequestBody User user ) {
        System.out.println ( user);
       
        for (User existingUser : users) {
            if (existingUser.getUsername().equals(user.getUsername())) {
                return "Username already exists";
            }
        }

        // Add the new user to the list
        users.add(user);
        return "User registered successfully";
    }

    @PostMapping("/validate")
    public boolean validateUser(@RequestBody User user) {

        for (User existingUser : users) {
            if (existingUser.getUsername().equals(user.getUsername()) && existingUser.getPassword().equals(user.getPassword())) {
                return true; // User is validated
            }
        }

        return false;
    }



}
