import React, { Component } from "react";

class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "player",
      hand: [],
      score: 0,
      turn: false
    };
  }
  render() {
    return (
      <div>
        <h1>Responsible for user/player session and hand of cards</h1>
      </div>
    );
  }
}

export default Players;
