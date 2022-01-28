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
import Leaf from "../../assets/images/leaf.png";
import "./Roots.css";

export default function LeafCard() {
  return (
    <Card sx={{ maxWidth: 345 }} className="rootcard" container spacing={6}>
      <CardMedia
        className="icons"
        component="img"
        image={Leaf}
        alt="flower icon"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Your Leafs
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Leafs represent your Favorite Organizations
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">View All Leafs</Button>
      </CardActions>
    </Card>
  );
}
