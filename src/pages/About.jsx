import React from 'react';
import '../styles/about.css';
import myPhoto from '../assets/Digna_Photo.png'; // Importing the profile photo
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing icons for social links

const About = () => {
  return (
    // Section for the About section with ID 'about'
    <section id="about" className="about">
      <img src={myPhoto} alt="My Profile" className="about-photo" />
      
      {/* About content section */}
      <div className="about-content">
        <h1>Hello, I'm Digna Patel</h1>
        <p>I’m a passionate web developer with experience in building dynamic and responsive web applications using modern technologies.</p>
        
        {/* Social links section */}
        <div className="about-links">
          <a href="https://github.com/dignapatel0" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} /> 
          </a>
          
          <a href="https://www.linkedin.com/in/digna-patel-20b017168/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} /> 
          </a>
          
          <a href="mailto:dignapatel596@gmail.com">
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
