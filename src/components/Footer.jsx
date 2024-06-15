// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} WeatherApp. All rights reserved.</p>
        <nav>
          <a href="#header">Home</a> | <a href="#forecast">Forecast</a> | <a href="#about">Contact</a>
        </nav>
        <p>Powered by <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">OpenWeatherMap</a></p>
      </div>
    </footer>
  );
}

export default Footer;
