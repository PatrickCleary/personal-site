import React, { useContext, useEffect, useRef, useState } from "react";
import PortfolioItem from "./PortfolioItem";
import { portfolioItems } from "../CaseStudy/PortfolioItemObjects";
import { ReactComponent as Arrow } from "../Images/Arrow.svg";
import { ReactComponent as ArrowLeft } from "../Images/ArrowLeft.svg";
import { WindowContext } from "../WindowContext";
import { PageNames } from "../AboutMenu/Pages";
import { useSwipeable } from "react-swipeable";

interface PortfolioSliderProps {
  setPage: React.Dispatch<React.SetStateAction<PageNames>>;
}

const PortfolioSlider: React.FC<PortfolioSliderProps> = ({ setPage }) => {
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("Invisible");
            entry.target.classList.add("Slide-In-From-Right");
          }
        });
      },
      {
        root: null,
        rootMargin: mobile ? "-10px" : "-15%",
        threshold: 0.35,
      }
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }
  }, [portfolioRef, mobile]);

  return (
    <div>
      <div
        className={`Portfolio-Container Invisible ${
          mobile ? "Portfolio-Container-Mobile" : "Portfolio-Container-DT"
        }`}
        ref={portfolioRef}
      >
        <div
          className={`Arrows ${mobile && "Left-Arrow-Mobile"} ${
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
      <p style={{ alignSelf: "center", textAlign: "center" }}>
        {selected.current + 1}/{portfolioItems.length}
      </p>
    </div>
  );
};

export default PortfolioSlider;
