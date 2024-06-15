// src/components/WeeklyForecast.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeeklyForecast.css';

function WeeklyForecast() {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const city = 'Jakarta'; // City for which you want the forecast
        const API_KEY = 'd81056a82d54245788c28bf14fad2822'; // Your API key
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
        );
        const dailyData = processForecastData(response.data.list);
        setForecastData(dailyData);
      } catch (error) {
        setError('Error fetching forecast data');
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, []);

  // Process data to group by day
  const processForecastData = (data) => {
    const days = {};

    data.forEach(entry => {
      const date = new Date(entry.dt_txt).toLocaleDateString('en-US', { weekday: 'short' });
      if (!days[date]) {
        days[date] = [];
      }
      days[date].push(entry);
    });

    return Object.keys(days).map(day => {
      const dayData = days[day];
      const temp_min = Math.min(...dayData.map(d => d.main.temp_min));
      const temp_max = Math.max(...dayData.map(d => d.main.temp_max));
      const weather = dayData[0].weather[0].description;
      return { day, temp_min, temp_max, weather };
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="weekly-forecast" id='forecast'>
      {forecastData.map((day, index) => (
        <div key={index} className="forecast-day">
          <div className="forecast-date">{day.day}</div>
          <div className="forecast-temp">
            Min: {day.temp_min}°C, Max: {day.temp_max}°C
          </div>
          <div className="forecast-weather">{day.weather}</div>
        </div>
      ))}
    </section>
  );
}

export default WeeklyForecast;
