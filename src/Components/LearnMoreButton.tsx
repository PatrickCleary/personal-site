import React, { useContext } from "react";
import "./LearnMoreButton.css";
import { ReactComponent as ArrowTail } from "../Images/ArrowTail.svg";
import { WindowContext } from "../WindowContext";

interface LearnMoreButtonProps {
  setPage: (pageName?: string) => void;
}

export const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({
  setPage,
}) => {
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
        <p>Learn More</p>
        <ArrowTail width={mobile ? "1.2rem" : "2rem"} />
      </div>
    </div>
  );
};
