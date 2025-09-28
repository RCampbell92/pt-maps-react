import React, { useEffect, useState } from "react";
import ExploreContainer from "~/components/ExploreContainer";
import SubTitle from "~/components/SubTitle";
import rawTextFile from "../../stations-vic.txt";

const Explore = () => {
  const [fileContent, setFileContent] = useState("");
  const [station, setStation] = useState("southern-cross");
  const [stationID, setStationID] = useState(5);

  const updateStation = () => {
    setStationID(stationID + 1);
    let fileLines: string[] = fileContent.split("\n");
    setStation(fileLines[stationID]); // Set station to first line, first station
    console.log(stationID);
  };

  useEffect(() => {
    fetch("/stations-vic.txt?nocache=" + Date.now())
      .then((response) => response.text())
      .then((text) => {
        setFileContent(text);
        let fileLines: string[] = text.split("\n");
        setStation(fileLines[stationID]); // Set station to first line, first station
        console.log(stationID);
      })
      .catch((error) => console.error("Error reading file: ", error));
  }, []);

  return (
    <div id="explore">
      <SubTitle>Explore</SubTitle>
      <ExploreContainer onClick={() => updateStation} stationInfo={station} />
    </div>
  );
};

export default Explore;
