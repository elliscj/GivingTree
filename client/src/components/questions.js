import React from "react";
import Location from "./location";
import { useState, useEffect } from "react";
import Interest from "./interest";
import CharityIndex from "./charityIndex";

import API from "../utils/API";

const Questions = () => {
  //display stage order: Location, Interest Area, Index

  const [currDisplay, setDisplay] = useState("location");
  const [displayNum, setNum] = useState(0);

  // query vars
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [category, setCategory] = useState("1");
  const [charities, setCharities] = useState([]);

  const searchCharity = async () => {
    console.log({ city, state, category });
    const result = await API.search(city, state, category);

    setCharities(result.data);
    console.log(result.data);
  };
  // useEffect(() => {
  //   searchCharity();
  // }, []);

  const handleSubmit = (e) => {
    // e.preventDefault();
    searchCharity();
  };

  // both location and interest are submitted, setDisplay out here to have access to vars and pass as props
  if (displayNum == 2) {
    setNum(3);
    setDisplay(<CharityIndex city={city} state={state} category={category} />);
  }

  return currDisplay === "location" ? (
    <Location
      onSubmit={handleSubmit}
      city={city}
      state={state}
      setCity={setCity}
      setState={setState}
      setDisplay={setDisplay}
    />
  ) : currDisplay === "interest" ? (
    <Interest
      handleSubmit={handleSubmit}
      setCategory={setCategory}
      category={category}
      setDisplay={setDisplay}
    />
  ) : currDisplay === "index" ? (
    <CharityIndex charities={charities} />
  ) : (
    <p>Wrong State</p>
  );
};

export default Questions;
