import React from 'react';

const About = () => {
  return (
    <div className="container">
      <h2>About Weather Website</h2>
      <p>Welcome to our weather website! This website is designed to provide you with accurate and up-to-date weather information for locations around the world.</p>
      <p>Features:</p>
      <ul>
        <li>Real-time weather data</li>
        <li>Forecast information for the next few days</li>
        <li>Search functionality to find weather details for specific cities</li>
        {/* Add more features as needed */}
      </ul>
      <p>Our Team:</p>
      <ul>
        <li>John Doe - Lead Developer</li>
        <li>Jane Smith - UX Designer</li>
        <li>Michael Johnson - Data Analyst</li>
        {/* Add more team members as needed */}
      </ul>
      <p>For any inquiries or feedback, please contact us at contact@weatherwebsite.com.</p>
    </div>
  );
};

export default About;
