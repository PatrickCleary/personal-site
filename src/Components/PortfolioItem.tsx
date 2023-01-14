import React, { useContext } from "react";
import "./PortfolioItem.css";
import { WindowContext } from "../WindowContext";
import LearnMoreButton from "./LearnMoreButton";

interface PortfolioItemProps {
  index: number;
  selected: { current: number; previous: number };
  item: any;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  index,
  selected,
  item,
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
      key={item.name}
      className={`Portfolio-Item ${animationSelection} Invisible Gone ${
        mobile ? "Portfolio-Item-Mobile" : "Portfolio-Item-DT"
      }`}
      style={{
        width: mobile ? "50vw" : "auto",
        flexDirection: mobile ? "column" : "row",
        backgroundColor: mobile ? "transparent" : item.color,
      }}
    >
      {!mobile && (
        <item.logo
          fill="#F4C743"
          width={"24vw"}
          height={"24vw"}
          className="TransitMattersLogo Icon"
        />
      )}
      {mobile && (
        <div className="Portfolio-Item-Text Portfolio-Item-Text-Mobile">
          <h3
            className="Portfolio-Item-Title"
            style={{
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            {item.title}
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
              {item.title}
            </h3>
            {!mobile && (
              <p style={{ color: item.secondaryColor }}>{item.text}</p>
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
        className={`App-Screenshots ${
          mobile ? "App-Screenshots-Mobile" : "App-Screenshots-DT"
        }`}
        src={item.cardImage}
        alt="Screenshots of TransitMatters Site"
      />
      {mobile && (
        <LearnMoreButton
          setPage={() => {
            setPage(item.name);
          }}
        />
      )}
    </div>
  );
};

export default PortfolioItem;
