import React from "react";
import Modal from "./Modal";
import portfolioFile from "./files/react.png";
import portfolioFull from "./files/reactFull.png";
import "./css/layout.css";
import "./css/style.css";
import "./css/modal.css";

function ProjectThree() {
  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <div className="project">
      <h2 className="project-title">
        <a href="https://github.com/JGibson37/JGibson37.github.io">Portfolio</a>
      </h2>
      <img
        className="project-display"
        id="portfolio"
        src={portfolioFile}
        alt="portfolioFile"
        onClick={openModal}
      />
      <Modal id="portfolio-modal" className="modal" ref={modalRef}>
        <div className={"modal-content"}>
          <div
            className={"modal-backdrop"}
            onClick={() => modalRef.current.close()}
          >
            <div className={"modal-box"}>
              <p>
                My personal portfolio project was a project started about
                halfway through my cohort, but became an ongoing project for the
                rest of the cohort. Long after my portfolio was due I continued
                to make changes and improve the look of my portfolio until what
                you are seeing now. Here is just some of the code I wrote to
                bring this project to life.
              </p>
              <br></br>
              <div className="modal-img-container">
                <img
                  className="modal-image"
                  src={portfolioFull}
                  alt="portfolioFull"
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ProjectThree;
