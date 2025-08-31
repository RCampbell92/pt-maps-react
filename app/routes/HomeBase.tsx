import React from "react";
import { Outlet } from "react-router";
import Navbar from "~/components/Navbar";
import Title from "~/components/Title";

const HomeBase = () => {
  return (
    <div>
      <Title />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeBase;
