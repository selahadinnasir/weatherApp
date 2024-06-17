// src/components/Header.js
import {React,useState} from 'react';
import './Header.css'; // Link to your CSS file


function Header({ setCity }) {
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setCity(input.trim());
      setInput(''); // Clear input after search
    }
  };
  return (
    <header className="header" id='header'>
      <div className="logo">WeatherApp</div>
        <div className="search-bar">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for a city..."
          />
          <button type="submit" className='search-button'>Search</button>
        </form>
       </div>
      <nav className="nav-links">
        <a href="#header">Home</a>
        <a href="#forecast">Forecast</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}

export default Header;
