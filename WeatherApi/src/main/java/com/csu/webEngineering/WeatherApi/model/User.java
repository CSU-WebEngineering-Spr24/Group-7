package com.csu.webEngineering.WeatherApi.model;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Data
@Setter
@Getter
@ToString
public class User {
    private String username;
    private String password;

    public
    String getUsername () {
        return username;
    }

    public
    String getPassword () {
        return password;
    }

    public
    void setPassword ( String password ) {
        this.password = password;
    }

    public
    void setUsername ( String username ) {
        this.username = username;
    }
// Getters and setters
}