import React, { useEffect, useState, useRef } from "react";
import ExploreContainer from "~/components/ExploreContainer";
import SubTitle from "~/components/SubTitle";
import { useParams } from "react-router";
import { useNavigate, type NavigateFunction } from "react-router";

const Explore = () => {
    const { currentStation } = useParams(); // Var for routes.ts
    const targetRef = useRef<HTMLDivElement>(null);

    const [fileContent, setFileContent] = useState("");
    const [stationInfo, setStationInfo] = useState("Southern-Cross");
    const [hasImg, setHasImg] = useState(false);
    const [stations, setStations] = useState([""]);
    const [jumpStation, setJumpStation] = useState("");
    const [timeToCBD, setTimeToCBD] = useState(3);
    const [update, setUpdate] = useState(0);

    let navigate = useNavigate();

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
        fetch("/stations-vic.sl?nocache=" + Date.now()) // get current version of stations.txt
            .then((response) => response.text()) // get text from file
            .then((text) => {
                setFileContent(text);
                let fileLines: string[] = text.split("\n");
                setStationInfo(searchStation(currentStation, fileLines)); // search for current station in file lines and return the line that starts with this station
                console.log("stationInfo: " + stationInfo);
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

    useEffect(() => {
        if (stationInfo.split(" ")[1]) {
            if (stationInfo.split(" ")[1].startsWith("time:")) {
                setTimeToCBD(parseInt(stationInfo.split(" ")[1].split(":")[1]));
            } else {
                setTimeToCBD(-1);
            }
        }
    }, [stationInfo]);

    useEffect(() => {
        fetch("/stations-vic.sl?nocache=" + Date.now()) // get current version of stations.txt
            .then((response) => response.text()) // get text from file
            .then((text) => {
                setFileContent(text);
                let fileLines: string[] = text.split("\n");
                let fileStations: string[] = [];
                // loop through all lines in file and get first word in every line
                fileLines.forEach((line) => {
                    let stationName = line.split(" ")[0].replace("-", " ");
                    if (stationName.trim() != "//" && stationName.trim() != "")
                        fileStations.push(stationName);
                });
                // set stations array to fileLines array
                setStations(fileStations);
            })
            .catch((error) => console.error("Error reading file: ", error));
    }, []);

    return (
        <div className="page explore" id="explore" key={currentStation}>
            <div>
                <SubTitle>Explore</SubTitle>
            </div>
            <div className="station-jump" ref={targetRef}>
                <input
                    type="text"
                    list="stations-list"
                    placeholder="Jump to station..."
                    value={jumpStation}
                    onChange={(e) => {
                        setJumpStation(e.target.value);
                    }}
                ></input>
                <datalist id="stations-list">
                    {stations.map((station) => (
                        <option value={station}></option>
                    ))}
                </datalist>
                <button
                    onClick={() => {
                        console.log(jumpStation);
                        navigate("/explore/" + jumpStation.replace(" ", "-"));
                    }}
                >
                    Go
                </button>
            </div>

            <div className="explore-outer-container">
                <div className="explore-station-info">
                    <h1>{stationInfo.split(" ")[0].replace("-", " ")}</h1>
                    {hasImg && (
                        <img
                            src={`/stations/images/vic/${currentStation?.toLowerCase()}.jpg`}
                        ></img>
                    )}
                    {timeToCBD >= 0 && (
                        <p>
                            Time to Southern Cross (by 8:30am): {timeToCBD} min
                        </p>
                    )}
                </div>
                <ExploreContainer stationInfo={stationInfo} />
            </div>
        </div>
    );
};

export default Explore;
