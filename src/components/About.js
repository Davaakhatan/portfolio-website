import React from 'react';
import '../styles/About.css'; // Ensure this CSS file exists
import Github from './Github'; // Import the Github component


const About = () => {
  return (
    <section id="about">
      <div className="section-box">
        <h2>About Me</h2>
        <p>
          I am currently pursuing a Master’s degree in Software Engineering and have professional experience as a DevOps Engineer at Mongolia's largest commercial enterprise. My background also includes expertise in Information Security, where I specialize as a Microsoft Security Expert. Based in Ulaanbaatar, Mongolia, I enjoy playing basketball and am actively seeking opportunities in Software Engineering. I am particularly interested in roles focused on Java or JavaScript development, as well as positions in DevOps and DevSecOps Engineering.
        </p>
      </div>
      
      {/* Education Section */}
      <section>
        <div className="education">
          <h3>Education</h3>
          <div>
            <h4>Gannon University, Erie PA</h4>
            <p>Master of Software Engineering (Expected June 2025) | Current GPA: 3.9/4.0</p>
          </div>
          <div>
            <h4>Mongolian University of Science and Technology, UB, Mongolia</h4>
            <p>Bachelor of Computer Science in Systems Security Engineering (December 2016)</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="skills">
          <h2>Skills</h2>
          <div className="skills-container">
            <div className="skill">
              <h3>Programming Languages</h3>
              <p>Java, Python, C#, JavaScript, React, MongoDB, Firestore</p>
            </div>
            <div className="skill">
              <h3>DevOps Tools</h3>
              <p>Kubernetes, Docker, Git, Ansible, Jenkins</p>
            </div>
            <div className="skill">
              <h3>Cloud Platforms</h3>
              <p>Azure, AWS</p>
            </div>
            <div className="skill">
              <h3>Other Tools</h3>
              <p>Figma, Notion, Android Studio, VS Code, IntelliJ IDEA</p>
            </div>
          </div>
        </div>
      </section>


      {/* Certifications Section */}
      <div id="certifications">
        <h2>Certifications</h2>
        <div className="certification">
          <h3>AWS Certified Cloud Practitioner</h3>
          <p>Issued by Amazon Web Services Training and Certification | October 22, 2023</p>
          <a href="https://www.credly.com/badges/4d7a9e63-4c03-4e5a-8ce3-f93738440fb7/linked_in_profile" target="_blank" rel="noopener noreferrer">View Certificate</a>
        </div>
        <div className="certification">
          <h3>Oracle Certified Foundations Associate, Database</h3>
          <p>Issued by Oracle | 14 November 2023</p>
          <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=93B72C3D7A59D0A3772D114CD74924893466A20A83386B39A0C7E2775D162B15" target="_blank" rel="noopener noreferrer">View Certificate</a>
        </div>
        <div className="certification">
          <h3>Microsoft 365 Certified: Fundamentals</h3>
          <p>Issued by Microsoft | May 29, 2020</p>
          <a href="https://www.credly.com/badges/49871f2c-949e-4fc0-9437-6b5a07e0a4f1/linked_in_profile" target="_blank" rel="noopener noreferrer">View Certificate</a>
        </div>
      </div>

      {/* Awards Section */}
      <div className="awards">
        <h3>Awards</h3>
        <p>MNSEC 2017 - Haruul Zangi 2017 - National Cyber Security Competition: MNSEC 2017 3rd place.</p>
      </div>

      <Github />
    </section>
  );
};

export default About;
