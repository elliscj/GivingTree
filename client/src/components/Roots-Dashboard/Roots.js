import React from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import FlowerCard from "./RootsFlowerCard";
import BranchCard from "./RootsBranchCard";
import LeafCard from "./RootsLeafCard";
import Chart from "./Chart";

// const GetUsername

function Roots() {
  return (
    <>
      <Typography variant="h5" className="RootGreeting">
        Welcome "user.username" to your Roots
      </Typography>
      <Grid>
        <Grid item xs={12}>
          <Chart />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <FlowerCard />
        </Grid>
        <Grid item xs={4}>
          <LeafCard />
        </Grid>
        <Grid item xs={4}>
          <BranchCard />
        </Grid>
      </Grid>
    </>
  );
}

export default Roots;
