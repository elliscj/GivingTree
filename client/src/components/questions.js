import React from "react";
import Location from "./location";
import { useState, useEffect } from "react";
import Interest from "./interest";
import CharityIndex from "./charityIndex";

import API from "../utils/API";

const Questions = () => {
  //display stage order: Location, Interest Area, Index
  const [currDisplay, setDisplay] = useState();
  const [displayNum, setNum] = useState(0);

  // query vars
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [category, setCategory] = useState("");

  const searchCharity = (query) =>
    API.search(query)
      .then((res) => setDisplay(res.data))
      .catch((err) => console.log(err));

  useEffect(() => {
    searchCharity(<Location handleSubmit={handleSubmit} />);
  }, []);

  const handleSubmit = (type, data) => {
    switch (type) {
      case "loc":
        setCity(data.city);
        setState(data.state);
        setNum(1);
        return setTimeout(
          () => searchCharity(<Interest handleSubmit={handleSubmit} />),
          500
        );

      case "interest":
        setCategory(data.category);
        setNum(2);
    }
  };

  // both location and interest are submitted, setDisplay out here to have access to vars and pass as props
  if (displayNum == 2) {
    setNum(3);
    setDisplay(<CharityIndex city={city} state={state} category={category} />);
  }

  return currDisplay ? (
    <div className="time-outer">{currDisplay}</div>
  ) : (
    <h1>No Data</h1>
  );
};

export default Questions;
