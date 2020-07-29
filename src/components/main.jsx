import React, { useState } from "react";
import Footer from "./Footer";
import Projects from "./Projects";
import Icons from "./icons";
import { ModalProvider, Modal } from "./modal";
import Navs from './Navs'

const Main = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(props)
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

      {/* <ModalProvider>
        <p className="time-link">
          Time in <span
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => setIsModalOpen(true)}
          >
             tech
          </span>
          ...
        </p>
        {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}></Modal>}
      </ModalProvider> */}

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
