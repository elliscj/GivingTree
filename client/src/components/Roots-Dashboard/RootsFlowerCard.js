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

import "../../styles/Roots.css";

export default function FlowerCard() {
  return (
    <>
      <Paper elevation={8} className="paper">
        <Card xs={{ maxWidth: 345 }} className="rootcard">
          {/* <CardMedia
            className="icons"
            component="img"
            image={Flower}
            alt="flower icon"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Your Flowers
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Flowers represent your individual Donations
            </Typography>
          </CardContent>
          <CardActions>
            <Button className="cardButtons" size="large">
              View All Flowers
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </>
  );
}
