import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <Grid container>
      <Typography variant="h1">Welcome to Casino Cards</Typography>
      <Link to="/game">
        <Button variant="outlined" color="secondary">
          {"Play"}
        </Button>
      </Link>
    </Grid>
  );
};

export default Home;
