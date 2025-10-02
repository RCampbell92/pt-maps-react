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
      let stationButtonString = stations[i].trim();
      if (stationButtonString != "") {
        let stationButton = stationButtonString.split(":");
        if (stationButton.length == 3) {
          data.push({
            id: i,
            name: stationButton[0].replace("-", " "),
            dir: stationButton[1].trim(),
            colour: stationButton[2],
          });
        } else if (stationButton.length == 2) {
          data.push({
            id: i,
            name: stationButton[0].replace("-", " "),
            dir: stationButton[1].trim(),
            colour: "p",
          });
        }
      }
    }
    return data;
  };

  const data = populateStations(stationInfo);

  return (
    <div>
      <div id="explore-container" className="explore-container">
        <ExploreBtn className="explore-btn-focus" position="c">
          {stationInfo.split(" ")[0].replace("-", " ")}
        </ExploreBtn>
        {data.map((item) => (
          <div key={item.name}>
            <ExploreBtn position={item.dir}>{item.name}</ExploreBtn>
            <ExploreLine position={item.dir} col={item.colour} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreContainer;
