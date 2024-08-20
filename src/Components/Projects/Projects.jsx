import React from "react";
import "./Projects.css";
import Projectscardmui from "./projectcardmui";
import { UserData } from "../utils/data";

const Projects = () => {
  return (
    <div id="project" className="project">
      <div className="project-container">
         <h5>My Work</h5>
         <h2>Projects</h2>
         <h6>Following projects showcases my skills and experience through real-world examples of my work.</h6>
      </div>
      <div className="project-container-card">
       {
        UserData.map((ud,i) => {
          return (
          < Projectscardmui key={i} data={ud} /> 
        ) 
        })
      }
      </div>
    </div>
  )
};

export default Projects;