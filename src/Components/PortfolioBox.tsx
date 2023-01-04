import React, { useState } from "react";
import { items } from "../Constants/PortfolioItems";
interface PortfolioBoxProps {
  name: string;
  bg: string;
  children: React.ReactElement;
}

const PortfolioBox: React.FC<PortfolioBoxProps> = ({ name, bg, children }) => {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <div
      style={{
        backgroundColor: `${hovered ? "#" + bg + "40" : "#" + bg}`,
        visibility: selected ? 'hidden' : 'visible',
      }}
      className="Portfolio-Box"
    >
      <div
        className="Portfolio-Box-Inner"
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
        }}  
      >
        {React.cloneElement(children, { opacity: hovered ? 0.1 : 1 })}
        {hovered && (
          <div
            onClick={() => {
              console.log("open");
            }}
            style={{ position: "absolute"}}
            className="Portfolio-Item-Description-Div"
          >
            <h2 className="Portfolio-Item-Title">{items[name].name}</h2>
            <p className="Portfolio-Item-Text">{items[name].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioBox;
