import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Paper,
} from "@material-ui/core";
import Title from "./Title";
import Branch from "../../assets/images/branch.png";
import "../../styles/Roots.css";

export default function BranchCard() {
  return (
    <>
      <Card xs={{ maxWidth: 345 }} className="rootcard">
        {/* <CardMedia
            className="icons"
            component="img"
            image={Branch}
            alt="flower icon"
          /> */}
        <CardContent>
          <Title gutterBottom variant="h5" component="div">
            Your Branches
          </Title>
          <Typography variant="body1" color="text.secondary">
            Branches represent your Organization Groups
          </Typography>
        </CardContent>
        <CardActions>
          <Button className="cardButtons" size="large">
            View All Branches
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
