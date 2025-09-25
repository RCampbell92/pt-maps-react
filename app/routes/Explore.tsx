import React from "react";
import ExploreContainer from "~/components/ExploreContainer";
import SubTitle from "~/components/SubTitle";

const Explore = () => {
  return (
    <div>
      <SubTitle>Explore</SubTitle>
      <ExploreContainer station="north-melbourne" />
    </div>
  );
};

export default Explore;
