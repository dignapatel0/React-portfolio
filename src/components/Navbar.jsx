import React, { useState } from 'react';
import { Link, scroller } from 'react-scroll';
import '../styles/navbar.css';

const Navbar = () => {
  // State to track the currently active link
  const [activeLink, setActiveLink] = useState('');

  // Function to set the active link based on the clicked section
  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    // Navbar container
    <nav className="navbar">
      <div className="navbar-left">
        {/* Logo section */}
        <h1 className="navbar-logo">Digna Patel</h1>
      </div>
      <div className="navbar-right">
        {/* Navbar links */}
        <ul>
          {/* About link */}
          <li>
            <Link
              to="about" 
              spy={true} 
              smooth={true}
              offset={-70} 
              duration={50} 
              className={activeLink === 'about' ? 'active' : ''} // Adds active class to the current section
              onSetActive={() => handleSetActive('about')} 
              onSpyChange={setActiveLink} 
            >
              About
            </Link>
          </li>
          {/* Experience link */}
          <li>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={50}
              className={activeLink === 'experience' ? 'active' : ''}
              onSetActive={() => handleSetActive('experience')}
              onSpyChange={setActiveLink}
            >
              Experience
            </Link>
          </li>
          {/* Projects link */}
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={50}
              className={activeLink === 'projects' ? 'active' : ''}
              onSetActive={() => handleSetActive('projects')}
              onSpyChange={setActiveLink}
            >
              Projects
            </Link>
          </li>
          {/* Skills link */}
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={50}
              className={activeLink === 'skills' ? 'active' : ''}
              onSetActive={() => handleSetActive('skills')}
              onSpyChange={setActiveLink} 
            >
              Skills
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
