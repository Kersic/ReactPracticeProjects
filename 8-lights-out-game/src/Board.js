import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";
import { element } from "prop-types";

class Board extends Component {
  static defaultProps = {
    ncols: 5,
    nrows: 5,
    chanceLightStartsOn: 0.25
  };

  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard()
    };
    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  createBoard() {
    let board = [];
    for (let i = 0; i < this.props.nrows; i++) {
      let row = [];
      for (let j = 0; j < this.props.ncols; j++) {
        let isLit = Math.random() < this.props.chanceLightStartsOn;
        row.push(isLit);
      }
      board.push(row);
    }
    return board;
  }

  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y, x);
    flipCell(y - 1, x);
    flipCell(y + 1, x);
    flipCell(y, x - 1);
    flipCell(y, x + 1);

    function areAllOff() {
      for (let i = 0; i < nrows; i++) {
        for (let j = 0; j < ncols; j++) {
          if (board[i][j]) return false;
        }
      }
      return true;
    }
    let hasWon = areAllOff();
    this.setState({ board, hasWon });
  }

  render() {
    if(this.state.hasWon){
      return (
          <div className="board-title">
            <div className="winner">
              <span className="neon-orange">YOU</span>
              <span className="neon-blue">WIN!</span>
            </div>
          </div>
      )
    }

    let tableBody = [];
    for (let i = 0; i < this.props.nrows; i++) {
      let row = [];
      for (let j = 0; j < this.props.ncols; j++) {
        let keyCord = `${i}-${j}`;
        row.push(
            <Cell
                key={keyCord}
                isLit={this.state.board[i][j]}
                flipCellsAroundMe={() => this.flipCellsAround(keyCord)}
            />
        );
      }
      tableBody.push(<tr key={i}>{row}</tr>);
    }
    return (
        <div>
          <div className="board-title">
            <div className="neon-orange">Lights</div>
            <div className="neon-blue">out</div>
          </div>

          <table className="Board">
            <tbody>{tableBody}</tbody>
          </table>
        </div>
    );
  }
}

export default Board;
