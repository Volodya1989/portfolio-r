import React from "react";
import memoryMaker from "../images/memoryMaker.png";
import stayingInTonight from "../images/stayingInTonight.png";
import weatherDashboard from "../images/weatherDashboard.png";
import dailyScheduler from "../images/dailyScheduler.gif";
import codingQuiz from "../images/codingQuiz.gif";
import passwordGenerator from "../images/passwordGenerator.png";
import "./projectCard.style.css";
export default function ProjectCard(props) {
  const images = {
    memoryMaker,
    stayingInTonight,
    weatherDashboard,
    dailyScheduler,
    codingQuiz,
    passwordGenerator,
  };

  const { image, name, deployedLink, repositoryLink } = props;

  return (
    <div className="col-sm-12 col-md-6 mb-4">
      <div className="banner">
        <img
          alt="preview of the project"
          className="card-img-top"
          src={images[image]}
        />
        <div className="heading">
          <a href={deployedLink}>
            <h3>{name}</h3>
          </a>
          <a href={repositoryLink}>
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

