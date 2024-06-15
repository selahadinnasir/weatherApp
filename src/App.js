import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import WeeklyForecast from './components/WeeklyForecast';
import WeatherDetails from './components/WeatherDetails';
import About from './components/About';
import Footer from './components/Footer';
// my api key for weatehrmap d81056a82d54245788c28bf14fad2822


function App() {
  const [city,setCity] = useState('Jakarta');

  return (
    <div className="App">
     <Header setCity={setCity} /> 
     <main>
      <CurrentWeather city={city} />
      <WeeklyForecast city={city} />
      <WeatherDetails/>
      <About/>
     </main>
      <Footer/>
    </div>
  );
}

export default App;
