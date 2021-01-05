import React, { Component } from "react";
import ReactDOM from "react-dom";
import CommLinks from "./components/CommLinks";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import IndentPage from "./components/IndentPage";

class DisplayPage extends Component {

    render(){
        return (
            // <div className="page-container">
            <div className="container">
                <IndentPage />
                <NavBar />
                <AboutMe />
                <Projects />
                <Resume />
                <IndentPage />
            </div>
        )
    }
}

ReactDOM.render(<DisplayPage />, document.getElementById("root"));