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
import Branch from "../../assets/images/branch.png";
import "./Roots.css";

export default function BranchCard() {
  return (
    <Card sx={{ maxWidth: 345 }} className="rootcard" container spacing={6}>
      <CardMedia
        className="icons"
        component="img"
        image={Branch}
        alt="flower icon"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Your Branches
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Branches represent your Organization Groups
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">View All Branches</Button>
      </CardActions>
    </Card>
  );
}
