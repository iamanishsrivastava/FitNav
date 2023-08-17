import logo from './logo.svg';
import './App.css';

import React from 'react';
import Home from './Home.js';
import Navbar from './Navbar.js';
import Services from './Services.js';
import About from './About.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
    </div>
  );
}

export default App;