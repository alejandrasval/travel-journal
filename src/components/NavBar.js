import React from "react";
import { BiWorld } from "react-icons/bi";

const NavBar = () => {
  return (
    <nav>
      <BiWorld className="icon-world"/>
      <h1 className="title">my travel journal.</h1>
    </nav>
  );
};

export default NavBar;
