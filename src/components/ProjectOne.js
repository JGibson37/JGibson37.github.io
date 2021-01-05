import React, { Component } from 'react';
import codeyFile from "./files/codeyFile.png";
import codeyFull from "./files/codeyFull.png";
import "./css/layout.css";
import "./css/style.css";
import "./css/modal.css";

class ProjectOne extends Component {
    render() {
        return (
            <div class="project">
                <h2 class="project-title"><a href="https://github.com/2020-Summer-Cohort/super-code-jr">Codey Vs Coder</a></h2>
                <img class="project-display" id="codey" src={codeyFile}/>
                <modal id="codey-modal" class="modal">
                    <div class="modal-content">
                        <span class="close-codey">&times;</span>
                        <p>
                            Codey Vs. Coder was the final capstone project of my cohort that my team desgined. It is a game where you
                            debug the code of an annoying AI who thinks he is all that. It has a back end API that reads questions from
                            a .txt file and uploads them. Using Javascript it injects different code into Iframes to render questions
                            onscreen in an exciting way. This project was the robust, encompassing everything I learned, and was the most 
                            fun project overall even though it was such high-pressure. 
                        </p>
                        <container class="modal-img-container">
                            <img class="modal-image" src={codeyFull}/>
                        </container>
                    </div>
                </modal>
            </div>
        )
    }
}

export default ProjectOne;