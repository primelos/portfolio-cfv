import React, { useState } from "react";
import Footer from "./Footer";
import Projects from "./Projects";
import Icons from "./icons";
import Navs from "./Navs";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Wobble from "react-reveal/Wobble";
import Spin from "react-reveal/Spin";
import TransitionGroup from "react-transition-group/TransitionGroup";

const Main = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((x) => (x = !open));
  };

  function backUp() {
    window.addEventListener("scroll", () => {
      let scrollHeight = window.pageYOffset;
      let nav = document.querySelector(".nav-body");
      let navHeight = nav.getBoundingClientRect().height;

      let topLink = document.querySelector(".hide");
      if (props.history.location.pathname === "/") {
        if (scrollHeight > navHeight) {
          topLink.classList.add("show-arrow");
        } else {
          topLink.classList.remove("show-arrow");
        }
      }
    });
  }
  backUp();

  return (
    <div id="home">
      <Fade delay={500}>
        <Navs history={props.history} />
        <div className="main-intro">
          <p className="intro">
            Hi!
            <br /> I'm Carlos Venegas, a software engineer currently studying in
            <br />
            San Francisco Ca. <br />
            Lets work together!
            <br />
          </p>

          <div>
            <img
              src={require("..//images/gitPic.jpg").default}
              alt="carlos-venegas"
            />
          </div>
        </div>
      </Fade>
      <div className="main-body">
        <div className="main-proj-div">
          <Projects />
        </div>
      </div>

      <div style={{ marginBottom: "100px" }}>
        <div className="work-container">
          <div className="other-title" id="other-projects">
            <Wobble>Other Projects</Wobble>
            {!open ? (
              <Spin>
                <i onClick={handleClick} className="fas fa-level-down-alt"></i>
              </Spin>
            ) : (
              <i onClick={handleClick} className="fas fa-level-up-alt"></i>
            )}
          </div>
          {open ? (
            <TransitionGroup>
              <div>
                <Fade>
                  <div className="row-one">
                    <div className="image-container">
                      <img src={require("../img/lotto.png").default} alt="" />
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
                    <div className="image-container">
                      <img src={require("../img/gdrive.png").default} alt="" />
                      <div className="click-icon">
                        <a
                          href="https://google-drive-clone.vercel.app/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fas fa-laptop"></i>
                        </a>
                        <a
                          href="https://github.com/primelos/google-drive-clone"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fas fa-laptop-code"></i>
                        </a>
                      </div>
                    </div>
                    <div className="image-container">
                      <img src={require("../img/crown.png").default} alt="" />
                      <div className="click-icon">
                        <a
                          href="https://carlosfvenegas.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fab fa-expeditedssl"></i>
                        </a>
                        <a
                          href="https://github.com/primelos/crwn-clothing"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fas fa-laptop-code"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </Fade>
                <Fade>
                  <div className="row-one">
                    <div className="image-container">
                      <img src={require("../img/budget.png").default} alt="" />
                      <div className="click-icon">
                        <a
                          href="https://my-budget-app.vercel.app/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fas fa-laptop"></i>
                        </a>
                        <a
                          href="https://github.com/primelos/my-budget-app"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fas fa-laptop-code"></i>
                        </a>
                      </div>
                    </div>
                    <div className="image-container">
                      <img src={require("../img/recipe.png").default} alt="" />
                      <div className="click-icon">
                        <a
                          href="https://recipes-app-delta.vercel.app/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fas fa-laptop"></i>
                        </a>
                        <a
                          href="https://github.com/primelos/recipes-app"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fas fa-laptop-code"></i>
                        </a>
                      </div>
                    </div>

                    <div className="image-container">
                      <img
                        src={require("../img/pintrest.png").default}
                        alt=""
                      />
                      <div className="click-icon">
                        <a
                          href="https://pintrest-clone.vercel.app/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fas fa-laptop"></i>
                        </a>
                        <a
                          href="https://github.com/primelos/pintrest-clone"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fas fa-laptop-code"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </Fade>
                <Fade>
                  <div className="row-one">
                    <div className="image-container">
                      <img
                        src={require("../img/disney.png").default}
                        alt="disney project"
                      />
                      <div className="click-icon">
                        <a
                          href="https://disneyplus-cf094.web.app/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fas fa-laptop"></i>
                        </a>
                        <a
                          href="https://github.com/primelos/disney-plus-clone"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fas fa-laptop-code"></i>
                        </a>
                      </div>
                    </div>
                    <div className="image-container">
                      <img src={require("../img/netflix.png").default} alt="" />
                      <div className="click-icon">
                        <a
                          href="https://netflixclone-26bcf.web.app/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fas fa-laptop"></i>
                        </a>
                        <a
                          href="https://github.com/primelos/netflix-clone"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fas fa-laptop-code"></i>
                        </a>
                      </div>
                    </div>
                    <div className="image-container">
                      <img src={require("../img/djevent.png").default} alt="" />
                      <div className="click-icon">
                        <a
                          href="https://djevents2021.vercel.app/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fas fa-laptop"></i>
                        </a>
                        <a
                          href="https://github.com/primelos/dj-events-2021"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fas fa-laptop-code"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </Fade>
                <Fade>
                  <div className="row-one">
                    <div className="image-container">
                      <img
                        src={require("../img/monsters.png").default}
                        alt=""
                      />
                      <div className="click-icon">
                        <a
                          href="https://primelos.github.io/rolodex/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fas fa-laptop"></i>
                        </a>
                        <a
                          href="https://github.com/primelos/rolodex"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fas fa-laptop-code"></i>
                        </a>
                      </div>
                    </div>
                    <div className="image-container">
                      <img src={require("../img/meme.png").default} alt="" />
                      <div className="click-icon">
                        <a
                          href="https://meme-generator-ashen.vercel.app/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fas fa-laptop"></i>
                        </a>
                        <a
                          href="https://github.com/primelos/memeGenerator"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fas fa-laptop-code"></i>
                        </a>
                      </div>
                    </div>
                    <div className="image-container">
                      <img src={require("../img/memory.png").default} alt="" />
                      <div className="click-icon">
                        <a
                          href="https://memory-g.vercel.app/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fas fa-laptop"></i>
                        </a>
                        <a
                          href="https://github.com/primelos/memoryG"
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
            </TransitionGroup>
          ) : null}
        </div>
      </div>

      <Icons />
      <Bounce bottom>
        <Footer />
      </Bounce>
      <a href="#home" className="hide">
        <i className="fas fa-arrow-up"></i>
      </a>
    </div>
  );
};

export default Main;
