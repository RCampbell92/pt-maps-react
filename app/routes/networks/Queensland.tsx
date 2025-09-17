import React from "react";

interface Props {
  onClick: () => void;
}

const Queensland = ({ onClick }: Props) => {
  return (
    <div className="network">
      <h1>Queensland</h1>
      <div>
        <h2>Stats</h2>
        <p>Population: 5,618,800</p>
        <p>Number of stations</p>
        <p>Max frequency</p>
        <p>Pricing</p>
      </div>
      <img src="../network_maps/brisbane-train-map.png" onClick={onClick}></img>
    </div>
  );
};

export default Queensland;
