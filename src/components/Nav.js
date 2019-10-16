import React, { Component } from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";

const navStyle = {
  color: "white"
};

class Nav extends Component {
  render() {
    return (
      <nav>
        <h3>Conway's Game of Life</h3>
        <ul className="nav-links">
          <Link style={navStyle} to="/about">
            <li>About</li>
          </Link>
          <Link style={navStyle} to="/game">
            <li>Game</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
