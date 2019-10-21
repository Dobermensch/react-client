import React, { Component } from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";

const navLinkStyle = {
  color: "#aaa",
  display: "block",
  lineHeight: "56px",
  padding: "0 24px",
  textDecoration: "none"
};

class Nav extends Component {
  render() {
    return (
      <nav>
        <h3>Conway's Game of Life</h3>
        <ul className="nav-links">
          <Link style={navLinkStyle} to="/">
            <li>Home</li>
          </Link>
          <Link style={navLinkStyle} to="/about">
            <li>About</li>
          </Link>
          <Link style={navLinkStyle} to="/game">
            <li>Game</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
