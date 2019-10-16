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

    const color = [1, 1, 1].map(num => num * Math.floor(Math.random() * 256));

    const rows = [];

    for (let r = 0; r < n_of_rows; r++) {
      let cols = [];
      for (let c = 0; c < n_of_cols; c++) {
        cols.push({ alive: false, color: [255, 255, 255] });
      }

      rows.push(cols);
    }

    this.state = { board: rows, color: color };
    this.handleChangedCells = this.handleChangedCells.bind(this);
  }

  componentDidMount() {
    const current_this = this;
    socket.on("newGameState", function(data) {
      const new_board = current_this.state.board;
      data.map(obj => {
        new_board[obj.ind[0]][obj.ind[1]] = { color: obj.color, alive: true };
      });

      current_this.setState({ board: new_board });
    });

    socket.on("changedCells", this.handleChangedCells);

    socket.on("otherChangedCell", function(data) {
      const new_board = current_this.state.board;
      new_board[data.ind[0]][data.ind[1]] = { color: data.color, alive: true };

      current_this.setState({ board: new_board });
    });
  }

  handleChangedCells(data) {
    console.log(data);
    let new_board = this.state.board;
    data.map(arr => {
      arr.map(obj => {
        new_board[obj.ind[0]][obj.ind[1]] = {
          color: obj.color,
          alive: obj.alive
        };
      });
    });

    this.setState({ board: new_board });
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
                    cell_row_index={c_ind}
                    cell_col_index={r_ind}
                    socketProps={socket}
                    colorProps={this.state.color}
                    clickedColorProps={col.color}
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
