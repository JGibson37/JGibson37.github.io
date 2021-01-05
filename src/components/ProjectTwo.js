import React, { Component } from 'react';
import artistsFile from "./files/artists.png";
import artistsFull from "./files/artistsFull.png";
import "./css/layout.css";
import "./css/style.css";
import "./css/modal.css";

class ProjectTwo extends Component {
    render() {
        return (
            <div class="project">
                <h2 class="project-title"><a href="https://github.com/JGibson37/Artists-Albums-Songs">Artists & Albums </a></h2>
                <img class="project-display" id="artists" src={artistsFile}/>
                <modal id="artists-modal" class="modal">
                    <div class="modal-content">
                        <span class="close-artists">&times;</span>
                        <p>
                        Artists, Albums, Songs was my introduction project to HTML javascript and single page web design. While complicated
                        at first, the power of HTML javascript became apparent. Pulling information from the API we created, we go from a list
                        of all the Artists, to a view of the artist and all of their albums. From there we could then view the album and all
                        of the songs on the album. We added the functionality to create, and delete, artists and albums. 
                        </p>
                        <container class="modal-img-container">
                        <img class="modal-image" src={artistsFull}/>
                        </container>
                    </div>
                </modal>
            </div>
        )
    }
}

export default ProjectTwo;