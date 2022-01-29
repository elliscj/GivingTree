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

export default function LeafCard() {
  return (
    <>
      <Paper elevation={8} className="paper">
        <Card xs={{ maxWidth: 345 }} className="rootcard">
          {/* <CardMedia
            className="icons"
            component="img"
            image={Leaf}
            alt="flower icon"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Your Leafs
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Leafs represent your Favorite Organizations
            </Typography>
          </CardContent>
          <CardActions>
            <Button className="cardButtons" size="large">
              View All Leafs
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </>
  );
}
