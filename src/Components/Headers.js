import React from 'react';
import '../styles.css';
const Header = () => {
  return (
    <header className="container header active" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img src={`${process.env.PUBLIC_URL}/img/Selfpng.png`} alt="Self" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Hi, I'm <span>Ajinkya Deshmukh</span> A Software Developer.
          </h1>
          <p>I'm a Software Developer, I love to create beautiful and functional websites.</p>
          <div className="btn-con">
            <a href="Ajinkya_Deshmukh.pdf" className="main-btn" download>
              <span className="btn-text">Download CV</span>
              <span className="btn-icon">
                <i className="fas fa-download"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
