import React, {
  useState,
  type ReactNode,
  useEffect,
  type MouseEventHandler,
} from "react";
import { useNavigate, type NavigateFunction } from "react-router";

interface Props {
  children: ReactNode;
  position: string;
  className?: string;
}

const ExploreBtn = ({ children, position, className }: Props) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [update, setUpdate] = useState(0);

  let navigate = useNavigate();

  const setPosition = () => {
    console.log(children?.toLocaleString() + " set");
    if (position == "tl") {
      setX(0);
      setY(0);
    } else if (position == "t") {
      setX(50);
      setY(0);
    } else if (position == "tr") {
      setX(100);
      setY(0);
    } else if (position == "l") {
      setX(0);
      setY(50);
    } else if (position == "c") {
      setX(50);
      setY(50);
    } else if (position == "r") {
      setX(100);
      setY(50);
    } else if (position == "bl") {
      setX(0);
      setY(100);
    } else if (position == "b") {
      setX(50);
      setY(100);
    } else if (position == "br") {
      setX(100);
      setY(100);
    }
  };

  useEffect(() => setPosition);

  const dynamicStyle = {
    left: `calc(${x}%)`,
    top: `calc(${y}%)`,
    translate: `calc(-50%) calc(-50%)`,
  };
  return (
    <div
      onClick={() => {
        setUpdate(update + 1);
        navigate(
          "/home/explore/" + children?.toLocaleString().replace(" ", "-")
        );
      }}
      className={"explore-btn " + className}
      style={dynamicStyle}
    >
      {children}
    </div>
  );
};

export default ExploreBtn;
