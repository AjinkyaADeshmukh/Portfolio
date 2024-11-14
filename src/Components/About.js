import React from 'react';
import '../styles.css';
const About = () => {
  return (
    <main>
    <section className="container about active" id="about">
      <div className="main-title">
        <h2>About <span>me</span></h2>
      </div>
      <div className="main-title">
        <h1>Information About me</h1>
        <p style={{ marginBottom: '30px' }}>
          With a solid foundation in software engineering and one year of professional experience, 
          I am equipped with the skills and knowledge to drive successful software development projects.
          I am dedicated to delivering high-quality solutions that align with business objectives and exceed client expectations.
        </p>
        <div className="btn-con">
          <a href="/path/to/your/cv.pdf" className="main-btn" download>
            <span className="btn-text">Download CV</span>
            <span className="btn-icon">
              <i className="fas fa-download"></i>
            </span>
          </a>
        </div>
      </div>
      <h4 className="stat-title">My Timeline</h4>
      <div className="timeline">
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">2022 - Present</p>
          <h5>Full Stack Developer <span> - Credit Suisse AG</span></h5>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">2021 - 2022</p>
          <h5>PG-DAC <span> - CDAC</span></h5>
          <p>Center of Advance Computing.</p>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">2016 - 2021</p>
          <h5>B.E <span> - Mechanical Engineering</span></h5>
          <p>University of Mumbai.</p>
        </div>
      </div>
    </section>
    </main>
  );
};

export default About;
