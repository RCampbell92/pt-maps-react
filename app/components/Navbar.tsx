import React from "react";
import NavButton from "./NavButton";
import { useNavigate } from "react-router";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <ul className="navbar">
      <NavButton onClick={() => navigate("./browse")}>Browse</NavButton>
      <NavButton onClick={() => navigate("./compare")}>Compare</NavButton>
      <NavButton onClick={() => navigate("./explore/Southern-Cross")}>
        Explore
      </NavButton>
      <NavButton onClick={() => navigate("./about")}>About</NavButton>
    </ul>
  );
};

export default Navbar;
