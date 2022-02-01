import * as React from "react";

import IconButton from "@mui/material/IconButton";

import nature from "../assets/images/Rnat.png";
import Lnature from "../assets/images/Lnat.png";

const CharityIndexItem = ({ charity }) => {
  const tagline = charity.tagLine ? charity.tagLine : null;
  return (
    <div className="charity-item">
      <div>
        <h1>
          <div>
            <IconButton sx={{ p: 0 }}>
              <img src={Lnature} height={35} width={35} />
              <p>Add to Favorites</p>
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
