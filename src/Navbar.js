import React from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';


import Contact from './Contact.js';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>          
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;