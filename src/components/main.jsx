import React from "react";
import Footer from "./Footer";
import Projects from "./Projects";
import Icons from "./icons";
import Navs from './Navs'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


const Main = (props) => {
  console.log(props);
  function backUp(){
    window.addEventListener('scroll', () => {
      let scrollHeight = window.pageYOffset
      let nav = document.querySelector('.nav-body')
      let navHeight = nav.getBoundingClientRect().height
      let topLink = document.querySelector('.hide')
      if(props.history.location.pathname === '/'){
        if(scrollHeight > navHeight){
            topLink.classList.add('show-arrow')
        } else {
          topLink.classList.remove('show-arrow')
        }
      }
      
    })
  }
  backUp()

  return (
    <div id='home' >
      <Fade delay={500}>
      <Navs history={props.history}/>
      <div className="main-intro">
        <p className="intro">
          Hi!<br/> I'm Carlos Venegas, a soft engineer currently studying in
          <br />
          San Francisco Ca. <br />
          Lets work together!
          <br />
        </p>

        <div>
          <img src={require("..//images/gitPic.jpg").default} alt="carlos-venegas" />
        </div>
      </div>
      </Fade>
      <div className="main-body">
        <div className='main-proj-div'>
          <Projects />
        </div>
      </div>
      <Icons />
      <Bounce bottom>
      <Footer />
      </Bounce>
      <a href='#home' className='hide'>
        <i className="fas fa-arrow-up"></i>
      </a>
      
    </div>
  );
};

export default Main;
