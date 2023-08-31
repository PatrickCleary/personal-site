import React, { useContext } from "react";
import "./PortfolioItem.css";
import { WindowContext } from "../WindowContext";
import type { PortfolioItem as PortfolioItemType } from "../CaseStudy/PortfolioItemObjects";
import { LearnMoreButton } from "./LearnMoreButton";

interface PortfolioItemProps {
  index: number;
  selected: { current: number; previous: number };
  item: PortfolioItemType;
  setPage: (pageName?: string) => void;
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({
  index,
  selected,
  item,
  setPage,
}) => {
  const { mobile } = useContext(WindowContext);
  let animationSelection = ""; // This is a hack. The second portfolio item was hovering on top of the first.
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
      className={`rounded-md translate-x-full flex ${animationSelection} Invisible Portfolio-Item ${
        mobile ? "flex items-center py-8 gap-4" : "h-[30vw] m-[2vw] p-[2vw]"
      }`}
      style={{
        width: mobile ? "60vw" : "auto",
        flexDirection: mobile ? "column" : "row",
        backgroundColor: mobile ? item.color : item.color,
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
        <div className=" flex flex-col gap-y-1">
          <h3 className="text-2xl text-center">{item.title}</h3>
        </div>
      )}

      {!mobile && (
        <div className="Portfolio-Item-Text flex flex-col gap-y-1 Portfolio-Item-Text-DT">
          <div>
            <h3
              style={{
                textAlign: "left",
                fontSize: "3rem",
              }}
            >
              {item.title}
            </h3>
            {!mobile && <p>{item.text}</p>}
          </div>
          <LearnMoreButton setPage={setPage} />
        </div>
      )}
      {!mobile && <div style={{ width: "24vw", display: "flex" }} />}
      <img
        style={{
          position: mobile ? "relative" : "absolute",
        }}
        className={`App-Screenshots ${
          mobile ? "App-Screenshots-Mobile" : "App-Screenshots-DT"
        }`}
        src={item.cardImage}
        alt="Screenshots of Site"
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
