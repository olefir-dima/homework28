import React from "react";
import MenuItem from "./MenuItem";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <nav>
        <MenuItem text="Головна" />
        <MenuItem text="Питання" />
        <MenuItem text="Матеріали" />
        <MenuItem text="Контакти" />
      </nav>
    </div>
  );
}

export default Header;
