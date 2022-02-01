import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BranchCard() {
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
          Branches
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Branches are your groups of Organizations that you favorited
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">View Branches</Button>
      </CardActions>
    </Card>
  );
}
