// src/components/WeatherDetails.js
import React from 'react';
import './WeatherDetails.css';

function WeatherDetails() {
  // Placeholder data for weather details
  const detailsData = {
    airQuality: 'Moderate',
    humidity: 87,
    sunrise: '5:34 AM',
    sunset: '6:34 PM',
  };

  return (
    <section className="weather-details">
      <div className="detail-item">
        <span className="detail-title">Air Quality:</span>
        <span className="detail-value">{detailsData.airQuality}</span>
      </div>
      <div className="detail-item">
        <span className="detail-title">Humidity:</span>
        <span className="detail-value">{detailsData.humidity}%</span>
      </div>
      <div className="detail-item">
        <span className="detail-title">Sunrise:</span>
        <span className="detail-value">{detailsData.sunrise}</span>
      </div>
      <div className="detail-item">
        <span className="detail-title">Sunset:</span>
        <span className="detail-value">{detailsData.sunset}</span>
      </div>
    </section>
  );
}

export default WeatherDetails;
