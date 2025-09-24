import React, { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  x: Number;
  y: Number;
}

const ExploreBtn = ({ children, x, y }: Props) => {
  const dynamicStyle = {
    translate: `calc(-50% + ${x}px) calc(-50% + ${y}px)`,
  };
  return (
    <div className="explore-btn" style={dynamicStyle}>
      {children}
    </div>
  );
};

export default ExploreBtn;
