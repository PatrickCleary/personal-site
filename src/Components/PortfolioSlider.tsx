import React, { useContext, useEffect, useRef, useState } from "react";
import PortfolioItem from "./PortfolioItem";
import { ReactComponent as Arrow } from "../Images/Arrow.svg";
import { WindowContext } from "../WindowContext";

const PortfolioSlider = () => {
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
          className="Arrows Left-Arrow"
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
          {selected.current > 0 && (
            <Arrow width={"50%"} style={{ transform: "rotateY(180deg)" }} />
          )}
        </div>
        <div
          className="Current-Portfolio-Item"
          style={{ overflow: mobile ? "hidden" : "visible" }}
        >
          {portfolioItems.map((name, index) => {
            return (
              <PortfolioItem selected={selected} index={index} name={name} />
            );
          })}
        </div>
        <div
          className="Arrows Right-Arrow"
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
          {selected.current + 1 < portfolioItems.length && (
            <Arrow width={"50%"} />
          )}
        </div>
      </div>
      <p style={{ alignSelf: "center", textAlign: "center" }}>
        {selected.current + 1}/3
      </p>
    </div>
  );
};

export default PortfolioSlider;
