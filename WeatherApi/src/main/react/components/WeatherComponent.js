import React, { useState } from 'react';
import './WeatherComponent.css'; // Import CSS file for styling

const WeatherComponent = () => {
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      setLoading(true);
      let url = '';
      if (city !== '') {
        url = `https://api.weatherbit.io/v2.0/current/weather?city=${city}&key=de19ef70ac7d45baac6d7327ba46710e`;
      } else {
        url = `https://api.weatherbit.io/v2.0/current/weather?lat=${latitude}&lon=${longitude}&key=de19ef70ac7d45baac6d7327ba46710e`;
      }
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const responseData = await response.json();
      setWeatherData(responseData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
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
      <div className="weather-data">
        {loading ? (
          <p className="weather-loading">Loading...</p>
        ) : error ? (
          <p className="weather-error">Error: {error}</p>
        ) : weatherData ? (
          <div className="weather-info">
            <p>Temperature: {weatherData.data[0].temp}</p>
            <p>Humidity: {weatherData.data[0].rh}</p>
            {/* Add more weather data fields here */}
          </div>
        ) : (
          <p className="weather-no-data">No weather data available</p>
        )}
      </div>

    </div>
  );
};

export default WeatherComponent;
