import React, { useEffect, useState, useRef } from "react";
import ExploreContainer from "~/components/ExploreContainer";
import SubTitle from "~/components/SubTitle";
import rawTextFile from "../../stations-vic.txt";
import { useParams } from "react-router";

const Explore = () => {
  const { stationID } = useParams();
  const targetRef = useRef<HTMLDivElement>(null);

  const [fileContent, setFileContent] = useState("");
  const [station, setStation] = useState("Southern-Cross");

  const searchStation = (searchTerm: string | undefined, lines: string[]) => {
    let stationData = "";
    if (searchTerm) {
      lines.forEach((line) => {
        if (line.trim().startsWith(searchTerm)) {
          console.log("Line found: " + searchTerm);
          stationData = line;
        }
      });
    }
    console.log("station data: " + stationData);

    return stationData;
  };

  useEffect(() => {
    fetch("/stations-vic.txt?nocache=" + Date.now()) // get current version of stations.txt
      .then((response) => response.text()) // get text from file
      .then((text) => {
        setFileContent(text);
        let fileLines: string[] = text.split("\n");
        setStation(searchStation(stationID, fileLines)); // search for current station in file lines and return the line that starts with this station
        console.log(
          stationID +
            ", " +
            fileLines[1] +
            ", " +
            searchStation(stationID, fileLines)
        );
      })
      .catch((error) => console.error("Error reading file: ", error));
  }, [stationID]);

  useEffect(() => {
    console.log(stationID);
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [stationID]);

  return (
    <div id="explore" key={stationID}>
      <div ref={targetRef}>
        <SubTitle>Explore</SubTitle>
      </div>
      <ExploreContainer stationInfo={station} />
    </div>
  );
};

export default Explore;
