import React, { Component } from 'react';
import fizzBuzzFile from "./files/fizzBuzzKata.png";
import fizzBuzzFull from "./files/trianglesFull.png";
import "./css/layout.css";
import "./css/style.css";
import "./css/modal.css";

class ProjectFour extends Component {
    render() {
        return (
            <div className="project">
                <h2 className="project-title"><a href="https://github.com/JGibson37/Trio-Java-Katas">Katas</a></h2>
                <img className="project-display" id="kata" src={fizzBuzzFile} alt="fizzBuzzFile"/>
                <modal id="kata-modal" className="modal">
                    <div className="modal-content">
                        <span className="close-kata">&times;</span>
                        <p>
                            I completed a trio of well known java katas. FizzBuzz, Triangle Sorter, and Babysitter. Because they are so known, 
                            I also robustly committed to github after every change, to ensure I captured my real work process. Below I've
                            shown a sample of the Triangle sorter, which was one of my favorites.
                        </p>
                        <container className="modal-img-container">
                        <img className="modal-image" src={fizzBuzzFull} alt="fizzBuzzFull"/>
                        </container>
                    </div>
                </modal>
            </div>
        )
    }
}

export default ProjectFour;