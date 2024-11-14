import React, { useState, useEffect } from 'react';
import '../styles.css'; // Ensure that your CSS is linked correctly
const ControlsComponent = ({ setActiveSection }) => {
  // State to track theme (default is false for dark mode)
  const [isLightMode, setIsLightMode] = useState(false);

  // Handle button click to change the active section
  const handleControlClick = (sectionId) => {
    setActiveSection(sectionId); // Use the prop to update the active section
  };

  // Handle theme toggle
  const toggleTheme = () => {
    setIsLightMode(!isLightMode); // Toggle between light and dark mode
  };

  // Effect to update body class based on light mode state
  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  return (
    <div>
      {/* Control buttons */}
      <div className="controls">
        <div
          className="control"
          onClick={() => handleControlClick('home')}
        >
          <i className="fas fa-home"></i>
        </div>
        <div
          className="control"
          onClick={() => handleControlClick('about')}
        >
          <i className="fas fa-user"></i>
        </div>
        <div
          className="control"
          onClick={() => handleControlClick('contact')}
        >
          <i className="fas fa-envelope-open"></i>
        </div>
      </div>

      {/* Theme toggle button */}
      <div className="theme-btn" onClick={toggleTheme}>
        <i className="fas fa-adjust"></i>
      </div>
    </div>
  );
};

export default ControlsComponent;