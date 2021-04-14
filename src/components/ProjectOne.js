import React from "react";
import Modal from "./Modal";
import codeyFile from "./files/codeyFile.png";
import codeyFull from "./files/codeyFull.png";
import "./css/layout.css";
import "./css/style.css";
import "./css/modal.css";

function ProjectOne() {
  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <div className="project">
      <h2 className="project-title">
        <a href="https://github.com/2020-Summer-Cohort/super-code-jr">
          Codey Vs Coder
        </a>
      </h2>
      <img
        onClick={openModal}
        className="project-display"
        id="codey"
        src={codeyFile}
        alt="codeyFile"
      />
      <Modal id="portfolio-modal" className="modal" ref={modalRef}>
        <div className={"modal-content"}>
          <div
            className={"modal-backdrop"}
            onClick={() => modalRef.current.close()}
          >
            <div className={"modal-box"}>
              <p>
                Codey Vs. Coder was the final capstone project of my cohort that
                was designed by myself and my team. It is a game where you debug
                the code of an annoying AI who thinks he is all that. It has a
                back end API that reads questions from a .txt file and uploads
                them. Using Javascript it injects different code into Iframes to
                render questions onscreen in an exciting way. This project was
                the robust, encompassing everything I learned, and was the most
                fun project overall even though it was such high-pressure.
              </p>
              <br></br>
              <div className="modal-img-container">
                <img className="modal-image" src={codeyFull} alt="codeyFull" />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ProjectOne;
