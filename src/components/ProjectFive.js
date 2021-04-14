import React from "react";
import Modal from "./Modal";
import petFile from "./files/virtualPet.png";
import petFull from "./files/petsAmokFull.png";
import "./css/layout.css";
import "./css/style.css";
import "./css/modal.css";

function ProjectFive() {
  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <div className="project">
      <h2 className="project-title">
        <a href="https://github.com/JGibson37/VirtualPetsAmok">Virtual Pets</a>
      </h2>
      <img
        className="project-display"
        id="pet"
        src={petFile}
        alt="petFile"
        onClick={openModal}
      />
      <Modal id="pet-modal" className="modal" ref={modalRef}>
        <div className={"modal-content"}>
          <div
            className={"modal-backdrop"}
            onClick={() => modalRef.current.close()}
          >
            <div className={"modal-box"}>
              <p>
                Virtual Pets Amok is a tamagatchi style console app where you
                take care of many pets inside a pet shelter. It is very heavy on
                OOP, inheritance, and polymorphism.
              </p>
              <br></br>
              <container className="modal-img-container">
                <img className="modal-image" src={petFull} alt="petFull" />
              </container>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ProjectFive;
