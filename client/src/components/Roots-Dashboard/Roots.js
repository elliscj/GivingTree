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
  Paper,
} from "@material-ui/core";
import Dashboard from "./Dashboard";
import FlowerCard from "./RootsFlowerCard";
import BranchCard from "./RootsBranchCard";
import LeafCard from "./RootsLeafCard";
import Chart from "./Chart";
import Donations from "./Donations";

// const GetUsername

function Roots() {
  return (
    <>
      <Dashboard />
      <Chart />
      <Donations />
      {/* <Typography variant="h5" className="RootGreeting">
        Welcome "user.username" to your Roots
      </Typography>

      <Grid>
        <Grid item lg={6}>
          <Chart />
        </Grid>
      </Grid> */}
      {/* <Grid container spacing={4}>
        <Grid item lg={4}>
          <FlowerCard />
        </Grid>
        <Grid item lg={4}>
          <LeafCard />
        </Grid>
        <Grid item lg={4}>
          <BranchCard />
        </Grid>
      </Grid> */}
    </>
  );
}

export default Roots;
