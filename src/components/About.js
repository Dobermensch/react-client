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

            <p>
              1. Any live cell with fewer than two live neighbors dies, as if
              caused by under-population.
            </p>
            <p>
              2. Any live cell with two or three live neighbors lives on to the
              next generation.
            </p>
            <p>
              3. Any live cell with more than three live neighbors dies, as if
              by overcrowding.
            </p>
            <p>
              4. Any dead cell with exactly three live neighbors becomes a live
              cell, as if by reproduction.
            </p>

            <p>
              Play with others or play with yourself by opening multiple windows
            </p>

            <p>Click on a cell to bring it to life.</p>

            <p>
              <b>The cells evolve every 10 seconds</b>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
