import React from "react";

const FooterConnections = props => {
  return (
    <div className="connections">
      <div className='icon-footer'>
        <i class="fab fa-github"></i>
        <a href="https://github.com/primelos">Github</a>
      </div>

      <div className='icon-footer'>
        <i class="fab fa-linkedin"></i>
        <a href="https://www.linkedin.com/in/carlos-venegas-75982432/">
          LinkedIn
        </a>
      </div>
      <div className='icon-footer'>
        <i class="fab fa-twitter"></i>
        <a href="https://twitter.com/primelos">Twitter</a>
      </div>
      <div className='icon-footer'>
        <i class="fab fa-facebook"></i>
        <a href="https://www.facebook.com/carlos.f.venegas1">Facebook</a>
      </div>
    </div>
  );
};

export default FooterConnections;
