import React, { useState, useEffect, useMemo, useLayoutEffect } from "react";
import { createRoot } from "react-dom/client";
import ExploreBtn from "~/components/ExploreBtn";
import ExploreLine from "~/components/ExploreLine";
import App from "~/root";

interface Props {
  stationInfo: string;
}

const ExploreContainer = ({ stationInfo }: Props) => {
  const [connectedStations, setConnectedStations] = useState([]);

  const populateStations = (str: string) => {
    const data = [];
    const stations = str.split(" ");
    for (let i = 1; i < stations.length; i++) {
      data.push({
        id: i,
        name: stations[i].split(":")[0].replace("-", " "),
        dir: stations[i].split(":")[1].trim(),
      });
    }
    return data;
  };

  const data = populateStations(stationInfo);

  return (
    <div>
      <div id="explore-container" className="explore-container">
        <ExploreBtn position="c">
          {stationInfo.split(" ")[0].replace("-", " ")}
        </ExploreBtn>
        {data.map((item) => (
          <div key={item.name}>
            <ExploreBtn position={item.dir}>{item.name}</ExploreBtn>
            <ExploreLine position={item.dir} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreContainer;
