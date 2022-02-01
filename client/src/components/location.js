import React from "react";
import backgroundVideo from "../assets/donate.mp4";

// function formatCity(city) {
//   if (!city.length) return "";

//   let splitCity = city.split(" ");
//   if (splitCity.length === 1) {
//     let word = splitCity[0];
//     return word[0].toUpperCase() + word.slice(1).toLowerCase();
//   } else {
//     splitCity = splitCity.map((word) => {
//       return word[0].toUpperCase() + word.slice(1).toLowerCase();
//     });
//     return splitCity.join(" ");
//   }
// }

function invalidData(data) {
  if (data.state.length === 0 || data.city.length === 0) {
    return "Both fields must be filled in";
  } else if (data.state.length !== 2) {
    return "State field must be two characters uppercase";
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
    const message = invalidData({ state, city });
    if (message) {
      return setValidation(message);
    }
    setKlass("swoopout");
    setDisplay("interest");
  };

  // invalidData();
  return (
    <div className="lamp">
      <video
        autoPlay
        muted
        loop
        id="myVideoLoc"
        style={{
          position: "absolute",
          top: "32%",
          left: "50%",
          width: "90%",
          height: "35%",
          // objectFit: "cover",
          transform: "translate(-50%, -50%)",
          // zIndex: 2,
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <form className={klass}>
        <h3>Where are you located/where can you help?</h3>
        <input
          type="text"
          value={city}
          placeholder="city (San Francisco)"
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          value={state}
          placeholder="state (CA)"
          onChange={(e) => setState(e.target.value.toUpperCase().trim())}
        />
        <input type="hidden" value="USA" />
        <button
          disabled={!city || !state}
          type="submit"
          value="submit"
          onClick={compileData}
        >
          Submit
        </button>
        <span style={{ color: "red" }}>{validation}</span>
      </form>
    </div>
  );
};

export default Location;
