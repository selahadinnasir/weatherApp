// src/components/CurrentWeather.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CurrentWeather.css';

function CurrentWeather({city}) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d81056a82d54245788c28bf14fad2822`
        );
        setWeatherData(response.data);
        setError(null);
      } catch (error) {
        setError('Error fetching weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className={`current-weather `}>
      <div className="weather-main">
        <h2>{weatherData.name}</h2>
        <div className="weather-icon">🌩️</div>
        <div className={`icon ${weatherData.weather[0].main.toLowerCase()}`}>{weatherData.weather[0].main.toLowerCase()}</div>
        
        <div className="temperature">{weatherData.main.temp}°C</div>
        <div className="condition">{weatherData.weather[0].description}</div>
        <div className="date">{new Date().toLocaleString()}</div>
      </div>
    </section>
  );
}

export default CurrentWeather;
