import React from "react";
import Victoria from "./networks/Victoria";
import NSW from "./networks/NSW";
import NetworkSelect from "~/components/NetworkSelect";

const Comparison = () => {
  return (
    <div className="page">
      <h1>Compare 2 Networks</h1>
      <p>Select 2 networks from the dropdowns and click "Compare".</p>
      <div className="comparison">
        <NetworkSelect />
        <NetworkSelect />
      </div>
      <button>Compare</button>
      <div className="comparison">
        <Victoria />
        <NSW />
      </div>
    </div>
  );
};

export default Comparison;
