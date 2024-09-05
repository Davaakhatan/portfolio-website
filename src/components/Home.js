import React, { useState } from 'react';
import '../styles/Home.css';
import profileImage from '../Assets/profile.jpg';
import { Button, Container, Row } from 'react-bootstrap';
import { Worker, Viewer } from '@react-pdf-viewer/core'; // Worker to handle pdf rendering
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import resumePdf from '../Assets/Resume.pdf'; // Update the path to your resume PDF
import githubIcon from '../Assets/github.svg';
import linkedinIcon from '../Assets/linkedin.svg';
import twitterIcon from '../Assets/twitter.svg';
import mailIcon from '../Assets/mail.svg';


const Home = () => {
  const [isResumeVisible, setIsResumeVisible] = useState(false);

  const handleToggleResume = () => {
    setIsResumeVisible(!isResumeVisible);
  };

  return (
    <div >
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <img src={profileImage} alt="Davaakhatan Zorigtbaatar" className="profile-img" />
          <h1>Davaakhatan Zorigtbaatar</h1>
          <p>Software Engineer | DevOps Engineer | Security Enthusiast</p>
          <Button
            className="resume-toggle-btn"
            onClick={handleToggleResume}
          >
            {isResumeVisible ? 'Hide Resume' : 'Show Resume'}
          </Button>
        </div>
      </section>

      {/* Resume Section */}
      {isResumeVisible && (
        <Container fluid className="resume-section">
          <Row className="resume">
            <Worker workerUrl={`${process.env.PUBLIC_URL}/pdf.worker.min.js`}>
              <div className="d-flex justify-content-center">
                <Viewer fileUrl={resumePdf} />
              </div>
            </Worker>
          </Row>
          <Row style={{ justifyContent: 'center', position: 'relative' }}>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-download-resume"
            >
              <i className="fas fa-download"></i>&nbsp;Download Resume
            </a>
          </Row>
        </Container>
      )}
      
      {/* Find Me Section */}
      <section id="find-me" className="find-me-section">
      <p className="font-thin text-2xl">Find me here.</p>
      <div className="flex">
        <div className="bg-white p-1 mr-2 rounded">
          <a href="https://github.com/Davaakhatan" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
        <div className="bg-white p-1 mr-2 rounded">
          <a href="https://www.linkedin.com/in/davaakhatan-zorigtbaatar-649b94104/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
        <div className="bg-white p-1 mr-2 rounded">
          <a href="https://twitter.com/Kenji68123446" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </div>
        <div className="bg-white p-1 rounded">
          <a href="mailto:zr.davaa@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={mailIcon} alt="Email" />
          </a>
        </div>
      </div>
      </section>


      {/* About Me Section */}
      {/* <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          I'm a Software Engineer with a passion for DevOps and Information Security.
          With over 7 years of experience in the industry, I have a proven track record
          of delivering high-quality solutions that ensure system reliability, security,
          and efficiency. My expertise spans across software development, DevOps practices,
          and cybersecurity projects.
        </p>
      </section> */}
      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Davaakhatan Zorigtbaatar. All rights reserved.</p>
      </footer>
    </div>
    
  );
};

export default Home;
