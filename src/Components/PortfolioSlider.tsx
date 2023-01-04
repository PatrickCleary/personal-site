import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";

const PortfolioSlider = () => {
  const [selected, setSelected] = useState(0);
    const portfolioItems = [
        'TM',
        'CG',
        'AE',
    ]

  return (
    <div className="Portfolio-Container">
      <div className="Arrows Left-Arrow" onClick={()=>{selected > 0 && setSelected(selected-1)}}>left</div>
      <div className="Current-Portfolio-Item">
          {portfolioItems.map((name, index) => {
          return <PortfolioItem selected={selected} index={index} name={name}/>
          })}
      </div>
      <div className="Arrows Right-Arrow" onClick={()=>{selected < portfolioItems.length-1 && setSelected(selected+1)}}>right</div>
    </div>
  );
};

export default PortfolioSlider;