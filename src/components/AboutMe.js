import React, { Component } from 'react';
import AboutMeImg from "./files/JasonG.jpg";
import CommLinks from "./CommLinks";
import "./css/layout.css";
import "./css/style.css";

class AboutMe extends Component {
    render() {
        return (
            <container className= "about-me">
            <container className= "about-me-box1">
            <container className="about-me-box1-specs">
                <CommLinks />
                <container className="about-me-box2">
                 <p className="about-me">About Me</p>
                 <p className="about-me-text"> I am a young software developer looking for opportunities to grow my language base and knowledge pool.
                   My first introduction to programming was self taught. I was working with a bot that was designed to play the game, 
                   Diablo II, for me. Once I got into highschool I ended up joining the FIRST Robotics team. Every year, the company
                   FIRST Robotics, releases a video that describes a game to be played by robots. They are designed and 
                   programmed with the help of Engineers that work with the schools team of students. After everything is said and
                   done you then pit your robot against schools from all around the country.
                 </p>
                </container>
            </container>
            <container className="about-me-box1-img">
             <img className="about-me-img" src={AboutMeImg} alt="Jason"/>
            </container>
           </container>
          </container>
        )
    }
}

export default AboutMe;