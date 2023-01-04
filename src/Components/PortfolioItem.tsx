import React from "react";
import { ReactComponent as TM } from "../Images/TM.svg";

interface PortfolioItemProps {
  index: number;
  selected: number;
  name: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  selected,
  index,
  name,
}) => {
  const current = selected === index;

  return (
    <div
      className={`Portfolio-Item ${
        current ? "Portfolio-Item-Selected" : "Portfolio-Item-Unselected"
      }`}
    >
      <TM width={"8rem"} height={"8rem"} className="TransitMattersLogo Icon" />
      
    </div>
  );
};

export default PortfolioItem;
