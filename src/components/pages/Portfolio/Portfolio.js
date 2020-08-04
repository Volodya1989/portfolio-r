import React from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../../ProjectCard/ProjectCard";
import "./portfolio.style.css";

function Portfolio() {
  return (
    <div>
      <main>
        <section>
          <div className="container">
            <div id="portfolio-info">
              <h1 className="content-text" id="portfolio">
                Portfolio
              </h1>
              <hr />
              <div className="row">
                {projects.map((project) => (
                  <ProjectCard
                    deployedLink={project.deployedLink}
                    image={project.image}
                    key={project.key}
                    name={project.name}
                    repositoryLink={project.repositoryLink}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Portfolio;
