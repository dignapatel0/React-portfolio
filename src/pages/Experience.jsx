import React, { useEffect, useState } from 'react';
import '../styles/experience.css';

// Fetching the API base URL from environment variables
const API = import.meta.env.VITE_API_BASE_URL; 

const Experience = () => {
  const [experiences, setExperiences] = useState([]); // State to hold the fetched experience data

  // useEffect hook to fetch the experience data on component mount
  useEffect(() => {
    const fetchExperience = async () => {
      try {
        // Making the API call to fetch the list of experiences
        const response = await fetch(`${API}/experiences/api/list`);
        const data = await response.json(); // Parsing the JSON data
        setExperiences(data); // Updating state with the fetched data
      } catch (error) {
        console.error('Failed to fetch experience:', error); // Handling any errors during fetch
      }
    };

    fetchExperience(); // Calling the function to fetch the experience data
  }, []); 

  return (
    // Experience section with the ID 'experience'
    <section id="experience" className="experience-section">
      <h1 className="experience-title">My Experience</h1>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div className="experience-left">
                <h2 className="experience-role">{exp.title}</h2>
                <p className="experience-company">{exp.company}</p>
              </div>
              <div className="experience-right">
                <p className="experience-location">{exp.location}</p>
                <p className="experience-duration">
                  {exp.startYear} - {exp.endYear}
                </p>
              </div>
            </div>
            <ul className="experience-description">
              {Array.isArray(exp.description) 
                ? exp.description.map((item, i) => (
                    <li key={i}>{item}</li> 
                  ))
                : exp.description
                    .split('\n') 
                    .map((line, i) => line.trim() && <li key={i}>{line}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
