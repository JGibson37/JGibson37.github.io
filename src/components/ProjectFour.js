import React, { Component } from 'react';
import fizzBuzzFile from "./files/fizzBuzzKata.png";
import fizzBuzzFull from "./files/trianglesFull.png";
import "./css/layout.css";
import "./css/style.css";
import "./css/modal.css";

class ProjectFour extends Component {
    render() {
        return (
            <div class="project">
                <h2 class="project-title"><a href="https://github.com/JGibson37/Trio-Java-Katas">Katas</a></h2>
                <img class="project-display" id="kata" src={fizzBuzzFile}/>
                <modal id="kata-modal" class="modal">
                    <div class="modal-content">
                        <span class="close-kata">&times;</span>
                        <p>
                            I completed a trio of well known java katas. FizzBuzz, Triangle Sorter, and Babysitter. Because they are so known, 
                            I also robustly committed to github after every change, to ensure I captured my real work process. Below I've
                            shown a sample of the Triangle sorter, which was one of my favorites.
                        </p>
                        <container class="modal-img-container">
                        <img class="modal-image" src={fizzBuzzFull}/>
                        </container>
                    </div>
                </modal>
            </div>
        )
    }
}

export default ProjectFour;