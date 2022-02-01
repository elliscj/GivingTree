import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";
import backgroundVideo from "../assets/Gtree.mp4";
import { Button, Typography } from "@mui/material";
const Landing = () => {
  return (
    <div style={{ backgroundColor: "#f1ebe2," }} className="landing">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "105%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",

          // zIndex: "-1",
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <header className="landing">
        <h1 className="landing">Welcome To GivingTree!</h1>

        <Button>
          <Link className="btn-green" to="/questions">
            Get Started
          </Link>
          <Link className="btn-green" to="/signin">
            Sign in
          </Link>
        </Button>
      </header>
    </div>
  );
};

export default Landing;
