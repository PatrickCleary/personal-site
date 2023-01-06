import React, { useContext, useEffect, useRef, useState } from "react";
import PortfolioItem from "./PortfolioItem";
import { ReactComponent as Arrow } from "../Images/Arrow.svg";
import { WindowContext } from "../WindowContext";

interface PortfolioSliderProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const PortfolioSlider: React.FC<PortfolioSliderProps> = ({ setPage }) => {
  const [selected, setSelected] = useState({ current: 0, previous: -1 });
  const { mobile } = useContext(WindowContext);
  const portfolioItems = ["TM", "CG", "AE"];
  const portfolioRef = useRef(null);

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
        threshold: 0.25,
      }
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }
  }, [portfolioRef, mobile]);

  return (
    <div>
      <div className="Portfolio-Container Invisible" ref={portfolioRef}>
        <div
          className={`Arrows ${mobile && "Left-Arrow-Mobile"}`}
          style={{
            cursor: selected.current > 0 ? "pointer" : "auto",
          }}
          onClick={() => {
            selected.current > 0 &&
              setSelected({
                current: selected.current - 1,
                previous: selected.current,
              });
          }}
        >
          <Arrow
            style={{
              transform: "rotateY(180deg)",
              opacity: selected.current > 0 ? 1 : 0,
              width: "4rem",
            }}
          />
        </div>
        <div className="Current-Portfolio-Item">
          {portfolioItems.map((name, index) => {
            return (
              <PortfolioItem
                selected={selected}
                index={index}
                name={name}
                setPage={() => setPage(name)}
              />
            );
          })}
        </div>
        <div
          className={`Arrows ${mobile && "Right-Arrow-Mobile"}`}
          style={{
            cursor:
              selected.current < portfolioItems.length - 1 ? "pointer" : "auto",
          }}
          onClick={() => {
            selected.current < portfolioItems.length - 1 &&
              setSelected({
                current: selected.current + 1,
                previous: selected.current,
              });
          }}
        >
          <Arrow
            width={"4rem"}
            style={{
              opacity: selected.current + 1 < portfolioItems.length ? 1 : 0,
            }}
          />
        </div>
      </div>
      <p style={{ alignSelf: "center", textAlign: "center" }}>
        {selected.current + 1}/3
      </p>
    </div>
  );
};

export default PortfolioSlider;
