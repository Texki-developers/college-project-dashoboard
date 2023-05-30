import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className={"Header"}>
      <h3>Dasboard</h3>
      <h1>{localStorage.getItem("username")}</h1>
    </div>
  );
};

export default Header;
