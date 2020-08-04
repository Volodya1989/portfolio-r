import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../ProjectCard";


function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <main>
      <section>
        <div class="container">
          <div id="portfolio-info">
            <h1 class="content-text" id="portfolio">Portfolio</h1>
            <hr />
            {projects.map(project => (

            <ProjectCard
            deployedLink={project.deployedLink}
            image={project.image}
            key={project.key}
            name={project.name}
            repositoryLink={project.repositoryLink}
          />))}
          </div>
        </div>
      </section>
    </main>
    </div>
  );
}

export default Portfolio;
