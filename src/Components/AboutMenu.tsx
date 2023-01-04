import React, { useContext, useState } from "react";
import { WindowContext } from "../WindowContext";
import { AboutMenuItems } from "./AboutMenuItems";

export const AboutMenu = () => {
  const [selected, setSelected] = useState(0);
  const { mobile } = useContext(WindowContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: mobile ? "column" : "row",
        paddingTop: '4em',
        alignSelf:'center',
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: mobile ? "column" : "row",
          padding: "0.5em",
          borderRadius: "1em",
          backgroundColor: "#ffffff30",
          columnGap: "0.5rem",
          rowGap: "0.5rem",
        }}
      >
        <AboutMenuItems
          index={0}
          name="Why I want to do UX design"
          selected={selected}
          setSelected={setSelected}
        />
        <AboutMenuItems
          index={1}
          name="Other Interests"
          selected={selected}
          setSelected={setSelected}
        />
        <AboutMenuItems
          index={2}
          name="Software Experience"
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
};
