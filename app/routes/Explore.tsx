import React from "react";
import SubTitle from "~/components/SubTitle";

const Explore = () => {
  return (
    <div>
      <SubTitle>Explore</SubTitle>
      <div className="explore-container">
        <button className="explore-btn-focus explore-btn">
          Southern Cross
        </button>
        <button className="explore-btn-n explore-btn">North Melbourne</button>
        <button className="explore-btn-s explore-btn">Flinders St</button>
        <button className="explore-btn-e explore-btn">Flagstaff</button>
        <button className="explore-btn-w explore-btn">Kensington</button>

        <div className="explore-line"> </div>
      </div>
    </div>
  );
};

export default Explore;
