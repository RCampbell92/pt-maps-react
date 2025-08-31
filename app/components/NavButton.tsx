import React, { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const NavButton = ({ children, onClick }: Props) => {
  return (
    <div className="nav-button" onClick={onClick}>
      {children}
    </div>
  );
};

export default NavButton;
