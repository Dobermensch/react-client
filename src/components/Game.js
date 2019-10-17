/*

Game component that opens socket connection to server and sets up the client with a random color.

*/

import React from "react";
import openSocket from "socket.io-client";
import Cell from "./Cell";

let socket;
const n_of_rows = 50;
const n_of_cols = 50;
const container_style = {
  paddingTop: "5vh"
};

class Game extends React.Component {
  constructor(props) {
    super(props);

    if (!socket) {
      socket = openSocket(process.env.REACT_APP_API_URL.toString());
    }

    const color = [1, 1, 1].map(num => num * Math.floor(Math.random() * 254));
    console.log(color);

    const rows = [];

    for (let r = 0; r < n_of_rows; r++) {
      let cols = [];
      for (let c = 0; c < n_of_cols; c++) {
        cols.push({ alive: false });
      }

      rows.push(cols);
    }

    this.state = { board: rows, color: color };
  }

  componentWillUnmount() {
    socket.disconnect();
    socket = null;
  }

  render() {
    return (
      <div className="boardContainer" style={container_style}>
        {this.state.board.map((row, r_ind) => {
          return (
            <div className="row" key={r_ind}>
              {row.map((col, c_ind) => {
                return (
                  <Cell
                    key={[r_ind, c_ind]}
                    cell_row_index={r_ind}
                    cell_col_index={c_ind}
                    socketProps={socket}
                    defaultRandomColorProps={this.state.color}
                    aliveProps={col.alive}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Game;
