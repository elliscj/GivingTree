import React from "react";

const Interest = ({ handleSubmit }) => {
  const [category, setCategory] = React.useState("1");

  const compileData = (e) => {
    e.preventDefault();
    const data = {
      category,
    };
    handleSubmit("interest", data);
  };

  return (
    <div className="time-outer">
      <form className="time-outer-form">
        <label>
          <h3>What kind of work interests you?</h3>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="1">Animals </option>
            <option value="2">Arts, Culture, Humanities</option>
            <option value="10">Community Development</option>
            <option value="3">Education</option>
            <option value="4">Environment</option>
            <option value="5">Health</option>
            <option value="6">Human Services</option>
            <option value="8">Human and Civil Rights</option>
            <option value="7">International</option>
            <option value="9">Religion</option>
            <option value="11 ">Research and Public Policy</option>
          </select>
        </label>
        <button type="submit" value="Submit" onClick={compileData}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Interest;
