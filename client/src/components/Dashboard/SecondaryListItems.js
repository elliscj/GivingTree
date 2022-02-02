import React, { useEffect } from "react";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries/queryUser";
import Auth from "../../utils/auth";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Link } from "@mui/material";
import { color } from "@mui/system";

import Branch from "../../assets/images/branch.png";
import Leaf from "../../assets/images/leaf.png";

const SecondaryListItems = () => {
  //   // query favorites array in database

  //   // map over each favorite and return list item button

  //   const [queryUser, { error, data }] = useQuery(QUERY_USER);

  //   if (error) {
  //     console.log(JSON.stringify(error));
  //   }

  //   const listFavorites = async () => {
  //     try {
  //       const { data } = await queryUser({
  //         variables: {
  //           username: Auth.getProfile().data.username,
  //         },
  //       });
  //       return { data };
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   //   useEffect(() => {
  //   //     console.log(`Welcome to the useEffect!
  //   //         Now that you've finally got here, hangout and make yourself at home!`);
  //   //     listFavorites();
  //   //   });
  //   //   console.log(Auth.getProfile().data);
  //   //   const listFavorites = Auth.getProfile().data.favorites;

  return (
    <div>
      <ListSubheader inset>Favorite Charities </ListSubheader>
      {/* sublist items. make array method to render list items for all favorited organizations in favorotes array */}

      <ListItem button>
        <ListItemIcon>
          <img alt="leaf icon" src={Leaf} height={35} width={35} />
        </ListItemIcon>
        <Link
          // href={`https://www.google.com/search?q=${charity_name}`}
          target="_blank"
        >
          <ListItemText primary="CharityName" />
        </Link>
      </ListItem>
    </div>
  );
};

export default SecondaryListItems;
