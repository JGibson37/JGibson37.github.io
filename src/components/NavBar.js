import React, { Component } from 'react';
import "./css/layout.css";
import "./css/style.css";

class NavBar extends Component {
    render() {
        return (
            <container class="nav-container">
            <nav class="nav-bar">
                <a href="#projects-display">Projects</a>
                <a href="#resume-container">Resume</a>
            </nav>
            </container>
        )
    }
}

export default NavBar;