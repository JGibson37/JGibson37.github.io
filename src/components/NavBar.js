import React, { Component } from "react";
import "./css/layout.css";
import "./css/style.css";

class NavBar extends Component {
  render() {
    return (
      <div className="nav-container">
        <nav className="nav-bar">
          <a href="#projects-display">Projects</a>
          <a href="#resume-container">Resume</a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
