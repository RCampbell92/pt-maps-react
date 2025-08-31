import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Title from "~/components/Title";
import Navbar from "~/components/Navbar";
import type { Route as Route1 } from "../+types/root";
import Comparison from "./Comparison";
import Explore from "./Explore";
import NotFound from "./NotFound";

export function meta({}: Route1.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Title />
      <Navbar />
      <Outlet />
    </div>
  );
}
