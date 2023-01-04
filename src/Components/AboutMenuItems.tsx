import React, { useContext } from "react";
import "../AboutMe.css";
import { WindowContext } from "../WindowContext";

interface AboutMenuItemsProps {
  name: string;
  index: number;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

export const AboutMenuItems = React.forwardRef<
  HTMLDivElement,
  AboutMenuItemsProps
>(({ name, index, selected, setSelected }, ref) => {
  const isSelected = selected === index;
  return (
    <div
      ref={ref}
      className="About-Menu-Item Invisible"
      onClick={() => setSelected(index)}
    >
      <p>{name}</p>
    </div>
  );
});
