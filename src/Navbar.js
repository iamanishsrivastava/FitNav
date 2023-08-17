import React from "react";
import './Navbar.css';


const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li><a href="Contact.html">Contact</a></li>
          <li><a href="Testimonial.html">Testimonials</a></li>
          <li><a href="Services.html">Services</a></li>
          <li><a href="About.html">About</a></li>
          <li><a href="Home.html">Home</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;


