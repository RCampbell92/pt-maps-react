import React, { useEffect, useState, type ReactNode } from "react";

interface Props {
  position: string;
  col: string;
}

const ExploreLine = ({ position, col }: Props) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rot, setRot] = useState(0);
  const [colour, setColour] = useState("var(--primary-colour)");

  const setPosition = () => {
    if (position == "tl") {
      setX(25);
      setY(25);
      setRot(-45);
    } else if (position == "t") {
      setX(50);
      setY(25);
      setRot(0);
    } else if (position == "tr") {
      setX(75);
      setY(25);
      setRot(45);
    } else if (position == "l") {
      setX(25);
      setY(50);
      setRot(90);
    } else if (position == "r") {
      setX(75);
      setY(50);
      setRot(90);
    } else if (position == "bl") {
      setX(25);
      setY(75);
      setRot(45);
    } else if (position == "b") {
      setX(50);
      setY(75);
      setRot(0);
    } else if (position == "br") {
      setX(75);
      setY(75);
      setRot(-45);
    }
  };

  const setDisplay = () => {
    if (col == "p") {
      setColour("var(--primary-colour)");
    }
    if (col == "y") {
      setColour("var(--secondary-colour)");
    }
  };

  useEffect(() => {
    setPosition;
    setDisplay;
  });

  const dynamicStyle = {
    backgroundColor: colour,
    left: `calc(${x}%)`,
    top: `calc(${y}%)`,
    translate: `calc(-50%) calc(-50%)`,
    transform: `rotate(${rot}deg)`,
  };

  return <div className="explore-line" style={dynamicStyle}></div>;
};

export default ExploreLine;
