import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import IndentPage from "./components/IndentPage";

class DisplayPage extends Component {
  render() {
    return (
      <div className="page-container">
        <IndentPage />
        <div className="inner-page-container">
          <NavBar />
          <AboutMe />
          <Projects />
          <Resume />
        </div>
        <IndentPage />
      </div>
    );
  }
}

ReactDOM.render(<DisplayPage />, document.getElementById("root"));
