import React from "react";
import Modal from "./Modal";
import artistsFile from "./files/artists.png";
import artistsFull from "./files/artistsFull.png";
import "./css/layout.css";
import "./css/style.css";
import "./css/modal.css";

function ProjectTwo() {
  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <div className="project">
      <h2 className="project-title">
        <a href="https://github.com/JGibson37/Artists-Albums-Songs">
          Artists & Albums
        </a>
      </h2>
      <img
        className="project-display"
        id="artists"
        src={artistsFile}
        alt="artistsFile"
        onClick={openModal}
      />
      <Modal id="artists-modal" className="modal" ref={modalRef}>
        <div className={"modal-content"}>
          <div
            className={"modal-backdrop"}
            onClick={() => modalRef.current.close()}
          >
            <div className={"modal-box"}>
              <p>
                Artists, Albums, Songs was my introduction project to HTML
                javascript and single page web design. While complicated at
                first, the power of HTML javascript became apparent. Pulling
                information from the API we created, we go from a list of all
                the Artists, to a view of the artist and all of their albums.
                From there we could then view the album and all of the songs on
                the album. We added the functionality to create, and delete,
                artists and albums.
              </p>
              <br></br>
              <div className="modal-img-container">
                <img
                  className="modal-image"
                  src={artistsFull}
                  alt="artistsFull"
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ProjectTwo;
