import React from 'react';
import './About.css'; // Ensure to import your CSS file

const About = () => {
  return (
    <section className="about-section" id='about'>
      <div className='content-wrapper'>
        <h3>About the Developer</h3>
        <p>Hi, I'm Selahadin Nasir the sole developer behind WeatherApp. With a passion for software 
           development and meteorology,
           I created WeatherPro to bring accurate and accessible weather information to users everywhere. 
           I strive to continuously improve the app and appreciate your feedback and support.</p>
        <p>Contact me at <a href="mailto:selahadinas93@gmail.com">selahadinas93@gmail.com</a> for feedback, 
          support, or inquiries.</p>
  
     </div>
    </section>
  );
};

export default About;
