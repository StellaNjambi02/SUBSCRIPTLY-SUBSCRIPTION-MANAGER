import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import homeicon from '../assets/homeicon.png';


const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt="logo" className='navbar-logo' />
      <ul>
      <li><NavLink to="/home" className="nav-item"><img src={homeicon} alt="home" className="nav-icon" /> Home</NavLink></li>
        <li><NavLink to="/login" className="nav-item">Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;