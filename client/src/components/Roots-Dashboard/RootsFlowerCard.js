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
import Title from "./Title";
import "../../styles/Roots.css";

export default function FlowerCard() {
  return (
    <>
      <Card xs={{ maxWidth: 345 }} className="rootcard">
        {/* <CardMedia
            className="icons"
            component="img"
            image={Flower}
            alt="flower icon"
          /> */}
        <CardContent>
          <Title gutterBottom variant="h5" component="div">
            Your Flowers
          </Title>
          <Typography variant="body1" color="text.secondary">
            Flowers represent your individual Donations
          </Typography>
        </CardContent>
        <CardActions>
          <Button className="cardButtons" size="large">
            View All Flowers
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
