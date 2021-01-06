import React, { Component } from 'react';
import JasonResume from "./files/ResumePic.png"
import "./css/layout.css";
import "./css/style.css";

class Resume extends Component {
    render() {
        return (
            <container className="resume-container" id="resume-container">
            <h2 className="resume-h2">My Resume</h2>
            <img className="resume-rules" src={JasonResume} alt="JasonResume" />
           </container>
        )
    }
}

export default Resume;