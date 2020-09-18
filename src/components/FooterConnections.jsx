import React from "react";

const FooterConnections = props => {
  return (
    <div className="connections">
      <div className='icon-footer'>
        <i className="fab fa-github"></i>
        <a href="https://github.com/primelos" rel="noopener noreferrer" target="_blank">Github</a>
      </div>

      <div className='icon-footer'>
        <i className="fab fa-linkedin"></i>
        <a href="https://www.linkedin.com/in/carlos-venegas-75982432/" rel="noopener noreferrer" target="_blank">
          LinkedIn
        </a>
      </div>
      <div className='icon-footer'>
        <i className="fab fa-twitter"></i>
        <a href="https://twitter.com/primelos" rel="noopener noreferrer" target="_blank">Twitter</a>
      </div>
      <div className='icon-footer'>
        <i className="fab fa-facebook"></i>
        <a href="https://www.facebook.com/carlos.f.venegas1" rel="noopener noreferrer" target="_blank">Facebook</a>
      </div>
    </div>
  );
};

export default FooterConnections;
