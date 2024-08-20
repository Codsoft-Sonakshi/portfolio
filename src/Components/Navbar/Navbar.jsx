import React from "react";
import { Link } from 'react-scroll';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-container-left">
          Portfolio
        </div>
        <div className="navbar-container-right">
          <a href="#about">
            <div className="navbar-container-right-about">
              About
            </div>
          </a>
        
          <a href="#project">
            <div className="navbar-container-right-projects">
              Projects
            </div>
          </a>
          <a href="#contact">
            <div className="navbar-container-right-contact">
              Contact
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
