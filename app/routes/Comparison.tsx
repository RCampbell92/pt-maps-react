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
  const [active1, setActive1] = useState("null");
  const [active2, setActive2] = useState("null");

  const [select1, setSelect1] = useState("null");
  const [select2, setSelect2] = useState("null");

  let compare_string1 = "";
  let compare_string2 = "";

  const handleSelectChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect1(event.target?.value);
  };

  const handleSelectChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect2(event.target?.value);
  };

  return (
    <div className="page">
      <h1>Compare 2 Networks</h1>
      <p>Select 2 networks from the dropdowns and click "Compare".</p>

      <div className="comparison">
        <select id="compare-select1" onChange={handleSelectChange1}>
          <option value={"null"}>Choose network...</option>
          <option value={"act"}>Australian Capital Territory</option>
          <option value={"nsw"}>New South Wales</option>
          <option value={"nt"}>Northern Territory</option>
          <option value={"qld"}>Queensland</option>
          <option value={"sa"}>South Australia</option>
          <option value={"tas"}>Tasmania</option>
          <option value={"vic"}>Victoria</option>
          <option value={"wa"}>Western Australia</option>
        </select>
        <select id="compare-select2" onChange={handleSelectChange2}>
          <option value={"null"}>Choose network...</option>
          <option value={"act"}>Australian Capital Territory</option>
          <option value={"nsw"}>New South Wales</option>
          <option value={"nt"}>Northern Territory</option>
          <option value={"qld"}>Queensland</option>
          <option value={"sa"}>South Australia</option>
          <option value={"tas"}>Tasmania</option>
          <option value={"vic"}>Victoria</option>
          <option value={"wa"}>Western Australia</option>
        </select>
      </div>
      <button
        onClick={() => {
          setActive1(select1);
          setActive2(select2);
        }}
      >
        Compare
      </button>
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
