import React, { useContext } from "react";
import "./LearnMoreButton.css";
import { ReactComponent as ArrowTail } from "../Images/ArrowTail.svg";
import { WindowContext } from "../WindowContext";

const LearnMoreButton = () => {
  const { mobile } = useContext(WindowContext);
  return (
    <div
      className="Learn-More-Div"
      style={{ marginBottom: mobile ? "1rem" : "0px" }}
    >
      <p>Learn More</p>
      <ArrowTail />
    </div>
  );
};
export default LearnMoreButton;
