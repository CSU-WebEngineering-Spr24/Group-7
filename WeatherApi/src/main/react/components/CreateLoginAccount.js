import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import '../css/Login.css'; // Import CSS file for styling
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


const CreateLoginAccount = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const {isLoggedIn, setIsLoggedIn, user, setUser} = useContext(UserContext); 

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userObject = {
      username: username,
      password: password
    }
    console.log(userObject);

    try{
      console.log("hello-1")
      const response = await axios.post("http://localhost:8085/register", userObject,
      {headers: {'Content-Type': 'application/json'}}
    );
      console.log(response);
      console.log("hello-2")

      // localStorage.setItem('user', JSON.stringify(userObject));
      // localStorage.setItem('isLoggedIn', true);
      // setIsLoggedIn(true);
      // setUser(userObject);
      toast.success('Account created successfully');
      navigate('/');
    }
    catch{
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Registration to Weather Website</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Sign Up</button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
     
    </div>
  );
};



export default CreateLoginAccount;
