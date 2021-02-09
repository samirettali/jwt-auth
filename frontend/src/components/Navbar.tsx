import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../UserContext';

import '../styles/navbar.css'

const Navbar = () => {
  const { logged, setLogged } = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem('token');
    setLogged(false);
  };

  return (
    <div className='navbar-container'>
      <nav className='navbar'>
        <div className='navbar-brand'>
          <Link to="/">Home</Link>
        </div>
        { logged ? (
          <>
            <div className='navbar-item'>
              <Link to="/dashboard">Dashboard</Link>
            </div>
            <div className='navbar-item'>
              <a onClick={logout}>Logout</a>
            </div>
          </>
        ) : (
          <div className='navbar-item'>
            <Link to="/login">Login</Link>
          </div>
        )}
      </nav>
    </div>
  );

}
export default Navbar;
