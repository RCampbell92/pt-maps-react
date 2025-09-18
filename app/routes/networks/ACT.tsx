import React from "react";

interface Props {
  onClick: () => void;
}

const ACT = ({ onClick }: Props) => {
  return (
    <div className="network">
      <h1>Australian Capital Territory</h1>
      <div>
        <h2>Stats</h2>
        <p>Population: 481,700</p>
        <p>Number of stations</p>
        <p>Max frequency</p>
        <p>Pricing</p>
      </div>
      <img src="/network_maps/canberra-lr-map.png" onClick={onClick}></img>
    </div>
  );
};

export default ACT;
