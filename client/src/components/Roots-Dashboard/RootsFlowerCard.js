import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Flower from "../../assets/images/flower.png";
import "./Roots.css";

export default function FlowerCard() {
  return (
    <Card sx={{ maxWidth: 345 }} className="rootcard" container spacing={6}>
      <CardMedia
        className="icons"
        component="img"
        image={Flower}
        alt="flower icon"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Your Flowers
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Flowers represent your individual Donations
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">View All Flowers</Button>
      </CardActions>
    </Card>
  );
}
