import React from "react";
import FootConnections from "./FooterConnections";

const Footer = (props) => {

// check if the the DOM is ready
  document.onreadystatechange =() => {
    if(document.readyState === 'complete'){
      let dates = document.getElementById("test11")
      dates.innerHTML = new Date().getFullYear()
    }
  }

  return (
    <div className="main-footer">
      <FootConnections />
      <p className="rights date">
        Copy Right © <span id="test11">2021</span> Carlos Venegas
      </p>
    </div>
  );
};

export default Footer;
