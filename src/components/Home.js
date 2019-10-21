import React, { Component } from "react";

const container = {
  width: "100%",
  height: "100%"
};

const vid_style = {
  paddingTop: "15vh"
};

export default class Home extends Component {
  render() {
    return (
      <div style={container}>
        <h1 style={{ paddingTop: "5vh" }}>Welcome</h1>
        <iframe
          width="560px"
          height="315px"
          src="https://www.youtube.com/embed/C2vgICfQawE?rel=0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={vid_style}
        ></iframe>
      </div>
    );
  }
}
