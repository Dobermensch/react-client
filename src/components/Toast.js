import React from "react";

const toast_parent_container = {
  height: "10vh",
  width: "10vw",
  position: "absolute",
  right: "5vw"
};

class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { r: 255, g: 255, b: 255, numOfPlayers: 0 };
  }

  componentDidMount() {
    const current_this = this;
    this.props.socketProps.on("numOfPlayersChanged", function(data) {
      let r, g, b;
      [r, g, b] = data.increased ? [152, 251, 152] : [247, 154, 154];

      current_this.setState(
        { r: r, g: g, b: b, numOfPlayers: data.clients - 1 },
        () => {
          setTimeout(function() {
            current_this.setState({ r: 255, g: 255, b: 255 });
          }, 500);
        }
      );
    });
  }

  render() {
    let { r, g, b } = this.state;
    return (
      <div style={toast_parent_container}>
        <div
          style={{
            backgroundColor: `rgb(${r},${g},${b})`,
            display: "flex",
            flex: "1",
            justifyContent: "center"
          }}
        >
          <p style={{ color: "black" }}>{this.state.numOfPlayers}</p>
        </div>
      </div>
    );
  }
}

export default Toast;
