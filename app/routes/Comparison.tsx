import React from "react";
import Victoria from "./networks/Victoria";
import NSW from "./networks/NSW";
import NetworkSelect from "~/components/NetworkSelect";
import Queensland from "./networks/Queensland";
import SouthAustralia from "./networks/SouthAustralia";
import ACT from "./networks/ACT";
import NorthernTerritory from "./networks/NorthernTerritory";
import Tasmania from "./networks/Tasmania";
import WesternAustralia from "./networks/WesternAustralia";
import { Route, Routes } from "react-router";
import { useState } from "react";

const Comparison = () => {
  const [active1, setActive1] = useState("sa");
  const [active2, setActive2] = useState("vic");

  return (
    <div className="page">
      <h1>Compare 2 Networks</h1>
      <p>Select 2 networks from the dropdowns and click "Compare".</p>

      <form>
        <div className="comparison">
          <select>
            <option>Choose network...</option>
            <option>Australian Capital Territory</option>
            <option>New South Wales</option>
            <option>Northern Territory</option>
            <option>Queensland</option>
            <option>South Australia</option>
            <option>Tasmania</option>
            <option>Victoria</option>
            <option>Western Australia</option>
          </select>
          <select>
            <option>Choose network...</option>
            <option>Australian Capital Territory</option>
            <option>New South Wales</option>
            <option>Northern Territory</option>
            <option>Queensland</option>
            <option>South Australia</option>
            <option>Tasmania</option>
            <option>Victoria</option>
            <option>Western Australia</option>
          </select>
        </div>
        <button onClick={() => setActive1("wa")}>Compare</button>
      </form>
      <div className="comparison">
        {active1 === "vic" && <Victoria />}
        {active1 === "nsw" && <NSW />}
        {active1 === "act" && <ACT />}
        {active1 === "nt" && <NorthernTerritory />}
        {active1 === "qld" && <Queensland />}
        {active1 === "sa" && <SouthAustralia />}
        {active1 === "tas" && <Tasmania />}
        {active1 === "wa" && <WesternAustralia />}

        {active2 === "vic" && <Victoria />}
        {active2 === "nsw" && <NSW />}
        {active2 === "act" && <ACT />}
        {active2 === "nt" && <NorthernTerritory />}
        {active2 === "qld" && <Queensland />}
        {active2 === "sa" && <SouthAustralia />}
        {active2 === "tas" && <Tasmania />}
        {active2 === "wa" && <WesternAustralia />}
      </div>
    </div>
  );
};

export default Comparison;
