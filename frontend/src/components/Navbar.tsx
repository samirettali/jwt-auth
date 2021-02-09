import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <nav className='navbar'>
          <div className='navbar-brand'>
            <Link to="/">Home</Link>
          </div>
          <div className='navbar-item'>
            <a>Logout</a>
          </div>
          <div className='navbar-item'>
            <Link to="/login">Login</Link>
          </div>
      </nav>
    </div>
  );

}
export default Navbar;
