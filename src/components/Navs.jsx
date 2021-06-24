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

      <nav>
        {props.history.location.pathname === "/" ? (
          <div>
            <a href="#projects-link">Projects</a>
          </div>
        ) : (
          <div>
            <Link to="/">Projects</Link>
          </div>
        )}
        <div className="plus-icon">
          <a href="#other-projects">
            <i class="fas fa-plus"></i>
          </a>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navs;
