import React, { Component } from 'react';
import petFile from "./files/virtualPet.png";
import petFull from "./files/petsAmokFull.png";
import "./css/layout.css";
import "./css/style.css";
import "./css/modal.css";

class ProjectFive extends Component {
    render() {
        return (
            <div class="project">
                <h2 class="project-title"><a href="https://github.com/JGibson37/VirtualPetsAmok">Virtual Pets</a></h2>
                <img class="project-display" id="pet" src={petFile}/>
                <modal id="pet-modal" class="modal">
                    <div class="modal-content">
                    <span class="close-pet">&times;</span>
                        <p>
                            Virtual Pets Amok is a tamagatchi style console app where you take care of many pets inside a pet shelter. It is 
                            very heavy on OOP, inheritance, and polymorphism.
                        </p>
                        <container class="modal-img-container">
                            <img class="modal-image" src={petFull}/>
                        </container>
                    </div>
                </modal>
            </div>
        )
    }
}

export default ProjectFive;