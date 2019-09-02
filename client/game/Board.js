import React from "react";
import Dashboard from "./Dashboard";
import Deck from "./Deck";
import { Paper, Grid, makeStyles } from "@material-ui/core";
import withStyles from "@material-ui/styles/withStyles";
import boardStyles from "../assets/boardStyle";

const useStyles = makeStyles({
  root: {
    background: "#076324",
    border: "2rem solid #a82c13",
    borderRadius: "10px",
    height: "40rem",
    width: "70rem",
    margin: "0 auto"
  }
});
const Board = props => {
  const classes = useStyles();
  console.log(props);
  return (
    <React.Fragment>
      <Dashboard />
      <Paper className={classes.root}>
        <Grid container>
          <h1>Canvas</h1>
          <Deck />
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default withStyles(boardStyles)(Board);
