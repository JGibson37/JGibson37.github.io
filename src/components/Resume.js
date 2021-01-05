import React, { Component } from 'react';
import JasonResume from "./files/JasonGibsonResume.pdf"
import "./css/layout.css";
import "./css/style.css";

class Resume extends Component {
    render() {
        return (
            <container class="resume-container" id="resume-container">
            <h2 class="resume-h2">My Resume</h2>
            <embed src={JasonResume} width="100%" height="100%"/>
           </container>
        )
    }
}

export default Resume;