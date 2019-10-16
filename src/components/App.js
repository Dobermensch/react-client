import React, { Component } from "react";
import "../styles/App.css";
import Home from "./Home";
import Nav from "./Nav";
import About from "./About";
import Game from "./Game";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/game" component={Game} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
