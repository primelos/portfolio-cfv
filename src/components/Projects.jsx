import React from "react";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <div className="project-main">
      <Fade bottom>
        <div className="projects" id="projects-link">
          <div className="project-card">
            <h2>Game of Life</h2>
            <a
              href="https://cs-build-week.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="img3"
                src={require("../images/gamelife.png").default}
                alt="game of life"
              />
            </a>
            <div className="click-icon">
              <a
                href="https://cs-build-week.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fas fa-laptop"></i>
              </a>
              <a
                href="https://github.com/primelos/CS-Build-Week"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fas fa-laptop-code"></i>
              </a>
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
                src={require("../images/ricknmorty.png").default}
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
            <a
              href="https://snake-q5f7tkf8k.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="img3"
                src={require("../images/snake.png").default}
                alt="snake game"
              />
            </a>
            <div className="click-icon">
              <a
                href="https://snake-q5f7tkf8k.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fas fa-laptop"></i>
              </a>
              <a
                href="https://github.com/primelos/Snake"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fas fa-laptop-code"></i>
              </a>
            </div>
          </div>
          <div className="project-card">
            <h2>Car Sales</h2>
            <a
              href="https://carbuyercom.netlify.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="img1"
                src={require("../images/car.png").default}
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
            <h2>Lottery Numbers</h2>

            <img
              className="img2"
              src={require("../img/lotto.png").default}
              alt="lotto random"
            />

            <div className="click-icon">
              <a
                href="https://my-lotto.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fas fa-laptop"></i>
              </a>
              <a
                href="https://github.com/primelos/my-lotto"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fas fa-laptop-code"></i>
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
