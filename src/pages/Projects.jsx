import React, { useEffect, useState } from 'react';
import '../styles/project.css';
import { FaGithub } from 'react-icons/fa';

// Fetching the API base URL from environment variables
const API = import.meta.env.VITE_API_BASE_URL;

const Project = () => {
  const [projects, setProjects] = useState([]); // State to hold the list of projects
  
  // useEffect hook to fetch the project data on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        
        // Making the API call to fetch the list of projects
        const response = await fetch(`${API}/projects/api/list`);
        const data = await response.json(); // Parsing the JSON data
          
        const updatedProjects = data.map(project => {
          let url = '';
          if (project.name === "Fun Popcorn Poppers") {
            url = "https://github.com/dignapatel0/Useless_Website_Popcorn_Poppers";
          } else if (project.name === "G1 Quiz App") {
            url = "https://github.com/dignapatel0/G1-quiz-app";
          }
          return { ...project, URL: url };
        });

        setProjects(updatedProjects); // Updating state with the fetched data
      } catch (error) {
        console.error('Failed to fetch projects:', error); // Handling errors during fetch
      }
    };

    fetchProjects(); // Calling the function to fetch the experience data
  }, []);

  return (
    // Project section with the ID 'projects'
    <section id="projects" className="projects-section">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h2 className="project-name">{project.name}</h2>
              {project.URL && (
                <a
                  href={project.URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <FaGithub size={30} />
                </a>
              )}
            </div>
            <p className="project-summary">{project.summary}</p>

            <div className="project-tech">
              {project.technology.split(',').map((tech, i) => (
                <span key={i} className="tech-pill">{tech.trim()}</span>
              ))}
            </div>

            <div className="project-details">
              <span className={`project-status ${project.status === 'Completed' ? 'completed' : 'in-progress'}`}>
                {project.status}
              </span>
              <span className="project-timespan">{project.timespan}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
