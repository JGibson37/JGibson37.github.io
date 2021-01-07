import React, { Component } from 'react';
import emailBox from "./files/emailPic.png";
import gitBox from "./files/gitHubPic.png";
import linkedInBox from "./files/linkedInPic.png";
import "./css/layout.css";
import "./css/style.css";

class CommLinks extends Component {

    emailClick = () => {
        alert("Please send emails to Jason.Gibson15@yahoo.com");
    }

    render() {
        return (
            <container className="links-container">
                <img className="email-img" src={emailBox} alt="Email" onClick={this.emailClick}/>
                <a href="http://www.linkedin.com/in/jgibson37">
                    <img className="linkedin-img" src={linkedInBox} alt="Linked-In"/>
                </a>
                <a href="http://www.github.com/JGibson37"> 
                    <img className="github-img" src={gitBox} alt="Github"/>
                </a>
            </container>
        )
    }
}

export default CommLinks;