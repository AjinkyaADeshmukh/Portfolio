import React from 'react';
import Header from './Components/Headers'
import About from './Components/About'
import Contact from './Components/Contact'
import ThemeButton from './Components/ThemeButton'
import './styles.css';
import './styles.css.map';
import ControlsComponent from './Components/ControlsComponent';
import { useState, useEffect } from 'react';


function App() {

  // State to track the currently active section (default is 'home')
  // const [activeSection, setActiveSection] = useState('home');
  const [activeSection, setActiveSection] = useState('home');

  // Function to handle clicks and update the active section
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode); // Toggle between light and dark mode
  };
  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);
  // Function to update the active section (passed as a prop to ControlsComponent)
  // const updateActiveSection = (section) => {
  //   setActiveSection(section);
  // };

  return (
    <div >
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />


      {/* Control Buttons */}
      <div className="controls">
        <div
          className={`control ${activeSection === 'home' ? 'active-btn' : ''}`}
          onClick={() => handleSectionChange('home')}
        >
          <i className="fas fa-home"></i>
        </div>
        <div
          className={`control ${activeSection === 'about' ? 'active-btn' : ''}`}
          onClick={() => handleSectionChange('about')}
        >
          <i className="fas fa-user"></i>
        </div>
        <div
          className={`control ${activeSection === 'contact' ? 'active-btn' : ''}`}
          onClick={() => handleSectionChange('contact')}
        >
          <i className="fas fa-envelope-open"></i>
        </div>

      </div>

      {/* Conditionally render components based on the active section */}
      {activeSection === 'home' && <Header />}


      {activeSection === 'about' && <About />}
      {activeSection === 'contact' && <Contact />}
      <div className="theme-btn" onClick={toggleTheme}>
        <i className="fas fa-adjust"></i>
      </div>
    </div>




  );
}

export default App;
