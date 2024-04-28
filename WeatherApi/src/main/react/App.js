/* 

import React from "react";
import './App.css';
//import Welcome from "./Welcome";
import WeatherComponent from "./components/WeatherComponent";
function App() {


  return (
    <>
     <WeatherComponent/>
     
    </>
  )
}

export default App
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
 // Import your home component
import About from './components/about.js'; // Import your about component
//import Contact from './Contact'; // Import your contact component

import WeatherComponent from "./components/WeatherComponent";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<WeatherComponent />} />
          <Route path="/about" element={<About />} />
         {/* // <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;



