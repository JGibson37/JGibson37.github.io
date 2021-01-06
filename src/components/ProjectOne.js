import React, { Component } from 'react';
import codeyFile from "./files/codeyFile.png";
import codeyFull from "./files/codeyFull.png";
import "./css/layout.css";
import "./css/style.css";
import "./css/modal.css";

class ProjectOne extends Component {
    render() {
        return (
            <div className="project">
                <h2 className="project-title"><a href="https://github.com/2020-Summer-Cohort/super-code-jr">Codey Vs Coder</a></h2>
                <img className="project-display" id="codey" src={codeyFile} alt="codeyFile"/>
                <modal id="codey-modal" className="modal">
                    <div className="modal-content">
                        <span className="close-codey">&times;</span>
                        <p>
                            Codey Vs. Coder was the final capstone project of my cohort that my team desgined. It is a game where you
                            debug the code of an annoying AI who thinks he is all that. It has a back end API that reads questions from
                            a .txt file and uploads them. Using Javascript it injects different code into Iframes to render questions
                            onscreen in an exciting way. This project was the robust, encompassing everything I learned, and was the most 
                            fun project overall even though it was such high-pressure. 
                        </p>
                        <container className="modal-img-container">
                            <img className="modal-image" src={codeyFull} alt="codeyFull"/>
                        </container>
                    </div>
                </modal>
            </div>
        )
    }
}

export default ProjectOne;