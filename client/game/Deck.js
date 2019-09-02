import React, { Component } from "react";
import cardDeck from "../js/CardDeck";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cardDeck()
    };
  }
  render() {
    return (
      <div>
        <h1>Responsible for count and functions of cards</h1>
      </div>
    );
  }
}

export default Deck;
