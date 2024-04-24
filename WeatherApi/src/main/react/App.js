

import React, {Component} from "react";
import './App.css'
import NasaDataComponent from './components/NasaDataComponent'
import { Link, Route, Routes } from 'react-router-dom'
import  {BrowserRouter} from "react-router-dom"
//import WelcomeMessage from "./components/WelcomeMessage";
function App() {


  return (
    <>
    {<nav>
        <a href="/">home</a>
     <a href="/nasa"> Click here to retrieve NASA Data</a>
     </nav> }

  <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Nasa Home page</h1>}/>
          <Route path='/nasa' element={<<h1>Nasa Home page</h1>/>} />
        </Routes>
    </BrowserRouter>
      
     
    </>
  )
}

export default App


