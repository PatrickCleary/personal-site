import React, { useContext } from "react";
import "./PortfolioItem.css";
import { ReactComponent as TM } from "../Images/TM.svg";
import TMAppScreenshots from "../Images/TM_App_ScreenShots.png";
import { WindowContext } from "../WindowContext";
import LearnMoreButton from "./LearnMoreButton";

interface PortfolioItemProps {
  index: number;
  selected: { current: number; previous: number };
  name: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  index,
  selected,
  name,
}) => {
  const { mobile } = useContext(WindowContext);
  let animationSelection = "";
  if (selected.current === index) {
    if (selected.previous < selected.current) {
      console.log(index.toString(), "SIFR");
      animationSelection = "Slide-In-From-Right";
    } else {
      console.log(index.toString(), "SIFL");

      animationSelection = "Slide-In-From-Left";
    }
  } else if (selected.previous === index) {
    if (selected.previous < selected.current) {
      console.log(index.toString(), "SOTL");

      animationSelection = "Slide-Out-To-Left";
    } else {
      console.log(index.toString(), "SOTR");

      animationSelection = "Slide-Out-To-Right";
    }
  }

  return (
    <div
      key={name}
      className={`Portfolio-Item ${animationSelection} Invisible  ${
        mobile ? "Portfolio-Item-Mobile" : "Portfolio-Item-DT"
      }`}
      style={{
        width: mobile ? "auto" : " 75w",
        flexDirection: mobile ? "column" : "row",
        backgroundColor: mobile ? "transparent" : "#3f3f3f",
      }}
    >
      {!mobile && (
        <TM
          width={"24vw"}
          height={"24vw"}
          className="TransitMattersLogo Icon"
        />
      )}
      {mobile && (
        <div className="Portfolio-Item-Text">
          <h3
            className="Portfolio-Item-Title"
            style={{
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            TransitMatters
          </h3>
        </div>
      )}

      {!mobile && (
        <div className="Portfolio-Item-Text Portfolio-Item-Text-DT">
            <div>
            <h3
              className="Portfolio-Item-Title"
              style={{
                textAlign: "left",
                fontSize: "3rem",
              }}
            >
              TransitMatters
            </h3>
            {!mobile && (
              <p>
                TransitMatters is a non-profit organization in Boston formed to
                advocate for better public transportation. I am working on a new
                version of their data dashboards.
              </p>
            )}
            </div>
          <LearnMoreButton />
        </div>
      )}
      {!mobile && <div style={{ width: "27vw", display: "flex" }} />}
      <img
        style={{
          position: mobile ? "relative" : "absolute",
        }}
        className={`TM-App-Screenshots ${
          mobile ? "Screenshots-Mobile" : "Screenshots-DT"
        }`}
        src={TMAppScreenshots}
        alt="Screenshots of TransitMatters Site"
      />
      {mobile && <LearnMoreButton />}
    </div>
  );
};

export default PortfolioItem;
