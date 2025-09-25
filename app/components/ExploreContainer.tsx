import React, { useState, useEffect } from "react";
import ExploreBtn from "~/components/ExploreBtn";
import ExploreLine from "~/components/ExploreLine";
import rawTextFile from "../../stations-vic.txt";

interface Props {
  station: string;
}

const ExploreContainer = ({ station }: Props) => {
  const [fileContent, setFileContent] = useState("");

  useEffect(() => {
    fetch(rawTextFile)
      .then((response) => response.text())
      .then((text) => setFileContent(text))
      .catch((error) => console.error("Error reading file: ", error));
  });
  if (station == "southern-cross") {
    return (
      <div>
        <p>{fileContent}</p>
        <div className="explore-container">
          <ExploreBtn position="c">Southern Cross</ExploreBtn>
          <ExploreBtn position="t">North Melbourne</ExploreBtn>
          <ExploreBtn position="br">Flinders St</ExploreBtn>
          <ExploreBtn position="tr">Flagstaff</ExploreBtn>

          <ExploreLine position={"t"} />
          <ExploreLine position={"tr"} />
          <ExploreLine position={"br"} />
        </div>
      </div>
    );
  } else if (station == "north-melbourne") {
    return (
      <div>
        <p>{fileContent}</p>
        <div className="explore-container">
          <ExploreBtn position="c">North Melbourne</ExploreBtn>
          <ExploreBtn position="b">Southern Cross</ExploreBtn>
          <ExploreBtn position="l">South Kensington</ExploreBtn>
          <ExploreBtn position="tl">Kensington</ExploreBtn>
          <ExploreBtn position="t">Macaulay</ExploreBtn>
          <ExploreBtn position="br">Flagstaff</ExploreBtn>

          <ExploreLine position={"b"} />
          <ExploreLine position={"l"} />
          <ExploreLine position={"tl"} />
          <ExploreLine position={"t"} />
          <ExploreLine position={"br"} />
        </div>
      </div>
    );
  }
};

export default ExploreContainer;
