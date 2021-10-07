import React from "react";
import './portfolio.css'

function Projects({ projects }) {
  const { name, link, description, repoLink, img } = projects;
  return (
    <div style={{display:"inline-block", padding: '5px'}}>
      <div className="projects" key={name}>
      <a href={link}>
        <img
          src={img}
          className="projectImg"
          alt={name}
        />
        </a>
        <div className="projectText">
          <h3>
            Project: {name}
          </h3>
          <p className="description">
            {description}
          </p>
          <p>
            <a href={repoLink}>Repo: {name}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;

