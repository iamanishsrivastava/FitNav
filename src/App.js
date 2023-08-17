import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import About from './About.js';
import Services from './Services.js'; 

function App() {
  const [selectedSection, setSelectedSection] = useState('home');

  
  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  let sectionToRender;
  if (selectedSection === 'home') {
    sectionToRender = <Home />;
  } else if (selectedSection === 'about') {
    sectionToRender = <About />;
  } else if (selectedSection === 'services') {
    sectionToRender = <Services />;
  }

  return (
    <div className="App">
      <Navbar onSectionChange={handleSectionChange} />
      {sectionToRender}
    </div>
  );
}

export default App;
