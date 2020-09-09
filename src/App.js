import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouteIndex from "./route";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <RouteIndex />
                </div>
            </Router>
        );
    }
}

export default App;

