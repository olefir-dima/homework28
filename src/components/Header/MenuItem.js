import React from "react";
import "./MenuItem.css";

function MenuItem({ text }) {
  return (
    <div className="menu-item">
      <a href="#">{text}</a>
    </div>
  );
}

export default MenuItem;
