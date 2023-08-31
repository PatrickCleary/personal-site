import React, { useContext, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { portfolioItems } from "../CaseStudy/PortfolioItemObjects";
import { ReactComponent as Arrow } from "../Images/Arrow.svg";
import { ReactComponent as ArrowLeft } from "../Images/ArrowLeft.svg";
import type { PageNames } from "../AboutMenu/Pages";
import { WindowContext } from "../WindowContext";
import { PortfolioItem } from "./PortfolioItem";

interface PortfolioSliderProps {
  setPage: React.Dispatch<React.SetStateAction<PageNames>>;
}

export const PortfolioSlider: React.FC<PortfolioSliderProps> = ({
  setPage,
}) => {
  const [selected, setSelected] = useState({ current: 0, previous: -1 });
  const { mobile } = useContext(WindowContext);
  const portfolioRef = useRef(null);

  const goLeft = () => {
    selected.current > 0 &&
      setSelected({
        current: selected.current - 1,
        previous: selected.current,
      });
  };
  const goRight = () => {
    selected.current < portfolioItems.length - 1 &&
      setSelected({
        current: selected.current + 1,
        previous: selected.current,
      });
  };

  const handlers = useSwipeable({
    onSwipedLeft: goRight,
    onSwipedRight: goLeft,
  });
  return (
    <div
      className="w-[80vw] relative justify-center items-center p-8 flex flex-row overflow-visible"
      ref={portfolioRef}
    >
      <div
        className={`Arrows  ${mobile && "Left-Arrow-Mobile"} ${
          !mobile && "Arrows-DT"
        } Arrow-Left`}
        style={{
          cursor: selected.current > 0 ? "pointer" : "auto",
        }}
        onClick={goLeft}
      >
        <ArrowLeft
          className="Arrow-SVG"
          style={{
            opacity: selected.current > 0 ? 1 : 0,
            width: "4rem",
          }}
        />
      </div>
      <div className="Current-Portfolio-Item" {...handlers}>
        {portfolioItems.map((portfolioItem, index) => {
          return (
            <PortfolioItem
              key={index}
              selected={selected}
              index={index}
              item={portfolioItem}
              setPage={() => setPage(portfolioItem.name)}
            />
          );
        })}
      </div>
      <div
        className={`Arrows ${mobile && "Right-Arrow-Mobile"} ${
          !mobile && "Arrows-DT"
        } Arrow-Right`}
        style={{
          cursor:
            selected.current < portfolioItems.length - 1 ? "pointer" : "auto",
        }}
        onClick={goRight}
      >
        <Arrow
          className="Arrow-SVG"
          width={"4rem"}
          style={{
            opacity: selected.current + 1 < portfolioItems.length ? 1 : 0,
          }}
        />
      </div>
    </div>
  );
};
