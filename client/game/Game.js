import React, { Component } from "react";
import Board from "./Board";
import Players from "./Players";
import Deck from "./Deck";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      type: 4,
      players: [],
      score: {}
    };
  }
  render() {
    return (
      <div>
        <h1>Game set up with board and deck</h1>
        <Players />
        <Board />
        <Deck />
      </div>
    );
  }
}

export default Game;
