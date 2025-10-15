import React, { useState } from "react";
import { Outlet } from "react-router";
import NullNetwork from "./networks/NullNetwork";
import Victoria from "./networks/Victoria";
import ACT from "./networks/ACT";
import NorthernTerritory from "./networks/NorthernTerritory";
import NSW from "./networks/NSW";
import Queensland from "./networks/Queensland";
import SouthAustralia from "./networks/SouthAustralia";
import Tasmania from "./networks/Tasmania";
import WesternAustralia from "./networks/WesternAustralia";

const Browse = () => {
  const [active, setActive] = useState("null");

  return (
    <div className="page">
      <h1>Browse</h1>
      <h3>Select from multiple networks across Australia</h3>
      <button onClick={() => setActive("act")}>ACT</button>
      <button onClick={() => setActive("nt")}>Northern Territory</button>
      <button onClick={() => setActive("nsw")}>NSW</button>
      <button onClick={() => setActive("qld")}>Queensland</button>
      <button onClick={() => setActive("sa")}>South Australia</button>
      <button onClick={() => setActive("tas")}>Tasmania</button>
      <button onClick={() => setActive("vic")}>Victoria</button>
      <button onClick={() => setActive("wa")}>Western Australia</button>
      <br></br>
      <div className="page">
        {active === "null" && <NullNetwork />}
        {active === "act" && <ACT onClick={() => console.log("vic")} />}
        {active === "nt" && (
          <NorthernTerritory onClick={() => console.log("vic")} />
        )}
        {active === "nsw" && <NSW onClick={() => console.log("vic")} />}
        {active === "qld" && <Queensland onClick={() => console.log("vic")} />}
        {active === "sa" && (
          <SouthAustralia onClick={() => console.log("vic")} />
        )}
        {active === "tas" && <Tasmania onClick={() => console.log("vic")} />}
        {active === "vic" && <Victoria onClick={() => console.log("vic")} />}
        {active === "wa" && (
          <WesternAustralia onClick={() => console.log("vic")} />
        )}
      </div>
    </div>
  );
};

export default Browse;
