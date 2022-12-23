
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'
const NavBar = () => {
  return (
    <nav>
      <div id='nav-nav-container'>
      <ul id='nav-container'>
        <li id='nav-li'>
          <NavLink to='/' exact={true} activeClassName='active' id='nav-button'>
            Home
          </NavLink>
        </li >
        <li id='nav-li'>
          <NavLink to='/login' exact={true} activeClassName='active' id='nav-button'>
            Login
          </NavLink>
        </li>
        <li id='nav-li'>
          <NavLink to='/sign-up' exact={true} activeClassName='active' id='nav-button'>
            Sign Up
          </NavLink>
        </li>
        <li id='nav-li'>
          <NavLink to='/users' exact={true} activeClassName='active' id='nav-button'>
            Users
          </NavLink>
        </li>
        <li id='nav-li'>
          <NavLink to='/upload' exact={true} activeClassName='active' id='nav-button'>
            Upload
          </NavLink>
        </li>
        <li id='nav-li'>
        <NavLink to='/logout' exact={true} activeClassName='active' id='nav-button'>
            Logout
          </NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default NavBar;
