import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import './WeatherComponent.css'; // Import CSS file for styling

const WeatherComponent = () => {
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [aqiData, setAqiData] = useState(null);
  const [error, setError] = useState(null);
  const [tempUnit, setTempUnit] = useState('C');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleLatitudeChange = (event) => {
    setLatitude(event.target.value);
  };

  const handleLongitudeChange = (event) => {
    setLongitude(event.target.value);
  };

  const handleSearch = async () => {
    try {
      let url = '';
      if (city !== '') {
        // url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=de19ef70ac7d45baac6d7327ba46710e`;
        console.log("weather-1")
        url = "http://localhost:8085/weather?city=" + city + "&units=" + tempUnit;
        try {
          console.log("weather-2")
          const response = await axios.get(url);

          console.log("hello checking weather api repsonse", response.data.data)
          setWeatherData(response.data.data);

        }
        catch {
          console.log("weather-3")
          console.log("Error")
          setWeatherData(null);

        }
      } else if (latitude !== '' && longitude !== '') {
        // url = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=de19ef70ac7d45baac6d7327ba46710e`;
        url = "http://localhost:8085/weather?lat=" + latitude + "&lon=" + longitude + "&units=" + tempUnit;
        try {

          const response = await axios.get(url);
          setWeatherData(response.data.data);
        } catch {
          console.log("Error")
          setWeatherData(null);
        }
      } else {
        throw new Error('Please provide either a city name or latitude/longitude');
      }

      if (city !== '') {
        const aqiUrl = `/airquality?city=${city}`;
        const aqiResponse = await axios.get(aqiUrl);
        setAqiData(aqiResponse.data);
      }
    } catch (error) {
      setError(error.message);
    }
  };



  console.log("weather indexing ", weatherData[0])
  // console.log("weather indexing ",weatherData[0].temp)

  return (
    <>
      <div className="weather-container">
        <h2 className="weather-heading">Weather Information</h2>
        <div className="weather-inputs">
          <input
            type="text"
            placeholder="Enter City Name"
            value={city}
            onChange={handleCityChange}
            className="weather-input"
          />
          <input
            type="text"
            placeholder="Enter Latitude"
            value={latitude}
            onChange={handleLatitudeChange}
            className="weather-input"
          />
          <input
            type="text"
            placeholder="Enter Longitude"
            value={longitude}
            onChange={handleLongitudeChange}
            className="weather-input"
          />
          <button onClick={handleSearch} className="weather-button">Search</button>
        </div>
        {/* //create a drop down to select celsius or fahrenheit */}
        <div className="weather-unit">
          <label>
            <input
              type="radio"
              value="M"
              checked={tempUnit === 'M'}
              onChange={(e) => setTempUnit(e.target.value)}
            />
            Celsius
          </label>
          <label>
            <input
              type="radio"
              value="I"
              checked={tempUnit === 'I'}
              onChange={(e) => setTempUnit(e.target.value)}
            />
            Fahrenheit
          </label>
        </div>





        {/* <div className="weather-data">
        {error ? (
          <p className="weather-error">Error: {error}</p>
        ) : weatherData ? (
          <div className="weather-info">
            <p>Temperature: {weatherData.data[0].temp}</p>
            <p>Humidity: {weatherData.data[0].rh}</p>
            {/* Add more weather data fields here */}
        {/* </div> */}
        {/* ) : ( */}
        {/* <p className="weather-no-data">No weather data available</p> */}
        {/* )} */}
        {/* {aqiData && ( */}
        {/* // <div className="aqi-info"> */}
        {/* <p>Air Quality Index: {aqiData.data[0].aqi}</p> */}
        {/* Add more AQI data fields here */}
        {/* </div> */}
        {/* // )} */}
        {/* </div> } */}

      </div>

      {weatherData && weatherData.length > 0 ? (
        <div className="container mt-5">
          <div className="d-flex flex-row justify-content-center align-items-center">
            <div className="weather__card">
              <div className="d-flex flex-row justify-content-center align-items-center">
                <div className="p-3">
                  {/* <h2>hello</h2> */}

                  <h2>{weatherData[0]["temp"]}&deg;</h2>
                  <span>{tempUnit === 'C' ? 'Celsius' : 'Fahrenheit'}</span>
                </div>
                <div className="p-3">
                  <img src="https://svgur.com/i/oKG.svg" alt="Weather Icon" />
                </div>
                <div className="p-3">
                  <h5>{weatherData[0]["datetime"]}</h5>
                  <h3>{weatherData[0]["city_name"]}</h3>
                  <span className="weather__description">{weatherData[0]["weather"]["description"]}</span>
                </div>
              </div>
              <div className="weather__status d-flex flex-row justify-content-center align-items-center mt-3">
                <div className="p-4 d-flex justify-content-center align-items-center">
                  <img src="https://svgur.com/i/oHw.svg" alt="Humidity Icon" />
                  <span>{weatherData[0]["rh"]}%</span>
                </div>
                <div className="p-4 d-flex justify-content-center align-items-center">
                  <img src="https://svgur.com/i/oH_.svg" alt="Pressure Icon" />
                  <span>{weatherData[0]["pres"]} mB</span>
                </div>
                <div className="p-4 d-flex justify-content-center align-items-center">
                  <img src="https://svgur.com/i/oKS.svg" alt="Wind Speed Icon" />
                  <span>{weatherData[0]["wind_spd"]} km/h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : ''}
    </>
  );
};

export default WeatherComponent;
