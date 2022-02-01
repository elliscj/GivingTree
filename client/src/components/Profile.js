import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Divider } from "@mui/material";
import User from "../assets/images/user.png";
import Title from "./Dashboard/Title";
import "../styles/Profile.css";

export default function ProfileCard() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "50px",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Title>Your Profile Info</Title>
      <img src={User} alt="user icon" className="profileIcon" />

      <CardContent>
        <Title>Username:</Title>
        <Typography variant="h6" component="div">
          USERNAME PLACEHOLDER
        </Typography>
        <Divider />
        <Title>Email:</Title>
        <Typography variant="h6" component="div">
          EMAIL PLACE HOLDER
        </Typography>
        <Divider />
      </CardContent>

      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small" color="primary" className="changebtns">
          Change Info
        </Button>
        <Button size="small" color="primary" className="changebtns">
          Change Password
        </Button>
      </CardActions>
    </Card>
  );
}
