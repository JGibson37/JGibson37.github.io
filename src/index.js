import React, { Component } from "react";
import ReactDOM from "react-dom";
import CommLinks from "./components/CommLinks";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";

class DisplayPage extends Component {

    render(){
        return (
            <div className="container">
                <NavBar />
                <AboutMe />
            </div>
        )
    }
}

ReactDOM.render(<DisplayPage />, document.getElementById("root"));