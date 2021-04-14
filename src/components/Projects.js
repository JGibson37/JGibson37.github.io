import React, { Component } from "react";
import ProjectOne from "./ProjectOne.js";
import ProjectTwo from "./ProjectTwo.js";
import ProjectThree from "./ProjectThree.js";
import ProjectFour from "./ProjectFour.js";
import ProjectFive from "./ProjectFive.js";
import "./css/layout.css";
import "./css/style.css";

class Projects extends Component {
  render() {
    return (
      <div className="projects-display" id="projects-display">
        <div className="projects-header">
          <h2 className="project-header-h2"> Most recent projects:</h2>
          <p className="project-header-info">
            Click the header to view my repository, or click the photo for a
            description of the project, and a snapshot of the code used in the
            project.
          </p>
        </div>
        <section className="project-grid">
          <ProjectOne />
          <ProjectTwo />
          <ProjectThree />
          <ProjectFour />
          <ProjectFive />
        </section>
      </div>
    );
  }
}

export default Projects;
