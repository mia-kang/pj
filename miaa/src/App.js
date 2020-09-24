import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SingleFullVenue from "./pages/SingleFullVenue/SingleFullVenue";
import NavBar from "./utilities/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Home} />
        <Route exact path="/venue/:vid" component={SingleFullVenue} />
      </Router>
    );
  }
}

export default App;

// <Router>
//   <Route path="/" Component={NavBar} />
//   <Route exact path="/" Component={Home} />
// </Router>
