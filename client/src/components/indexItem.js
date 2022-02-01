import React from "react";
import { ADD_FAVORITE } from "../utils/mutations/userMutations";
import IconButton from "@mui/material/IconButton";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import Auth from "../utils/auth";
import nature from "../assets/images/Rnat.png";
import Lnature from "../assets/images/Lnat.png";

const CharityIndexItem = ({ charity }) => {
  const tagline = charity.tagLine ? charity.tagLine : null;
  const [favorite, setFavorite] = useState("");
  const [addFavorite, { error, data }] = useMutation(ADD_FAVORITE);
  const handleFavorite = async (event) => {
    event.preventDefault();
    setFavorite(event.target.charityName);
    try {
      const { data } = await addFavorite({
        variables: {
          $_id: Auth.getProfile().data._id,
          $charity_name: favorite,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="charity-item">
      <div>
        <h1>
          <div>
            <IconButton onClick={handleFavorite} sx={{ p: 0 }}>
              <img src={Lnature} height={35} width={35} />
              <p className="favorite">Add to Favorites</p>
              <img src={nature} height={35} width={35} />
            </IconButton>
          </div>
          <a
            href={charity.websiteURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {charity.charityName}
          </a>
        </h1>
        <h3>{charity.mission}</h3>
      </div>
      <ul>
        <li>Tagline: {tagline}</li>
        <li>
          Site:{" "}
          <a
            href={charity.websiteURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {charity.websiteURL}
          </a>
        </li>
        <li>EIN: {charity.ein}</li>
        <li>Rating: {charity.currentRating.rating} / 4</li>
      </ul>
    </div>
  );
};

export default CharityIndexItem;
