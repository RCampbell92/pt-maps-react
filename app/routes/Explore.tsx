import React from "react";
import ExploreBtn from "~/components/ExploreBtn";
import SubTitle from "~/components/SubTitle";

const Explore = () => {
  return (
    <div>
      <SubTitle>Explore</SubTitle>
      <div className="explore-container">
        <button className="explore-btn-focus explore-btn">
          Southern Cross
        </button>
        <ExploreBtn x={200} y={200}>
          North Melbourne
        </ExploreBtn>
        <button className="explore-btn-s explore-btn">Flinders St</button>
        <button className="explore-btn-e explore-btn">Flagstaff</button>
        <button className="explore-btn-w explore-btn">Kensington</button>

        <div className="explore-line"></div>
      </div>
    </div>
  );
};

export default Explore;
