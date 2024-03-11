import React from "react";
import logoImage from "./logo.jpg";

function Logo() {
  return (
    <div>
      <img src={logoImage} alt="Website Logo" style={{ width: "600px" }} />
    </div>
  );
}

export default Logo;
