import React, { Component } from 'react';
import ProjectOne from "./ProjectOne.js";
import ProjectTwo from "./ProjectTwo.js"
import "./css/layout.css";
import "./css/style.css";

class Projects extends Component {
    render() {
        return (
            <container class="projects-display" id="projects-display">
                <container class="projects-header">
                    <h2 class="project-header-h2" > Most recent projects:</h2>            
                    <p class="project-header-info">
                    Click the header to view my repository, or click the photo for a description of the project, 
                    and a snapshot of the code used in the project.
                    </p>
                </container>
                <section class="project-grid">
                    <ProjectOne />
                    <ProjectTwo />
                </section>    
            </container>
        )
    }
}

export default Projects;