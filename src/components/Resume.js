import React, { Component } from "react";
import JasonResume from "./files/ResumePic.png";
import "./css/layout.css";
import "./css/style.css";

class Resume extends Component {
  render() {
    return (
      <div className="resume-container" id="resume-container">
        <h2 className="resume-h2">My Resume</h2>
        <img className="resume-rules" src={JasonResume} alt="JasonResume" />
      </div>
    );
  }
}

export default Resume;
