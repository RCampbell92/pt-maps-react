import React, { useState, useEffect, useMemo, useLayoutEffect } from "react";
import { createRoot } from "react-dom/client";
import ExploreBtn from "~/components/ExploreBtn";
import ExploreLine from "~/components/ExploreLine";
import App from "~/root";

interface Props {
  stationInfo: string;
}

const ExploreContainer = ({ stationInfo }: Props) => {
  // array of connected stations
  const [connectedStations, setConnectedStations] = useState([]);

  // Generate connected station data from line of text file, received from stationInfo prop
  const populateStations = (str: string) => {
    const data = [];
    const stations = str.split(" ");

    for (let i = 1; i < stations.length; i++) {
      // loop through all stations except current one
      let stationButtonString = stations[i].trim(); // trim the station name for searchability and readability
      if (stationButtonString != "") {
        // check if station name is an actual name
        let stationButton = stationButtonString.split(":"); // create var for station button data
        console.log(stationButton[2]); //
        if (stationButton.length == 3) {
          // if there's 3 vars (if there's an optional colour)
          data.push({
            // add the data to the data array
            id: i,
            name: stationButton[0].replace("-", " "),
            dir: stationButton[1].trim(),
            colours: stationButton[2].split(","),
          });
        } else if (stationButton.length == 2) {
          // if there's just 2 vars, add data with default colour
          data.push({
            id: i,
            name: stationButton[0].replace("-", " "),
            dir: stationButton[1].trim(),
            colours: ["v"],
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
            {item.colours.map((colour) => (
              <ExploreLine
                position={item.dir}
                col={colour}
                lineNo={item.colours.indexOf(colour)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreContainer;
