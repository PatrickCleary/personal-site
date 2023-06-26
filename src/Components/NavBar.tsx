import type { SetStateAction } from "react";
import React, { useContext } from "react";
import { WindowContext } from "../WindowContext";

interface NavBarProps {
  refs: React.RefObject<HTMLDivElement>[];
  setClicked: React.Dispatch<SetStateAction<number>>;
}

export const NavBar: React.FC<NavBarProps> = ({ refs, setClicked }) => {
  const navBarOptions = ["About", "Portfolio", "Contact"];
  const { mobile } = useContext(WindowContext);
  if (mobile)
    return (
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          display: "flex",
          zIndex: 49,
        }}
      >
        <div
          className="Nav-Bar"
          style={{
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
                key={index}
                className="Nav-Bar-Item"
                onClick={() => {
                  refs[index]?.current?.scrollIntoView();
                  setClicked(index);
                }}
              >
                <p style={{ textAlign: "center", fontSize: ".80rem" }}>
                  {option}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        display: "flex",
        zIndex: 49,
      }}
    >
      <div
        className="Nav-Bar"
        style={{
          display: "flex",
          flexDirection: mobile ? "row" : "column",
          justifyContent: mobile ? "center" : "end",
          backgroundColor: "#0a0d11e0",
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
              key={index}
              className="Nav-Bar-Item"
              onClick={() => {
                refs[index]?.current?.scrollIntoView();
                setClicked(index);
              }}
            >
              <p style={{ textAlign: "center", fontSize: ".80rem" }}>
                {option}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
