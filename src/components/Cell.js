/*
  Cell component that is in the board in Game component. 
*/

import React, { Component } from "react";
import "../styles/Cell.css";

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r: this.props.clickedColorProps[0],
      g: this.props.clickedColorProps[1],
      b: this.props.clickedColorProps[2],
      alive: this.props.aliveProps
    };
    this.handleOnCellClick = this.handleOnCellClick.bind(this);
  }

  handleOnCellClick() {
    if (!this.state.alive) {
      // if dead then proceed add some color to the Cell's life :) and notify server of event
      this.setState(
        {
          r: this.props.colorProps[0],
          g: this.props.colorProps[1],
          b: this.props.colorProps[2],
          alive: true
        },
        () => {
          this.props.socketProps.emit("cellChanged", {
            key: [this.props.cell_row_index, this.props.cell_col_index],
            color: { r: this.state.r, g: this.state.g, b: this.state.b }
          });
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

  // Events are decoupled from one another
  componentDidMount() {
    // const current_this = this;
    // this.props.socketProps.on("newGameState", function(data) {
    //   data.map(obj => {
    //     if (
    //       obj.ind[0] === current_this.props.cell_row_index &&
    //       obj.ind[1] === current_this.props.cell_col_index
    //     ) {
    //       current_this.reviveCell(obj.color);
    //     }
    //   });
    // });
    // this.props.socketProps.on("deadCells", function(data) {
    //   data.map(ind => {
    //     if (
    //       ind[0] === current_this.props.cell_row_index &&
    //       ind[1] === current_this.props.cell_col_index
    //     ) {
    //       current_this.killCell();
    //     }
    //   });
    // });
    // this.props.socketProps.on("newCells", function(data) {
    //   data.map(obj => {
    //     if (
    //       obj.ind[0] === current_this.props.cell_row_index &&
    //       obj.ind[1] === current_this.props.cell_col_index
    //     ) {
    //       current_this.reviveCell(obj.color);
    //     }
    //   });
    // });
    // this.props.socketProps.on("otherChangedCell", function(data) {
    //   if (
    //     data.ind[0] === current_this.props.cell_row_index &&
    //     data.ind[1] === current_this.props.cell_col_index
    //   ) {
    //     current_this.reviveCell(data.color);
    //   }
    // });
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: `rgb(${this.state.r}, ${this.state.g}, ${this.state.b})`
        }}
        className="cellContainer"
        onClick={this.handleOnCellClick}
      ></div>
    );
  }
}

export default Cell;
