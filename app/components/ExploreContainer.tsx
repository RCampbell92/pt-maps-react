import React, { useState, useEffect, useMemo, useLayoutEffect } from "react";
import { createRoot } from "react-dom/client";
import ExploreBtn from "~/components/ExploreBtn";
import ExploreLine from "~/components/ExploreLine";
import App from "~/root";

interface Props {
  stationInfo: string;
  onClick: () => void;
}

const ExploreContainer = ({ stationInfo, onClick }: Props) => {
  const [connectedStations, setConnectedStations] = useState([]);

  const populateStations = (str: string) => {
    console.log("Populating...");
    const data = [];
    const stations = str.split(" ");
    for (let i = 1; i < stations.length; i++) {
      data.push({
        id: i,
        name: stations[i].split(":")[0].replace("-", " "),
        dir: stations[i].split(":")[1].trim(),
      });
    }
    console.log(data[data.length - 1]);
    return data;
  };

  const data = populateStations(stationInfo);

  return (
    <div>
      <div className="explore-container">
        <ExploreBtn onClick={onClick} position="c">
          {stationInfo.split(" ")[0].replace("-", " ")}
        </ExploreBtn>
        {data.map((item, index) => (
          <div key={index}>
            <ExploreBtn onClick={onClick} position={item.dir}>
              {item.name}
            </ExploreBtn>
            <ExploreLine position={item.dir} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreContainer;
