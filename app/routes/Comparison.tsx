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
import NullNetwork from "./networks/NullNetwork";
import ImgEnlarge from "~/components/ImgEnlarge";

const Comparison = () => {
  const [active1, setActive1] = useState("null");
  const [active2, setActive2] = useState("null");

  const [select1, setSelect1] = useState("null");
  const [select2, setSelect2] = useState("null");

  const [hoveredSrc, setHoveredSrc] = useState<string | undefined>(undefined);

  // Create handler for hovering over img elements
  const handleClickImage = (e: React.MouseEvent<HTMLImageElement>) => {
    setHoveredSrc(e.currentTarget.src); // store the src path
    console.log(e.target);
  };

  const handleSelectChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect1(event.target?.value);
  };

  const handleSelectChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect2(event.target?.value);
  };

  const [showImg, setShowImg] = useState(true);

  const handleShowImage = () => {
    setShowImg(false);
    console.log(hoveredSrc);
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
        {active1 === "null" && <NullNetwork />}
        {active1 === "vic" && <Victoria onClick={() => setShowImg(true)} />}
        {active1 === "nsw" && <NSW onClick={() => handleClickImage} />}
        {active1 === "act" && <ACT onClick={() => setShowImg(true)} />}
        {active1 === "nt" && (
          <NorthernTerritory
            onClick={() => handleClickImage}
            onMouseMove={() => handleClickImage}
          />
        )}
        {active1 === "qld" && <Queensland onClick={() => setShowImg(true)} />}
        {active1 === "sa" && (
          <SouthAustralia onClick={() => setShowImg(true)} />
        )}
        {active1 === "tas" && <Tasmania onClick={() => setShowImg(true)} />}
        {active1 === "wa" && (
          <WesternAustralia onClick={() => setShowImg(true)} />
        )}

        <div className="divider"></div>

        {active2 === "null" && <NullNetwork />}
        {active2 === "vic" && <Victoria onClick={() => setShowImg(true)} />}
        {active2 === "nsw" && <NSW onClick={handleClickImage} />}
        {active2 === "act" && <ACT onClick={() => setShowImg(true)} />}
        {active2 === "nt" && (
          <NorthernTerritory
            onClick={() => handleClickImage}
            onMouseMove={() => handleClickImage}
          />
        )}
        {active2 === "qld" && <Queensland onClick={() => setShowImg(true)} />}
        {active2 === "sa" && (
          <SouthAustralia onClick={() => setShowImg(true)} />
        )}
        {active2 === "tas" && <Tasmania onClick={() => setShowImg(true)} />}
        {active2 === "wa" && (
          <WesternAustralia onClick={() => setShowImg(true)} />
        )}
      </div>

      {showImg && <ImgEnlarge onClick={handleShowImage} src={hoveredSrc} />}
    </div>
  );
};

export default Comparison;
