import React from "react";
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

const Icons = () => {
  return (
    <div className="icon-container">
      <Slide top>
        <h2>Worked with...</h2>
        </Slide>
        <Zoom top>
      <div className="awesome-icon effect">
        <div className="">
          <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-html5"></i>
          </a>
          <p>HTML5</p>
        </div>
      </div>
      <div className="css3 effect">
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
          <img src={require("../images/css3.png").default} alt="css3" />
        </a>
        <p>CSS3</p>
      </div>
      <div className="awesome-icon effect">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-js"></i>
        </a>
        <p>Javascript</p>
      </div>
      <div className="awesome-icon effect">
        <a href="http://lesscss.org/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-less"></i>
        </a>
        <p>Less</p>
      </div>
      <div className="awesome-icon effect">
        <a href="https://classic.yarnpkg.com/en/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-yarn"></i>
        </a>
        <p>Yarn</p>
      </div>
      <div className="awesome-icon effect">
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-react"></i>
        </a>
        <p>React</p>
      </div>
      <div className="redux effect">
        <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
          <img src={require("../images/redux-logo.png").default} alt="redux" />
        </a>
        <br />
        <br />
        <p>Redux</p>
      </div>
      <div className="awesome-icon effect">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <p>Github</p>
      </div>
      <div className="awesome-icon effect">
        <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-node-js"></i>
        </a>
        <p>Node.js</p>
      </div>
      <div className="awesome-icon effect">
        <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-npm"></i>
        </a>
        <p>npm</p>
      </div>
      <div className="jest effect">
        <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">
          <img src={require("../images/jest-logo.png").default} alt="jest"/>
        </a>
        <p>Jest</p>
      </div>
      <div className="axios effect">
        <a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">
          <img src={require("../images/axios-logo.png").default} alt="axios"/>
        </a>
        <p>Axios</p>
      </div>
      <div className="sqlite effect">
        <a href="https://www.sqlite.org/index.html" target="_blank" rel="noopener noreferrer">
          <img src={require("../images/SQLite-logo.png").default} alt="sqlite"/>
        </a>
        <p>SQlite</p>
      </div>
      <div className="expressjs effect">
        <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
          <img src={require("../images/expressjs.png").default} alt="expressjs"/>
        </a>
        <p>Express.js</p>
      </div>
      <div className="postman effect">
        <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">
          <img src={require("../images/postman-logo.png").default} alt="postman"/>
        </a>
        <p>Postman</p>
      </div>
      <div className="python effect">
        <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
          <img src={require("../images/python-logo.png").default} alt="python"/>
        </a>
        <p>Python</p>
      </div>
      </Zoom>
    </div>
  );
};

export default Icons;
