import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import CharityIndexItem from "./indexItem";
import { BallTriangle } from "react-loader-spinner";
import "../styles/app.css";

const CharityIndex = ({ charities }) => {
  // const [indexItems, setIndex] = useState();
  // const [error, setError] = useState();

  // useEffect(() => {
  //   let fixedCity = city.split(" ");
  //   if (fixedCity.length === 1) {
  //     fixedCity = city;
  //   } else {
  //     fixedCity = fixedCity.join("%20");
  //   }
  //   axios
  //     .get(`/call`, {
  //       params: {
  //         fixedCity,
  //         state,
  //         category,
  //       },
  //     })
  //     .then((res) => {
  //       return setIndex(res.data);
  //     })
  //     .catch((err) => {
  //       return setError(err.message);
  //     });
  // }, []);

  // if (error)
  //   return (
  //     <div className="error">
  //       <h1>{error}</h1>
  //       <Link to="/">Click to Try Again!</Link>
  //       <p>
  //         Make sure you use the correct two-letter state code and spell the city
  //         right. If it's a status 404, there may be nothing in our database for
  //         that city. Try to search for a nearby larger one.
  //       </p>
  //     </div>
  //   );

  return charities ? (
    <div className="index">
      <h1>We found {charities.length} organizations matching your criteria</h1>
      <Link to="/">Back to Homepage</Link>
      {charities.map((charity) => (
        <CharityIndexItem charity={charity} />
      ))}
    </div>
  ) : (
    <BallTriangle
      type="BallTriangle"
      color="rgb(93, 93, 94)"
      className="loading"
    />
  );
};

export default CharityIndex;
