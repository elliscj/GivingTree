import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function FlowerCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Flowers
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Flowers represent your individual Donations to Organizations
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">View Flowers</Button>
      </CardActions>
    </Card>
  );
}
