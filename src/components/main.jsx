import React, { useState } from "react";
import Footer from "./Footer";
import Projects from "./Projects";
import Icons from "./icons";
import Navs from './Navs'

const Main = (props) => {
  
  
  return (
    <div>
      <Navs props={props}/>
      <div className="main-intro">
        <p className="intro">
          Hi!<br/> I'm Carlos Venegas, a Front-end Developer currently studying in{" "}
          <br />
          San Francisco Ca. <br />
          Lets work together!
          <br />
        </p>

        <div>
          <img src={require("../images/gitPic.jpg")} alt="me" />
        </div>
      </div>

      <div className="main-body">
        <div className='main-proj-div'>
          <Projects />
        </div>
      </div>
      <Icons />
      <Footer />
    </div>
  );
};

export default Main;
