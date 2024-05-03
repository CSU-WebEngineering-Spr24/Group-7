

import React,{ useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
 // Import your home component
import About from './components/about.js'; // Import your about component
//import Contact from './Contact'; // Import your contact component
import Login from './components/login.js';
import CreateLoginAccount from './components/CreateLoginAccount.js';

import toast, { Toaster } from 'react-hot-toast';
 

import WeatherComponent from "./components/WeatherComponent";
const App = () => {
  return (
    <>
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/create-account" element={<CreateLoginAccount />} />
          <Route path="/weather" element={<WeatherComponent />} />
        </Routes>
      </div>
    </Router>
     <Toaster />
     </>
  );
};

export default App;



