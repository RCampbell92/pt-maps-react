import React from "react";

interface Props {
  onClick: () => void;
  src: string | undefined;
}

const ImgEnlarge = ({ onClick, src }: Props) => {
  return (
    <div
      className="img-enlarge-container"
      id="img-enlarge-container"
      onClick={onClick}
    >
      <img src={src} className="img-enlarge"></img>
    </div>
  );
};

export default ImgEnlarge;
