import React, { useContext, useState } from "react";
import "./LearnMoreButton.css";
import { ReactComponent as ArrowTail } from "../Images/ArrowTail.svg";
import { WindowContext } from "../WindowContext";

interface LearnMoreButtonProps {
  setPage: Function;
}

const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({ setPage }) => {
  const { mobile } = useContext(WindowContext);
  return (
    // Need this div to prevent .Learn-More-Div from expanding to 100% width.
    <div style={{ display: "flex" }}>
      <div
        className={`Learn-More-Div ${
          mobile ? "Learn-More-Div-Mobile" : "Learn-More-Div-DT"
        }`}
        onClick={() => {
          setPage();
          document.body.style.overflow = "hidden";
        }}
      >
        {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: "1rem",
          alignItems: "center",
          padding:'1rem',
          borderStyle:'solid',
          borderWidth:1,
          borderRadius:'16px',
        }}
      > */}
        <p>Learn More</p>
        <ArrowTail width={mobile ? "1.2rem" : "2rem"} />
        {/* </div> */}
      </div>
    </div>
  );
};
export default LearnMoreButton;
