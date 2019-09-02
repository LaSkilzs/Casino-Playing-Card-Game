import React, { Component } from "react";
import Board from "./Board";
import Players from "./Players";
import Deck from "./Deck";
import { Grid, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

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
      <Grid container>
        <Typography variant="h1">Welcome to Casino Cards</Typography>
        <Grid item md={12}>
          <Link to="/board">
            <Button variant="outlined" color="secondary">
              {"Play"}
            </Button>
          </Link>
        </Grid>
        <Grid item md={12}>
          <Button variant="outlined" color="secondary">
            {"Options"}
          </Button>
        </Grid>
        <Grid item md={12}>
          <Button variant="outlined" color="secondary">
            {"Quit"}
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default Game;
