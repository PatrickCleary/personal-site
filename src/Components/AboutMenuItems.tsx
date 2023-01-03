import React, { useContext } from "react";
import "../AboutMe.css";
import { WindowContext } from "../WindowContext";

interface AboutMenuItemsProps {
  name: string;
  index: number;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

export const AboutMenuItems: React.FC<AboutMenuItemsProps> = ({
  name,
  index,
  selected,
  setSelected,
}) => {
  const isSelected = selected === index;
  return (
    <div
      className="About-Menu-Item"
      onClick={() => setSelected(index)}
    >
      <p>{name}</p>
    </div>
  );
};
