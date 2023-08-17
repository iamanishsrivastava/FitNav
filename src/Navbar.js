import React from "react";
import './Navbar.css';


import Contact from './Contact.js';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>          
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#Testimonial">Testimonials</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;