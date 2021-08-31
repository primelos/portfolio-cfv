import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Wobble from "react-reveal/Wobble";
import Spin from "react-reveal/Spin";
import TransitionGroup from "react-transition-group/TransitionGroup";
import Fade from "react-reveal/Fade";

export const MoreProjects = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((x) => (x = !open));
  };
  return (
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
                    <LazyLoadImage
                      src={require("../img/pintrest.png").default}
                      effect="blur"
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

                  <div className="image-container">
                    <LazyLoadImage
                      src={require("../img/gdrive.png").default}
                      effect="blur"
                    />
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
                    <LazyLoadImage
                      src={require("../img/crown.png").default}
                      effect="blur"
                    />

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
                    <LazyLoadImage
                      src={require("../img/budget.png").default}
                      effect="blur"
                    />
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
                    <LazyLoadImage
                      src={require("../img/recipe.png").default}
                      effect="blur"
                    />
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
                    <LazyLoadImage
                      src={require("../img/SE.png").default}
                      effect="blur"
                    />
                    <div className="click-icon">
                      <i className="fab fa-expeditedssl"></i>

                      <i className="fab fa-expeditedssl"></i>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade>
                <div className="row-one">
                  <div className="image-container">
                    <LazyLoadImage
                      src={require("../img/disney.png").default}
                      effect="blur"
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
                    <LazyLoadImage
                      src={require("../img/netflix.png").default}
                      effect="blur"
                    />
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
                    <LazyLoadImage
                      src={require("../img/djevent.png").default}
                      effect="blur"
                    />
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
                    <LazyLoadImage
                      src={require("../img/monsters.png").default}
                      effect="blur"
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
                    <LazyLoadImage
                      src={require("../img/meme.png").default}
                      effect="blur"
                    />
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
                    <LazyLoadImage
                      src={require("../img/memory.png").default}
                      effect="blur"
                    />
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
  );
};
