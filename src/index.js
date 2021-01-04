import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";

class DisplayPage extends Component {

    render(){
        return (
            <div className="container">
                <div className="title">DisplayPage</div>
                <Header />
            </div>
        )
    }
}

ReactDOM.render(<DisplayPage />, document.getElementById("root"));