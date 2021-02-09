import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './Navbar';
import '../styles/layout.css'

const Layout: React.FC = ({ children }) => (
  <div>
    <BrowserRouter>
        <div className='layout'>
          <Navbar />
          <div className='container'>
            {children}
          </div>
        </div>
    </BrowserRouter>
  </div>
);

export default Layout;
