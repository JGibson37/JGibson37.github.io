import React, { Component } from 'react';
import portfolioFile from "./files/portfolio.png";
import portfolioFull from "./files/portfolioFull.png";
import "./css/layout.css";
import "./css/style.css";
import "./css/modal.css";

class ProjectThree extends Component {
    render() {
        return (
            <div class="project">
                <h2 class="project-title"><a href="https://github.com/JGibson37/JGibson37.github.io">Portfolio</a></h2>
                <img class="project-display" id="portfolio" src={portfolioFile}/>
                <modal id="portfolio-modal" class="modal">
                    <div class="modal-content">
                        <span class="close-portfolio">&times;</span>
                        <p>
                            My personal portfolio project was a project started about halfway through my cohort, but became an
                            ongoing project for the rest of the cohort. Long after my portfolio was due I continued to make changes
                            and improve the look of my portfolio until what you are seeing now. Here is just some of the code I wrote
                            to bring this project to life.
                        </p>
                        <container class="modal-img-container">
                        <img class="modal-image" src={portfolioFull}/>
                        </container>
                    </div>
                </modal>
            </div>
        )
    }
}

export default ProjectThree;