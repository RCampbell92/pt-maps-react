import React from "react";

interface Props {
  onClick: () => void;
}

const ImgEnlarge = ({ onClick }: Props) => {
  return (
    <div
      className="img-enlarge-container"
      id="img-enlarge-container"
      onClick={onClick}
    >
      <img
        src="../network_maps/vic-train-map.png"
        className="img-enlarge"
      ></img>
    </div>
  );
};

export default ImgEnlarge;
