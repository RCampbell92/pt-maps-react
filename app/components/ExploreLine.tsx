import React, { useEffect, useState, type ReactNode } from "react";

interface Props {
  position: string;
  col: string;
  lineNo: number;
}

const ExploreLine = ({ position, col, lineNo }: Props) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ox, setOx] = useState(0);
  const [oy, setOy] = useState(0);
  const [rot, setRot] = useState(0);
  const [height, setHeight] = useState(60);
  const [colour, setColour] = useState("var(--primary-colour)");

  const setPosition = () => {
    if (position == "tl") {
      setX(25 + ox);
      setY(25 - oy);
      setRot(-45);
      setHeight(69);
    } else if (position == "t") {
      setX(50 + ox * 1.5);
      setY(25);
      setRot(0);
    } else if (position == "tr") {
      setX(75 + ox);
      setY(25 + oy);
      setRot(45);
      setHeight(69);
    } else if (position == "l") {
      setX(25);
      setY(50 - oy * 1.5);
      setRot(90);
    } else if (position == "r") {
      setX(75);
      setY(50 + oy * 1.5);
      setRot(90);
    } else if (position == "bl") {
      setX(25 - ox);
      setY(75 - oy);
      setRot(45);
      setHeight(69);
    } else if (position == "b") {
      setX(50 - ox * 1.5);
      setY(75);
      setRot(0);
    } else if (position == "br") {
      setX(75 - ox);
      setY(75 + oy);
      setRot(-45);
      setHeight(69);
    }
  };

  const setOffset = () => {
    if (lineNo == 1) {
      setOx(-1);
      setOy(-1);
    } else if (lineNo == 2) {
      setOx(1);
      setOy(1);
    } else if (lineNo == 3) {
      setOx(-2);
      setOy(-2);
    } else if (lineNo == 4) {
      setOx(2);
      setOy(2);
    } else if (lineNo == 5) {
      setOx(-3);
      setOy(-3);
    } else if (lineNo == 6) {
      setOx(3);
      setOy(3);
    } else if (lineNo == 7) {
      setOx(-4);
      setOy(-4);
    } else if (lineNo == 8) {
      setOx(4);
      setOy(4);
    } else if (lineNo == 9) {
      setOx(-5);
      setOy(-5);
    } else if (lineNo == 10) {
      setOx(5);
      setOy(5);
    }
  };

  const setDisplay = () => {
    if (col == "v") {
      setColour("var(--primary-colour)");
    } else if (col == "y") {
      setColour("var(--secondary-colour)");
    } else if (col == "g") {
      setColour("green");
    } else if (col == "r") {
      setColour("red");
    } else if (col == "b") {
      setColour("blue");
    } else if (col == "c") {
      setColour("cyan");
    } else if (col == "p") {
      setColour("pink");
    }
  };

  useEffect(() => {
    setOffset();
    setPosition();
    setDisplay();
  });

  const dynamicStyle = {
    backgroundColor: colour,
    left: `calc(${x}%)`,
    top: `calc(${y}%)`,
    height: `calc(${height}%)`,
    translate: `calc(-50%) calc(-50%)`,
    transform: `rotate(${rot}deg)`,
  };

  return <div className="explore-line" style={dynamicStyle}></div>;
};

export default ExploreLine;
