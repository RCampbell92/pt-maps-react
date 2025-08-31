import React from "react";
import NavButton from "./NavButton";
import { useNavigate } from "react-router";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <ul className="navbar">
      <NavButton onClick={() => console.log("Browse")}>Browse</NavButton>
      <NavButton onClick={() => navigate("./compare")}>Compare</NavButton>
      <NavButton onClick={() => navigate("./explore")}>Explore</NavButton>
      <NavButton onClick={() => console.log("About")}>About</NavButton>
    </ul>
  );
};

export default Navbar;
