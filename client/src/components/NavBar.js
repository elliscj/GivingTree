import React from "react";

function NavBar() {
  const linkStyle = { border: "1px black", padding: "5px" };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: "flex",
          fontFamily: "helvetica",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <div style={linkStyle}>
          <a href="#">Home</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Your leaves</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Contact Us</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Login</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Sign-up</a>
        </div>
      </section>
    </nav>
  );
}

export default NavBar;
