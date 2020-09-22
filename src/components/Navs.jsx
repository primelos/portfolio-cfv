import React from "react";
import { Link } from "react-router-dom";

const Navs = (props) => {
  return (
    <div className="nav-body">
      <div>
        <Link to="/">
          <div className="nav-initial">
            <div>
              <p className="nav-p">CV</p>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <nav>       
          {props.history.location.pathname === '/' ? (
            <a href="#projects-link">Projects</a>
          ) : (
            <Link to="/">Projects</Link>
          )}
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navs;
