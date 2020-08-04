import React from "react";
import memoryMaker from "../components/images/memoryMaker.png";
import stayingInTonight from "../components/images/stayingInTonight.png";
import weatherDashboard from "../components/images/weatherDashboard.png";
import dailyScheduler from "../components/images/dailyScheduler.gif";
import codingQuiz from "../components/images/codingQuiz.gif";
import passwordGenerator from "../components/images/passwordGenerator.png";


export default function ProjectCard(props) {
  const images = {
    memoryMaker,
    stayingInTonight,
    weatherDashboard,
    dailyScheduler,
    codingQuiz,
    passwordGenerator
  };

  const {
    image,
    name,
    deployedLink,
    repositoryLink,
  } = props;

  return (
    <article className="project-card">
      <img alt="preview of the project" src={images[image]} />
      <div>
        <a href={deployedLink}>
          <h3>{name}</h3>
        </a>
        <a href={repositoryLink}>
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
      </div>
    </article>
  );
}
