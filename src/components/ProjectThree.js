import React, { Component } from 'react';
import portfolioFile from "./files/portfolio.png";
import portfolioFull from "./files/portfolioFull.png";
import "./css/layout.css";
import "./css/style.css";
import "./css/modal.css";

class ProjectThree extends Component {
    render() {
        return (
            <div className="project">
                <h2 className="project-title"><a href="https://github.com/JGibson37/JGibson37.github.io">Portfolio</a></h2>
                <img className="project-display" id="portfolio" src={portfolioFile} alt="portfolioFile"/>
                <modal id="portfolio-modal" className="modal">
                    <div className="modal-content">
                        <span className="close-portfolio">&times;</span>
                        <p>
                            My personal portfolio project was a project started about halfway through my cohort, but became an
                            ongoing project for the rest of the cohort. Long after my portfolio was due I continued to make changes
                            and improve the look of my portfolio until what you are seeing now. Here is just some of the code I wrote
                            to bring this project to life.
                        </p>
                        <container className="modal-img-container">
                        <img className="modal-image" src={portfolioFull} alt="portfolioFull"/>
                        </container>
                    </div>
                </modal>
            </div>
        )
    }
}

export default ProjectThree;