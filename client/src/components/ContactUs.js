import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Divider,
  getTabId,
  Grid,
  Paper,
} from "@mui/material";
import GitHub from "../assets/images/github-logo.png";
import Title from "./Dashboard/Title";
import "../styles/Profile.css";

const contributers = [
  {
    name: "Jason Lutz",
    githubName: "LutzJason92",
    githubLink: "https://github.com/LutzJason92",
  },
  {
    name: "Aaron Ferrel",
    githubName: "afarr002",
    githubLink: "https://github.com/afarr002",
  },
  {
    name: "William Barton",
    githubName: "wwbarton",
    githubLink: "https://github.com/wwbarton",
  },
  {
    name: "Cameron Ellis",
    githubName: "elliscj",
    githubLink: "https://github.com/elliscj",
  },
  {
    name: "Mohamed Essmat",
    githubName: "MohEssmat",
    githubLink: "https://github.com/MohEssmat",
  },
];

export default function ContactCard() {
  return (
    <Grid>
      <Grid>
        <Typography variant="h3" className="">
          Contact the Developers
        </Typography>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "row",
            height: "auto",
          }}
        >
          <Card>
            <CardContent>
              <Title>Username:</Title>

              <Divider />
              <Title>Email:</Title>
              <Typography variant="h6" component="div">
                EMAIL PLACE HOLDER
              </Typography>
              <Divider />
              <Title>Find us on GitHub</Title>
              <img src={GitHub} alt="user icon" className="profileIcon" />
              <Typography></Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
