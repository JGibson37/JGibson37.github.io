import React, { Component } from 'react';
import artistsFile from "./files/artists.png";
import artistsFull from "./files/artistsFull.png";
import "./css/layout.css";
import "./css/style.css";
import "./css/modal.css";

class ProjectTwo extends Component {
    render() {
        return (
            <div className="project">
                <h2 className="project-title"><a href="https://github.com/JGibson37/Artists-Albums-Songs">Artists & Albums </a></h2>
                <img className="project-display" id="artists" src={artistsFile} alt="artistsFile"/>
                <modal id="artists-modal" className="modal">
                    <div className="modal-content">
                        <span className="close-artists">&times;</span>
                        <p>
                            Artists, Albums, Songs was my introduction project to HTML javascript and single page web design. While complicated
                            at first, the power of HTML javascript became apparent. Pulling information from the API we created, we go from a list
                            of all the Artists, to a view of the artist and all of their albums. From there we could then view the album and all
                            of the songs on the album. We added the functionality to create, and delete, artists and albums. 
                        </p>
                        <container className="modal-img-container">
                        <img className="modal-image" src={artistsFull} alt="artistsFull"/>
                        </container>
                    </div>
                </modal>
            </div>
        )
    }
}

export default ProjectTwo;