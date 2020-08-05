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
    <div className="col-sm-12 col-md-6 mb-4 projectCard">
      <div class="card">
        <h2 class="general-title"> {name}</h2>
        <img
          id="movie-poster"
          class="card-img"
          src={images[image]}
          alt="poster1"
        />
      </div>
      <div class="card-body rounded text-white">
        <h2 class="card-title" id="title-movie">
          <a href={deployedLink} className="btn  btn-primary" target="_blank">
            live demo
          </a>
        </h2>
        <h5 id="overview-movie">project overviw</h5>
        <h3 class="card-text" id="rating-movie">
          <a href={repositoryLink}>
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
        </h3>
        <h3 id="release-movie" class="card-text">
          description
        </h3>
      </div>
    </div>

    // <div className="col-sm-12 col-md-6 mb-4">
    //   <div className="banner">
    //     <img
    //       alt="preview of the project"
    //       className="card-img-top"
    //       src={images[image]}
    //     />
    //     <div className="heading">
    //       <a href={deployedLink}>
    //         <h3>{name}</h3>
    //       </a>
    //       <a href={repositoryLink}>
    //         <i className="fa fa-github fa-2x" aria-hidden="true"></i>
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
}
