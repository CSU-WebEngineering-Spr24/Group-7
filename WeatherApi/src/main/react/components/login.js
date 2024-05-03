import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import '../css/Login.css'; // Import CSS file for styling
import { UserContext } from '../context/UserContext';
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate
  
  const  {isLoggedIn, setIsLoggedIn, user, setUser} = useContext(UserContext);
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    // Hard-coded username and password for demonstration purposes
    const hardcodedUsername = 'test';
    const hardcodedPassword = 'password';
    const userObject = {
      username: username,
      password: password
    }

    try{

      const response = await axios.post("http://localhost:8085/validate", userObject,
      {headers: {'Content-Type': 'application/json'}});


      if (response.data===true){
        console.log(response);
        setError('');
        localStorage.setItem('user', JSON.stringify(userObject));
        localStorage.setItem('isLoggedIn', true);
        setIsLoggedIn(true);
        setUser(userObject);
        // toast.success('Login successful');

        navigate('/weather');
      }
      else{
        toast.error('Invalid username or password');
        setError('Invalid username or password');
      }
      // Call the handleLogin callback function passed from the parent component
     // handleLogin();

      // Navigate to the weather component after successful login
    }
      


     catch {
      // Display error message if username and password do not match
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Weather Website</h2>
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
            <button type="submit">Login</button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </form>
        <div className="form-group">
          <Link to="/create-account">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
