import React, { useEffect, useState, useRef } from "react";
import ExploreContainer from "~/components/ExploreContainer";
import SubTitle from "~/components/SubTitle";
import rawTextFile from "../../stations-vic.txt";
import { useParams } from "react-router";

const Explore = () => {
  const { currentStation } = useParams(); // Var for routes.ts
  const targetRef = useRef<HTMLDivElement>(null);

  const [fileContent, setFileContent] = useState("");
  const [stationInfo, setStationInfo] = useState("Southern-Cross");
  const [hasImg, setHasImg] = useState(false);

  const searchStation = (searchTerm: string | undefined, lines: string[]) => {
    let stationData = "";
    if (searchTerm) {
      lines.forEach((line) => {
        if (!line.trim().startsWith("//")) {
          if (line.trim().split(" ")[0] == searchTerm) {
            console.log("Line found: " + searchTerm);
            stationData = line;
          }
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
        setStationInfo(searchStation(currentStation, fileLines)); // search for current station in file lines and return the line that starts with this station
        console.log(
          currentStation +
            ", " +
            fileLines[1] +
            ", " +
            searchStation(currentStation, fileLines)
        );
      })
      .catch((error) => console.error("Error reading file: ", error));

    // Auto scroll to map
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "auto" });
    }

    // Check if there's an image file
    async function checkImg() {
      try {
        const response = await fetch(
          `/stations/images/vic/${currentStation?.toLowerCase()}.jpg`,
          { method: "HEAD" }
        );
        if (response.ok) {
          setHasImg(true);
        } else {
          setHasImg(false);
        }
      } catch (error) {
        console.error("Error checking image existence", error);
        setHasImg(false);
      }
    }

    checkImg();
  }, [currentStation]);

  return (
    <div id="explore" key={currentStation}>
      <div ref={targetRef}>
        <SubTitle>Explore</SubTitle>
      </div>
      <div className="explore-outer-container">
        <div className="explore-station-info">
          <h1>{stationInfo.split(" ")[0].replace("-", " ")}</h1>
          {hasImg && (
            <img
              src={`/stations/images/vic/${currentStation?.toLowerCase()}.jpg`}
            ></img>
          )}
        </div>
        <ExploreContainer stationInfo={stationInfo} />
      </div>
    </div>
  );
};

export default Explore;
