import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";
import backgroundVideo from "../assets/landing1.mp4";

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
          zIndex: "-1",
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <header className="landing">
        <h1>Welcome to GreenTree!</h1>
        {/* <h3>
        This site can help you find opportunities to contribute to charitable
        organizations and causes based on location and interest areas. Get
        started below.
      </h3> */}
        <Link className="btn-green" to="/components/NavBar">
          Get Started
        </Link>
      </header>
    </div>
  );
};

export default Landing;
