
import React, { useState, useEffect } from 'react';
import './styles.css'; // Make sure your styles are applied

const Switch = () => {
  const [activeSection, setActiveSection] = useState("home"); // Default active section
  const [lightMode, setLightMode] = useState(false); // Toggle for light mode

  // Function to handle button click
  const handleControlClick = (sectionId) => {
    setActiveSection(sectionId); // Set the active section based on the button clicked
  };

  // Function to handle theme toggle
  const toggleTheme = () => {
    setLightMode(!lightMode); // Toggle the light mode
  };

  useEffect(() => {
    // Dynamically update the body class for light mode
    if (lightMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [lightMode]); // Update whenever `lightMode` changes

  return (
    <div>
      <div className="controls">
        <div
          className={`control ${activeSection === 'home' ? 'active-btn' : ''}`}
          onClick={() => handleControlClick('home')}
        >
          <i className="fas fa-home"></i>
        </div>
        <div
          className={`control ${activeSection === 'about' ? 'active-btn' : ''}`}
          onClick={() => handleControlClick('about')}
        >
          <i className="fas fa-user"></i>
        </div>
        <div
          className={`control ${activeSection === 'contact' ? 'active-btn' : ''}`}
          onClick={() => handleControlClick('contact')}
        >
          <i className="fas fa-envelope-open"></i>
        </div>
      </div>

      {/* Render sections conditionally based on activeSection */}
      <div className={activeSection === 'home' ? 'active' : ''} id="home">
        {/* Home Section Content */}
      </div>
      <div className={activeSection === 'about' ? 'active' : ''} id="about">
        {/* About Section Content */}
      </div>
      <div className={activeSection === 'contact' ? 'active' : ''} id="contact">
        {/* Contact Section Content */}
      </div>

      {/* Theme button */}
      <div className="theme-btn" onClick={toggleTheme}>
        <i className="fas fa-adjust"></i>
      </div>
    </div>
  );
};

export default Switch;
