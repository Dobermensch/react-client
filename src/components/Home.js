import React, { Component } from "react";

const container = {
  width: "100%"
};

const text_container = {
  display: "inline-block"
};

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <div style={container}>
          <div style={text_container}>
            <p>
              Head to Game to start playing but check out the rules in About
              first
            </p>
          </div>
        </div>
      </div>
    );
  }
}
