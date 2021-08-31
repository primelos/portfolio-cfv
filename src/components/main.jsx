import React, { useState } from "react";
import Footer from "./Footer";
import Projects from "./Projects";
import Icons from "./icons";
import Navs from "./Navs";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { MoreProjects } from "./MoreProjects";
import { useHistory } from "react-router-dom";

const Main = (props) => {
  const hist = useHistory();

  function backUp() {
    window.addEventListener("scroll", () => {
      let scrollHeight = window.pageYOffset;
      let nav = document.querySelector(".nav-body");
      let navHeight = nav.getBoundingClientRect().height;

      let topLink = document.querySelector(".hide");

      if (hist.location.pathname === "/") {
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
              src={require("../images/gitPic.jpg").default}
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
      <MoreProjects />
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
