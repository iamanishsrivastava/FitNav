import React from "react";
import './Navbar.css';


import Contact from './Contact.js';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>          
          <li><a href="./Home.js">Home</a></li>
          <li><a href="./About.js">About</a></li>
          <li><a href="./Services.js">Services</a></li>
          <li><a href="./Testimonial.js">Testimonials</a></li>
          <li><a href="./Contact.js">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;