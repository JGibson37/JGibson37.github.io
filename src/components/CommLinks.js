import React, { Component } from 'react';
import emailBox from "./files/emailPic.png";
import gitBox from "./files/gitHubPic.png";
import linkedInBox from "./files/linkedInPic.png";
import "./css/layout.css";
import "./css/style.css";

class CommLinks extends Component {
    render() {
        return (
            <container className="links-container">
                <img className="email-img" src={emailBox}/>
                <a href="http://www.linkedin.com/in/jgibson37">
                    <img className="linkedin-img" src={linkedInBox}></img>
                </a>
                <a href="http://www.github.com/JGibson37"> 
                    <img className="github-img" src={gitBox}></img>
                </a>
            </container>
        )
    }
}

export default CommLinks;