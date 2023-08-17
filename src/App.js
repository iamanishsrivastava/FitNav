import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import About from './About.js'; // Import the About component
import Services from './Services.js'; // Import the Services component

function App() {
  const [selectedSection, setSelectedSection] = useState('home'); // Default selected section

  // Function to handle section selection
  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  // Render the selected section based on the navbar option
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
