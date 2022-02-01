import * as React from "react";

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
    <ListItem button>
      <ListItemIcon>
        <img alt="branch icon" src={Branch} height={35} width={35} />
      </ListItemIcon>
      <ListItemText primary="Charity Groups" />
    </ListItem>
    {/* leaf list item */}
    <ListItem button>
      <ListItemIcon>
        <img alt="leaf icon" src={Leaf} height={35} width={35} />
      </ListItemIcon>
      <ListItemText primary="Charities" />
    </ListItem>
    {/* Flower list item */}
    <ListItem button>
      <ListItemIcon>
        <img alt="flower icon" src={Flower} height={35} width={35} />
      </ListItemIcon>

      <ListItemText primary="Dontations" />
    </ListItem>
    {/* Tax docs list item */}
    <ListItem button>
      <ListItemIcon>
        <img alt="Tax Docs icon" src={TaxDoc} height={35} width={35} />
      </ListItemIcon>
      <ListItemText primary="Tax Documents" />
    </ListItem>
    {/* profile list item */}
    <ListItem button>
      <ListItemIcon>
        <img alt="profile icon" src={Profile} height={35} width={35} />
      </ListItemIcon>

      <ListItemText primary="Profile" />
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
