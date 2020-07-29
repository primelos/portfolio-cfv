import React from "react";
import { Link } from "react-router-dom";

const Navs = (props) => {
  console.log(props)
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
          {console.log(`test`, props)}
          
         {/* { */}
         {/* props.location.pathname === '/' ? (
           <a href="#featured-work">Projects</a>
         ) : ( */}
           <Link exact to='/'>
           Projects
           </Link>
          {/* )} */}
            {/* < Link to="/#projects-link">Projects</ Link> */}
         
        
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navs;
