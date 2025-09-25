import React from "react";
import ExploreBtn from "~/components/ExploreBtn";
import SubTitle from "~/components/SubTitle";

const Explore = () => {
  return (
    <div>
      <SubTitle>Explore</SubTitle>
      <div className="explore-container">
        <ExploreBtn position="c">Southern Cross</ExploreBtn>
        <ExploreBtn position="tl">Kensington</ExploreBtn>
        <ExploreBtn position="t">North Melbourne</ExploreBtn>
        <ExploreBtn position="br">Flinders St</ExploreBtn>
        <ExploreBtn position="tr">Flagstaff</ExploreBtn>

        <div className="explore-line"></div>
      </div>
    </div>
  );
};

export default Explore;
