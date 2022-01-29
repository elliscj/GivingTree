import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Paper,
  Icon,
} from "@material-ui/core";
import Flower from "../../assets/images/flower.png";
import Branch from "../../assets/images/branch.png";
import Leaf from "../../assets/images/leaf.png";
import TaxDoc from "../../assets/images/tax.png";
import Profile from "../../assets/images/user.png";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

export const mainListItems = (
  <div>
    {/* Branches list item */}
    <ListItem>
      <Button>
        <img alt="branch icon" alt="" src={Branch} height={35} width={35} />
        <Typography>Branches</Typography>
      </Button>
    </ListItem>
    {/* leaf list item */}
    <ListItem>
      <Button>
        <img alt="leaf icon" alt="" src={Leaf} height={35} width={35} />

        <Typography>Leafs</Typography>
      </Button>
    </ListItem>
    {/* Flower list item */}
    <ListItem>
      <Button>
        <img alt="flower icon" src={Flower} height={35} width={35} />

        <Typography>Flowers</Typography>
      </Button>
    </ListItem>
    {/* Tax docs list item */}
    <ListItem>
      <Button>
        <img alt="Tax Docs icon" src={TaxDoc} height={35} width={35} />

        <Typography>Tax Docs</Typography>
      </Button>
    </ListItem>
    {/* profile list item */}
    <ListItem>
      <Button>
        <img alt="profile icon" src={Profile} height={35} width={35} />

        <Typography>Profile</Typography>
      </Button>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>{/* <Assignment /> */}</ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>{/* <Assignment /> */}</ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>{/* <Assignment /> */}</ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
