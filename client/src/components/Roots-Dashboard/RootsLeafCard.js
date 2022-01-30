import * as React from "react";
import {
  Paper,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Leaf from "../../assets/images/leaf.png";
import "../../styles/Roots.css";
import Title from "./Title";
export default function LeafCard() {
  return (
    <>
      <Card xs={{ maxWidth: 345 }} className="rootcard">
        {/* <CardMedia
            className="icons"
            component="img"
            image={Leaf}
            alt="flower icon"
          /> */}
        <CardContent>
          <Title gutterBottom variant="h5" component="div">
            Your Leafs
          </Title>
          <Typography variant="body1" color="text.secondary">
            Leafs represent your Favorite Organizations
          </Typography>
        </CardContent>
        <CardActions>
          <Button className="cardButtons" size="large">
            View All Leafs
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
