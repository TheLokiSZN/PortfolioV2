import React from "react";

function Projects({ projects }) {
  const { name, link, description, repo } = projects;
  return (
    <div>
      <div className="projects" key={name}>
        <img
          src={require(`../../assets/img/${name}.jpg`)}
          className="projectImg"
          alt={name}
        ></img>
        <div className="projectText">
          <h3>
            <a href={link}>{name}</a>
          </h3>
          <p>
            {description} {repo}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
