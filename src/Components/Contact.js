import React from 'react';
import '../styles.css';
const Contact = () => {
  return (
    <main>
    <section className="container contact active" id="contact">
      <div className="contact-container">
        <div className="main-title">
          <h2>Contact <span>Me</span><span className="bg-text">Contact</span></h2>
        </div>
        <div className="contact-content-con">
          <div className="left-contact">
            <h4>Contact me here</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Location : Pune, India</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                  <span>Email : deshmukhajinkya227@gmail.com</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-user-graduate"></i>
                  <span>Mobile Number : 8850541397</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-globe-africa"></i>
                  <span>Languages : English, Hindi, Marathi</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right-contact">
            <form className="contact-form">
              <div className="input-control i-c-2">
                <input type="text" required placeholder="YOUR NAME" />
                <input type="email" required placeholder="YOUR EMAIL" />
              </div>
              <div className="input-control">
                <input type="text" required placeholder="ENTER SUBJECT" />
              </div>
              <div className="input-control">
                <textarea cols="15" rows="8" placeholder="Message Here..."></textarea>
              </div>
              <div className="submit-btn">
                <a href="/path/to/your/cv.pdf" className="main-btn" download>
                  <span className="btn-text">Download CV</span>
                  <span className="btn-icon">
                    <i className="fas fa-download"></i>
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
};

export default Contact;
