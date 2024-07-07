import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
          <div className="navbar-container-left">
              Portfolio
          </div>
          <div className="navbar-container-right">
              <div className="navbar-container-right-about">
                About
              </div>
              <div className="navbar-container-right-skills">
                Skills
              </div>
              <div className="navbar-container-right-projects">
                Projects
              </div>
              <div className="navbar-container-right-contact">
                Contact
              </div>
          </div>
      </div>
    </div>
  )
};

export default Navbar;