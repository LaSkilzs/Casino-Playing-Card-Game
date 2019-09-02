import React from "react";
import { InputBase, Grid, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    width: "70rem",
    height: "5rem",
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    border: "solid 5px black",
    marginBottom: "3rem",
    marginTop: "3rem"
  },
  items: { margin: 0, padding: "1rem" },
  input: {
    borderLeft: "3px solid black",
    borderRight: "3px solid black",
    width: "3vw",
    textAlign: "center",
    fontSize: "3rem",
    margin: "0 auto"
  },
  inputText: {
    padding: "1rem",
    width: "20vw",
    margin: "1rem"
  },
  span: { fontSize: "2rem", fontWeight: "bold", margin: "2rem" }
});

const Dashboard = props => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item md={4}>
        <InputBase placeholder="player one" className={classes.inputText} />
      </Grid>
      <Grid item md={4}>
        <div>
          <InputBase placeholder="0" className={classes.input} />
          <span className={classes.span}>{"score-board"}</span>
          <InputBase placeholder="0" className={classes.input} />
        </div>
      </Grid>
      <Grid item md={4}>
        <InputBase placeholder="player two" className={classes.inputText} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
