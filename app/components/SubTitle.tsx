import React, { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SubTitle = ({ children }: Props) => {
  return <div className="subtitle">{children}</div>;
};

export default SubTitle;
