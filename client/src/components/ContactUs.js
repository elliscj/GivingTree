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
  Link,
} from "@mui/material";
import GitHub from "../assets/images/github-logo.png";
import EmailIcon from "../assets/images/email.png";
import LinkedIcon from "../assets/images/linkedin.png";
import Title from "./Dashboard/Title";
import "../styles/Profile.css";

const Contributors = [
  {
    name: "Jason Lutz",
    githubName: "LutzJason92",
    githubLink: "https://github.com/LutzJason92",
    email: "LutzJason92@gmail.com",
    linkedIn: "https://www.linkedin.com/in/jason-lutz-a0710a191/",
  },
  {
    name: "Aaron Ferrel",
    githubName: "afarr002",
    githubLink: "https://github.com/afarr002",
    email: "afarrell002@gmail.com",
    linkedIn: "https://www.linkedin.com/in/aaron-farrell-1a7101219/",
  },
  {
    name: "William Barton",
    githubName: "wwbarton",
    githubLink: "https://github.com/wwbarton",
    email: "wwalt.barton@gmail.com",
    linkedIn: "https://www.linkedin.com/in/william-barton-140248222/",
  },
  {
    name: "Cameron Ellis",
    githubName: "elliscj",
    githubLink: "https://github.com/elliscj",
    email: "elliscj@colorado.edu",
    linkedIn: "https://www.linkedin.com/in/cameronje/",
  },
  {
    name: "Mohamed Essmat",
    githubName: "MohEssmat",
    githubLink: "https://github.com/MohEssmat",
    email: "mohamedessmat80@gmail.com",
    linkedIn: "https://www.linkedin.com/in/mohamed-essmat-0b771123/",
  },
];

export default function ContactCard() {
  return (
    <>
      <Paper sx={{ justifyContent: "center" }}>
        <Typography
          variant="h3"
          className="cuheader"
          sx={{
            textAlign: "center",
            margin: "auto",
          }}
        >
          GivingTree Developers
        </Typography>
      </Paper>
      <Grid container>
        <Grid
          container
          className="ccgrid"
          sx={{
            justifyContent: "center",
            // pt: px",
            display: "flex",
            flexDirection: "row",
            height: "auto",
          }}
        >
          {Contributors.map(({ name, email, githubLink, linkedIn }) => (
            <Card sx={{ minWidth: "200px" }} className="contactcards">
              <CardContent sx={{ justifyText: "center" }}>
                <Title variant="h6">{name}</Title>

                <Divider />

                <CardActions className="cardIcons">
                  <Link href={githubLink} target="_blank">
                    <img src={GitHub} alt="github icon" className="gitIcon" />
                  </Link>
                  <Link href={`mailto: ${email}`} target="_blank">
                    <img src={EmailIcon} alt="email icon" className="gitIcon" />
                  </Link>
                  <Link href={linkedIn} target="_blank">
                    <img
                      src={LinkedIcon}
                      alt="linkedin icon"
                      className="gitIcon"
                    />
                  </Link>
                </CardActions>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>

      {/* <Paper>iwufhwifUHwiruvh</Paper> */}
    </>
  );
}
