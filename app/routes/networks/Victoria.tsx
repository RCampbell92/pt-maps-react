import React from "react";

interface Props {
  onClick: () => void;
}

const Victoria = ({ onClick }: Props) => {
  return (
    <div className="network">
      <h1>Victoria</h1>
      <div>
        <h2>Stats</h2>
        <p>Population: 7,011,100</p>
        <p>Number of stations</p>
        <p>Max frequency</p>
        <p>Pricing</p>
      </div>
      <img src="../network_maps/vic-train-map.png" onClick={onClick}></img>
    </div>
  );
};

export default Victoria;
