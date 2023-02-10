import React, { SetStateAction, useContext } from "react";
import { WindowContext } from "../WindowContext";

interface NavBarProps {
  refs: React.RefObject<HTMLDivElement>[];
  setClicked: React.Dispatch<SetStateAction<number>>;
}

export const NavBar: React.FC<NavBarProps> = ({ refs, setClicked }) => {
  const navBarOptions = ["About", "Portfolio", "Contact"];
  const { mobile } = useContext(WindowContext);
  return (
    <div
      className="Nav-Bar"
      style={{
        position: "fixed",
        zIndex: 49,
        top: "0px",
        right: "0px",
        display: "flex",
        flexDirection: mobile ? "row" : "column",
        justifyContent: mobile ? "center" : "end",
        backgroundColor: "#0a0d11e0",
        paddingLeft: mobile ? "1rem" : 0,
        paddingRight: mobile ? "1rem" : 0,
        paddingTop: mobile ? ".75rem" : 0,
        paddingBottom: mobile ? ".75rem" : 0,
        borderRadius: ".5rem",
        cursor: "pointer",
        userSelect: "none",
        columnGap: "1rem",
        rowGap: "1rem",
        marginRight: mobile ? "" : "2rem",
        marginTop: mobile ? ".5rem" : "2rem",
      }}
    >
      {navBarOptions.map((option, index) => {
        return (
          <div
            className="Nav-Bar-Item"
            onClick={() => {
              refs[index]?.current?.scrollIntoView();
              setClicked(index);
            }}
          >
            <p style={{ textAlign: "center" }}>{option}</p>
          </div>
        );
      })}
    </div>
  );
};
