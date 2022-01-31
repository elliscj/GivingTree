import React from "react";

function formatCity(city) {
  if (!city.length) return "";

  let splitCity = city.split(" ");
  if (splitCity.length == 1) {
    let word = splitCity[0];
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  } else {
    splitCity = splitCity.map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    return splitCity.join(" ");
  }
}

function invalidData(data) {
  if (data.state.length === 0 || data.city.length === 0) {
    return <p>Both fields must be filled in</p>;
  } else if (data.state.length !== 2) {
    return <p>State field must be two characters uppercase</p>;
  } else {
    return "";
  }
}

const Location = ({
  handleSubmit,
  setCity,
  setState,
  setDisplay,
  city,
  state,
}) => {
  // const [city, setCity] = React.useState("")
  // const [state, setState] = React.useState("")
  const [klass, setKlass] = React.useState("time-outer-form");
  const [validation, setValidation] = React.useState("");

  const compileData = (e) => {
    e.preventDefault();
    // let customValidation = invalidData(data);
    // if (customValidation) {
    //   setValidation(customValidation);
    //   return;
    // }

    setKlass("swoopout");
    setDisplay("interest");
  };

  return (
    <form className={klass}>
      <h3>Where are you located/where can you help?</h3>
      <input
        type="text"
        value={city}
        placeholder="city (San Francisco)"
        onChange={(e) => setCity(formatCity(e.target.value))}
      />
      <input
        type="text"
        value={state}
        placeholder="state (CA)"
        onChange={(e) => setState(e.target.value.toUpperCase().trim())}
      />
      <input type="hidden" value="USA" />
      <input type="submit" value="submit" onClick={compileData} />
      {validation}
    </form>
  );
};

export default Location;
