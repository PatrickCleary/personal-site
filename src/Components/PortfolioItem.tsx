import React from "react";
import "./PortfolioItem.css";
import { ReactComponent as TM } from "../Images/TM.svg";

interface PortfolioItemProps {
  index: number;
  selected: { current: number; previous: number };
  name: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  index,
  selected,
  name,
}) => {
  let animationSelection = "";
  if (selected.current === index) {
    if (selected.previous < selected.current) {
      console.log(index.toString(), "SIFR");
      animationSelection = "Slide-In-From-Right";
    } else {
      console.log(index.toString(), "SIFL");

      animationSelection = "Slide-In-From-Left";
    }
  } else if (selected.previous === index) {
    if (selected.previous < selected.current) {
      console.log(index.toString(), "SOTL");

      animationSelection = "Slide-Out-To-Left";
    } else {
      console.log(index.toString(), "SOTR");

      animationSelection = "Slide-Out-To-Right";
    }
  }

  return (
    <div
      key={name}
      className={`Portfolio-Item ${animationSelection} Invisible`}
    >
      <div className="" >
        <TM
          width={"8rem"}
          height={"8rem"}
          className="TransitMattersLogo Icon"
        />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
