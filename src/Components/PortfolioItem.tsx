import React, { useContext } from "react";
import "./PortfolioItem.css";
import { ReactComponent as TM } from "../Images/TM.svg";
import TMAppScreenshots from "../Images/Cargo_App_Screenshots.png";
import { WindowContext } from "../WindowContext";
import LearnMoreButton from "./LearnMoreButton";
import TransitMattersPage from "../TransitMattersPage";

interface PortfolioItemProps {
  index: number;
  selected: { current: number; previous: number };
  name: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  index,
  selected,
  name,
  setPage,
}) => {
  const { mobile } = useContext(WindowContext);
  let animationSelection = "";
  if (selected.current === index) {
    if (selected.previous < selected.current) {
      animationSelection = "Slide-In-From-Right";
    } else {
      animationSelection = "Slide-In-From-Left";
    }
  } else if (selected.previous === index) {
    if (selected.previous < selected.current) {
      animationSelection = "Slide-Out-To-Left";
    } else {
      animationSelection = "Slide-Out-To-Right";
    }
  }

  return (
    <div
      key={name}
      className={`Portfolio-Item ${animationSelection} Invisible Gone ${
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
          <LearnMoreButton setPage={setPage} />
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
      {mobile && (
        <LearnMoreButton
          setPage={() => {
            setPage(name);
          }}
        />
      )}
    </div>
  );
};

export default PortfolioItem;
