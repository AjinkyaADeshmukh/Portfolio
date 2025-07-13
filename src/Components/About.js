import React from 'react';
import '../styles.css';
const About = () => {
  return (
    <main>
    <section className="container about active" id="about">
      <div className="main-title">
        <h2 style={{ marginBottom: '30px' }}>About <span>me</span></h2>
      </div>
      <div className="main-title">
        <h1 style={{ marginBottom: '30px', fontSize: '2rem' }}>Information About me</h1>
        <p style={{ marginBottom: '20px', padding: '0 130px', fontSize: '1.3rem' }}>
          Java Full-Stack Developer with <span>3+ years</span> of experience in building scalable, high-performance web applications. Proficient in <span>Java, Spring Boot, Hibernate, Angular, and React</span>, with strong expertise in <span>REST APIs, microservices</span>, and cloud technologies including <span>Azure, Docker, and Kubernetes</span>.
        </p>
        <p style={{ marginBottom: '20px', padding: '0 130px', fontSize: '1.3rem' }}>
Skilled in <span>PostgreSQL</span> and <span>Oracle</span> databases, and experienced in applying design patterns (Singleton, Factory, Builder, MVC, Dependency Injection) to deliver clean, maintainable code. Adept at performance optimization, secure coding practices, and working in <span>Agile</span> environments.
        </p>
        <p style={{ marginBottom: '40px', padding: '0 130px', fontSize: '1.3rem' }}>
Hands-on with <span>Git</span>, <span>CI/CD pipelines</span> (GitLab, Jenkins), and comprehensive testing using <span>JUnit</span> and <span>Mockito</span>.
        </p>
        <div className="btn-con" >
          <a href="Ajinkya_Deshmukh.pdf" className="main-btn" download>
            <span className="btn-text">Download CV</span>
            <span className="btn-icon">
              <i className="fas fa-download"></i>
            </span>
          </a>
        </div>
      </div>
      <h4 className="stat-title" style={{ marginBottom: '30px', fontSize: '2rem' }}>My Timeline</h4>
      <div className="timeline">
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">2024 - Present</p>
          <h5>Java Developer <span> - UBS AG</span></h5>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">2022 - 2024</p>
          <h5>Java Developer <span> - Credit Suisse AG</span></h5>
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
        {/* <div className="timeline-item">
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
        </div> */}
      </div>  
    </section>
    </main>
  );
};

export default About;
