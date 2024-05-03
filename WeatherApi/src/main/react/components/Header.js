import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; // Import CSS file for styling
import { UserContext } from '../context/UserContext';

const Header = () => {

  const {isLoggedIn, setIsLoggedIn, user, setUser} = useContext(UserContext);
  const navigate=useNavigate()


  const handleSignOut = () => {
    localStorage.setItem('user', {});
    localStorage.setItem('isLoggedIn', false);
    window.location.reload();
    Navigate("/")
  }
  return (
  
    <header className="header">
      <nav>
        <ul className="nav-links">
          
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {isLoggedIn ? (
          <ul className="user-info">
            <span className="welcome-message">Welcome </span>
            <span className="welcome-message">{isLoggedIn ? user.username : ""}</span>
            <button className='sign-out-button' onClick={handleSignOut}>
              Sign Out
            </button>
          </ul>
        ) : (
          <></>
        )}
      </nav>
    </header>

    
  );
};

export default Header;