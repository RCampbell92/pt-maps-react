import React from "react";

interface Props {
  onClick: () => void;
}

const NorthernTerritory = ({ onClick }: Props) => {
  return (
    <div className="network">
      <h1>Northern Territory</h1>
      <div>
        <h2>Stats</h2>
        <p>Population: 262,200</p>
        <p>Number of stations</p>
        <p>Max frequency</p>
        <p>Pricing</p>
      </div>
      <img src="../network_maps/nsw-train-map.png" onClick={onClick}></img>
    </div>
  );
};

export default NorthernTerritory;
