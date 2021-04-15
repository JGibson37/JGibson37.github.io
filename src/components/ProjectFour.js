import React from "react";
import Modal from "./Modal";
import fizzBuzzFile from "./files/fizzBuzzKata.png";
import fizzBuzzFull from "./files/trianglesFull.png";
import "./css/layout.css";
import "./css/style.css";
import "./css/modal.css";

function ProjectFour() {
  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <div className="project">
      <h2 className="project-title">
        <a href="https://github.com/JGibson37/Trio-Java-Katas">Katas</a>
      </h2>
      <img
        className="project-display"
        id="kata"
        src={fizzBuzzFile}
        alt="fizzBuzzFile"
        onClick={openModal}
      />
      <Modal id="kata-modal" className="modal" ref={modalRef}>
        <div className="modal-content">
          <div
            className="modal-backdrop"
            onClick={() => modalRef.current.close()}
          >
            <div className="modal-box">
              <p>
                I completed a trio of well known java katas. FizzBuzz, Triangle
                Sorter, and Babysitter. Because they are so known, I also
                robustly committed to github after every change, to ensure I
                captured my real work process. Below I've shown a sample of the
                Triangle sorter, which was one of my favorites.
              </p>
              <br></br>
              <div className="modal-img-container">
                <img
                  className="modal-image"
                  src={fizzBuzzFull}
                  alt="fizzBuzzFull"
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ProjectFour;
