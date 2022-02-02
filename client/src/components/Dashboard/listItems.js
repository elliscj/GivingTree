import React from "react";

import Flower from "../../assets/images/flower.png";
import Branch from "../../assets/images/branch.png";
import Leaf from "../../assets/images/leaf.png";
import TaxDoc from "../../assets/images/tax.png";
import Profile from "../../assets/images/user.png";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Link } from "@mui/material";
import { color } from "@mui/system";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries/queryUser";
import Auth from "../../utils/auth";

const mainListItems = (
  <div>
    {/* Branches list item */}
    {/* <ListItem button>
      <ListItemIcon>
        <img alt="branch icon" src={Branch} height={35} width={35} />
      </ListItemIcon>
      <ListItemText primary="Charity Groups" />
    </ListItem> */}
    {/* leaf list item */}
    {/* <ListItem button>
      <ListItemIcon>
        <img alt="leaf icon" src={Leaf} height={35} width={35} />
      </ListItemIcon>
      <ListItemText primary="Charities" />
    </ListItem> */}
    {/* Flower list item */}
    <ListItem button>
      <ListItemIcon>
        <img alt="flower icon" src={Flower} height={35} width={35} />
      </ListItemIcon>
      <Link
        href="/donations"
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItemText primary="Dontations" />
      </Link>
    </ListItem>
    {/* Tax docs list item */}
    <ListItem button>
      <ListItemIcon>
        <img alt="Tax Docs icon" src={TaxDoc} height={35} width={35} />
      </ListItemIcon>
      <Link
        href="https://eforms.com/download/2018/04/501c3-Donation-Receipt-Template.pdf"
        target="_blank"
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItemText primary="Tax Documents" />
      </Link>
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

export default mainListItems;

// export const SecondaryListItems = () => {
//   // query favorites array in database

//   // map over each favorite and return list item button

//   let [queryUser, { error, data }] = useQuery(QUERY_USER);

//   if (error) {
//     console.log(JSON.stringify(error));
//   }

//   const listFavorites = async () => {
//     console.log(Auth.getProfile().data);

//     try {
//       const { data } = await queryUser({
//         variables: {
//           username: Auth.getProfile().data.username,
//         },
//       });
//       console.log(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   useEffect(() => {
//     console.log(`Welcome to the useEffect!`);
//     listFavorites();
//   });
//   // console.log(Auth.getProfile().data);
//   // const listFavorites = Auth.getProfile().data.favorites;

//   return (
//     <div>
//       <ListSubheader inset>Favorite Charities </ListSubheader>
//       {/* sublist items. make array method to render list items for all favorited organizations in favorotes array */}

//       <ListItem button>
//         <ListItemIcon>
//           <img alt="leaf icon" src={Leaf} height={35} width={35} />
//         </ListItemIcon>
//         <Link
//           // href={`https://www.google.com/search?q=${charity_name}`}
//           target="_blank"
//         >
//           <ListItemText primary="CharityName" />
//         </Link>
//       </ListItem>
//     </div>
//   );
// };
