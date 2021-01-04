import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

class DisplayPage extends Component {

    render(){
        return (
            <div className="container">
                <div className="title">DisplayPage</div>
                <NavBar />
                <Header />
            </div>
        )
    }
}

ReactDOM.render(<DisplayPage />, document.getElementById("root"));