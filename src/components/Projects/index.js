import React from "react";

function Projects({ projects }) {
  const { name, link, description, repoLink } = projects;
  return (
    <div>
      <div className="projects" key={name}>
        <img
          src={require(`../../assets/img/${name}.jpg`)}
          className="projectImg"
          alt={name}
        />
        <div className="projectText">
          <h3>
            <a href={link}>Project: {name}</a>
          </h3>
          <p>
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
