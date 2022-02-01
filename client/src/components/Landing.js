import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";
import backgroundVideo from "../assets/landing1.mp4";
import { Button, Typography } from "@mui/material";

const Landing = () => {
  return (
    <div className="landing">
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
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          // zIndex: "-1",
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <header className="landing">
        <h1 className="landing">Welcome to GivingTree!</h1>
        <Button>
          <Link className="btn-green" to="/components/questions">
            <Typography>Get Started</Typography>
          </Link>
        </Button>
        <Button>
          <Link className="btn-green" to="/components/SignIn">
            <Typography>Sign in</Typography>
          </Link>
        </Button>
      </header>
    </div>
  );
};

export default Landing;
