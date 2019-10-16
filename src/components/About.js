import React from "react";
import "../styles/About.css";

const container = {
  width: "100%"
};

const p_container = {
  display: "inline-block"
};

const div_style = {};

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <div style={container}>
          <div style={p_container}>
            <p>This is a multiplayer game based on the following 4 rules:</p>

            <ul>
              <li>
                Any live cell with fewer than two live neighbors dies, as if
                caused by under-population.
              </li>
              <li>
                Any live cell with two or three live neighbors lives on to the
                next generation.
              </li>
              <li>
                Any live cell with more than three live neighbors dies, as if by
                overcrowding.
              </li>
              <li>
                Any dead cell with exactly three live neighbors becomes a live
                cell, as if by reproduction.
              </li>
            </ul>

            <p>Click on a cell to bring it to life.</p>
            <p>The cells evolve every 10 seconds</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
