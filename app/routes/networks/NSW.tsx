import React from "react";

interface Props {
  onClick: (e: React.MouseEvent<HTMLImageElement>) => void;
}

const NSW = ({ onClick }: Props) => {
  return (
    <div className="network">
      <h1>New South Wales</h1>
      <div>
        <h2>Stats</h2>
        <p>Population: 8,545,000</p>
        <p>Number of stations</p>
        <p>Max frequency</p>
        <p>Pricing</p>
      </div>
      <img src="../network_maps/nsw-train-map.png" onClick={onClick}></img>
    </div>
  );
};

export default NSW;
