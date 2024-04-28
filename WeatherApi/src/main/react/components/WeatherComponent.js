import React, { useState } from 'react';

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
    //  const response = await fetch(url);
      const responseData = await response.text();
      console.log(responseData); // Log the response data
      const data = JSON.parse(responseData);
      //
     // const data = await response.json();
      console.log(data);
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Weather Information</h2>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="city" className="form-label">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={handleCityChange}
            className="form-control"
          />
        </div>
        <div className="col">
          <label htmlFor="latitude" className="form-label">Latitude:</label>
          <input
            type="text"
            id="latitude"
            value={latitude}
            onChange={handleLatitudeChange}
            className="form-control"
          />
        </div>
        <div className="col">
          <label htmlFor="longitude" className="form-label">Longitude:</label>
          <input
            type="text"
            id="longitude"
            value={longitude}
            onChange={handleLongitudeChange}
            className="form-control"
          />
        </div>
      </div>
      <div className="text-center">
        <button onClick={handleSearch} className="btn btn-primary">Search</button>
      </div>
      {loading ? (
        <p className="mt-3">Loading...</p>
      ) : error ? (
        <p className="mt-3">Error: {error}</p>
      ) : weatherData ? (
        <div className="mt-3">
         <p>Temperature: {weatherData.data[0].temp}</p>
    <p>Humidity: {weatherData.data[0].rh}</p>
          {/* Add more weather data fields here */}
        </div>
      ) : (
        <p className="mt-3">No weather data available</p>
      )}
    </div>
  );
};

export default WeatherComponent;
