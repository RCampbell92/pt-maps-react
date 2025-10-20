import React from "react";
import { HashRouter, Outlet } from "react-router";
import Navbar from "~/components/Navbar";
import Title from "~/components/Title";

const HomeBase = () => {
    return (
        <div>
            <div className="header">
                <Title />
                <Navbar />
            </div>
            <Outlet />
        </div>
    );
};

export default HomeBase;
