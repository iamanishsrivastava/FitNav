import logo from './logo.svg';
import './App.css';

import React from 'react';
import Home from './Home.js';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;