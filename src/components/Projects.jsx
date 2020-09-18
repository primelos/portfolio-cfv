import React from "react";

const Projects = () => {
  return (
    <div className="project-main">
      <div className="projects" id="projects-link">
        <div className="project-card">
          <h2>Car Sales</h2>
          <a
            href="https://carbuyercom.netlify.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="img1"
              src={require("../images/car.png")}
              alt="mustang"
            />
          </a>
          <div className="click-icon">
            <a
              href="https://carbuyercom.netlify.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fas fa-laptop"></i>
            </a>
            <a
              href="https://github.com/primelos/Car-Sales/tree/carlos-venegas"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fas fa-laptop-code"></i>
            </a>
          </div>
        </div>

        <div className="project-card">
          <h2>Sanctions Explorer</h2>

          <img
            className="img2"
            src={require("../images/SE.png")}
            alt="sanctions"
          />

          <div className="click-icon">
            <i className="fab fa-expeditedssl"></i>

            <i className="fab fa-expeditedssl"></i>
          </div>
        </div>

        <div className="project-card">
          <h2>Rick & Morty</h2>
          <a
            href="https://sprint-challenge2-single-page-apps2.cvenegas9.vercel.app/
"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="img3"
              src={require("../images/ricknmorty.png")}
              alt="ricky and morty"
            />
          </a>
          <div className="click-icon">
            <a
              href="https://sprint-challenge2-single-page-apps2.cvenegas9.vercel.app/
"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fas fa-laptop"></i>
            </a>
            <a
              href="https://github.com/primelos/SprintChallenge2-Single-Page-Apps/tree/carlos-venegas"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fas fa-laptop-code"></i>
            </a>
          </div>
        </div>

        <div className="project-card">
          <h2>Snake Game</h2>
          <a href="https://snake-q5f7tkf8k.vercel.app/" rel="noopener noreferrer"
            target="_blank">
              <img className='img3' src={require("../images/snake.png")} alt='snake game' />
            </a>
          <div className="click-icon">
            <a href="https://snake-q5f7tkf8k.vercel.app/" rel="noopener noreferrer"
              target="_blank" >
              <i className="fas fa-laptop"></i>
            </a>
            <a href="https://github.com/primelos/Snake" rel="noopener noreferrer"
              target="_blank" >
              <i className="fas fa-laptop-code"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
