import React from "react";

const Icons = () => {
  return (
    <div className="icon-container">
        <h2>Worked with...</h2>
      <div className="awesome-icon">
        <div className="">
          <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
            <i className="fab fa-html5"></i>
          </a>
          <p>HTML5</p>
        </div>
      </div>
      <div className="css3">
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
          <img src={require("../images/css3.png")} alt="css3" />
        </a>
        <p>CSS3</p>
      </div>
      <div className="awesome-icon">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          <i className="fab fa-js"></i>
        </a>
        <p>Javascript</p>
      </div>
      <div className="awesome-icon">
        <a href="http://lesscss.org/">
          <i className="fab fa-less"></i>
        </a>
        <p>Less</p>
      </div>
      <div className="awesome-icon">
        <a href="https://classic.yarnpkg.com/en/">
          <i className="fab fa-yarn"></i>
        </a>
        <p>Yarn</p>
      </div>
      <div className="awesome-icon">
        <a href="https://reactjs.org/">
          <i className="fab fa-react"></i>
        </a>
        <p>React</p>
      </div>
      <div className="redux">
        <a href="https://redux.js.org/">
          <img src={require("../images/redux-logo.png")} alt="redux" />
        </a>
        <br />
        <br />
        <p>Redux</p>
      </div>
      <div className="awesome-icon">
        <a href="https://github.com/">
          <i className="fab fa-github"></i>
        </a>
        <p>Github</p>
      </div>
      <div className="awesome-icon">
        <a href="https://nodejs.org/en/">
          <i className="fab fa-node-js"></i>
        </a>
        <p>Node.js</p>
      </div>
      <div className="awesome-icon">
        <a href="https://www.npmjs.com/">
          <i className="fab fa-npm"></i>
        </a>
        <p>npm</p>
      </div>
      <div className="jest">
        <a href="https://jestjs.io/">
          <img src={require("../images/jest-logo.png")} alt="jest"/>
        </a>
        <p>Jest</p>
      </div>
      <div className="axios">
        <a href="https://github.com/axios/axios">
          <img src={require("../images/axios-logo.png")} alt="axios"/>
        </a>
        <p>Axios</p>
      </div>
      <div className="sqlite">
        <a href="https://www.sqlite.org/index.html">
          <img src={require("../images/SQLite-logo.png")} alt="sqlite"/>
        </a>
        <p>SQlite</p>
      </div>
      <div className="expressjs">
        <a href="https://expressjs.com/">
          <img src={require("../images/expressjs.png")} alt="expressjs"/>
        </a>
        <p>Express.js</p>
      </div>
      <div className="postman">
        <a href="https://www.postman.com/">
          <img src={require("../images/postman-logo.png")} alt="postman"/>
        </a>
        <p>Postman</p>
      </div>
      <div className="python">
        <a href="https://www.python.org/">
          <img src={require("../images/python-logo.png")} alt="python"/>
        </a>
        <p>Python</p>
      </div>
    </div>
  );
};

export default Icons;
