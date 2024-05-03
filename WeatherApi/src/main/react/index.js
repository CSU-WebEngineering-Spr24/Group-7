import React from 'react'
import ReactDOM from "react-dom/client"
import App from './App'
import './App.css'
import UserContextProvider from './context/UserContext'


ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
     <UserContextProvider>
      <App /> 
     </UserContextProvider>
  </React.StrictMode>
)
