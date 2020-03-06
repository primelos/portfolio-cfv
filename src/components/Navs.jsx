import React from "react";
import { Link } from "react-router-dom";

const Navs = (props) => {
  console.log()
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
         
            <a href='#projects-link'>Projects</a>
         
        
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navs;
