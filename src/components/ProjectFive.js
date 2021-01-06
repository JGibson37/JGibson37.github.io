import React, { Component } from 'react';
import petFile from "./files/virtualPet.png";
import petFull from "./files/petsAmokFull.png";
import "./css/layout.css";
import "./css/style.css";
import "./css/modal.css";

class ProjectFive extends Component {
    render() {
        return (
            <div className="project">
                <h2 className="project-title"><a href="https://github.com/JGibson37/VirtualPetsAmok">Virtual Pets</a></h2>
                <img className="project-display" id="pet" src={petFile} alt="petFile"/>
                <modal id="pet-modal" className="modal">
                    <div className="modal-content">
                    <span className="close-pet">&times;</span>
                        <p>
                            Virtual Pets Amok is a tamagatchi style console app where you take care of many pets inside a pet shelter. It is 
                            very heavy on OOP, inheritance, and polymorphism.
                        </p>
                        <container className="modal-img-container">
                            <img className="modal-image" src={petFull} alt="petFull"/>
                        </container>
                    </div>
                </modal>
            </div>
        )
    }
}

export default ProjectFive;