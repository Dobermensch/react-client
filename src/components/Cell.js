/*
  Cell component that is in the board in Game component. 
*/

import React, { Component } from "react";
import "../styles/Cell.css";

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r: 255,
      g: 255,
      b: 255,
      alive: false
    };
    this.handleOnCellClick = this.handleOnCellClick.bind(this);
    this.amITheChosenOne = this.amITheChosenOne.bind(this);
  }

  handleOnCellClick() {
    if (!this.state.alive) {
      // if dead then proceed add some color to the Cell's life :) and notify server of event
      this.setState(
        {
          r: this.props.defaultRandomColorProps[0],
          g: this.props.defaultRandomColorProps[1],
          b: this.props.defaultRandomColorProps[2],
          alive: true
        },
        () => {
          this.props.socketProps.emit("cellChanged", {
            key: [this.props.cell_row_index, this.props.cell_col_index],
            color: { r: this.state.r, g: this.state.g, b: this.state.b }
          });
          console.log("emitted");
        }
      );
    }
  }

  // kills cell
  killCell() {
    this.setState({ r: 255, g: 255, b: 255, alive: false });
  }

  // Sets current state
  reviveCell(color) {
    this.setState({ r: color[0], g: color[1], b: color[2], alive: true });
  }

  // Events listeners
  // Each cell receives the data and if the data is meant for it, it changes accordingly
  componentDidMount() {
    const current_this = this;
    this.props.socketProps.on("newGameState", function(data) {
      data.map(obj => {
        if (current_this.amITheChosenOne(obj.ind[0], obj.ind[1])) {
          current_this.reviveCell(obj.color);
        }
      });
    });
    this.props.socketProps.on("changedCells", function(data) {
      // data is an array of two arrays
      data.map((arr, a_ind) =>
        arr.map(obj => {
          if (current_this.amITheChosenOne(obj.ind[0], obj.ind[1])) {
            // if the obj is in the first array, kill the cell otherwise revive it
            a_ind === 0
              ? current_this.killCell()
              : current_this.reviveCell(obj.color);
          }
        })
      );
    });
    this.props.socketProps.on("otherChangedCell", function(data) {
      if (current_this.amITheChosenOne(data.ind[0], data.ind[1])) {
        current_this.reviveCell(data.color);
      }
    });
  }

  amITheChosenOne(obj_row, obj_col) {
    return (
      obj_row === this.props.cell_row_index &&
      obj_col === this.props.cell_col_index
    );
  }

  render() {
    let { r, g, b } = this.state;
    return (
      <div
        style={{
          backgroundColor: `rgb(${r}, ${g}, ${b})`
        }}
        className="cellContainer"
        onClick={this.handleOnCellClick}
      />
    );
  }
}

export default Cell;
