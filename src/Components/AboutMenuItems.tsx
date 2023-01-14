import React, { useContext, useState } from "react";
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
  const { mobile } = useContext(WindowContext);
  const [unfinished, setUnfinished] = useState(false);
  const isSelected = selected === index;
  return (
    <div
      ref={ref}
      className="About-Menu-Item Invisible"
      onClick={() => {
        setSelected(index);
        setUnfinished(true);
      }}
    >
      <p style={{ fontSize: mobile ? ".8rem" : "1.6rem", textAlign: "center" }}>
        {unfinished ? 'Work In Progress :(' : name}
      </p>
    </div>
  );
});
