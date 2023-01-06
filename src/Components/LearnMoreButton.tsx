import React, { useContext, useState } from "react";
import "./LearnMoreButton.css";
import { ReactComponent as ArrowTail } from "../Images/ArrowTail.svg";
import { WindowContext } from "../WindowContext";
import TransitMattersPage from "../TransitMattersPage";

interface LearnMoreButtonProps {
  setPage: Function;
}

const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({ setPage }) => {
  const { mobile } = useContext(WindowContext);
  return (
    <div
      className="Learn-More-Div"
      style={{ marginBottom: mobile ? "1rem" : "0px" }}
      onClick={() => {
        setPage();
        document.body.style.overflow = "hidden";
      }}
    >
      <p>Learn More</p>
      <ArrowTail />
    </div>
  );
};
export default LearnMoreButton;
