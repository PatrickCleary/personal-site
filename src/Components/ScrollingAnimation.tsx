import React, { useContext } from "react";
import "./ScrollingAnimation.css";
import Train from "../Images/Train.png";
import { WindowContext } from "../WindowContext";

interface ScrollAnimationProps {
  position: number;
  image: any;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  position,
  image,
}) => {
    const {mobile, clientWidth} = useContext(WindowContext);
    let numTrains = mobile ? 5 : 11;
    const scrollFactor = mobile ? 1.25 : 1.1;
    const trains = [];
    for(let i =0; i < numTrains; i ++ ) {
        trains.push(<img className={`${mobile ? "Animation-Image-Mobile" : "Animation-Image-DT"}`} src={Train} alt={'Scrolling Animation'} />)
    }
    

  return (
    <div className="Scrolling-Animation" style={{ left: `${position - (clientWidth*scrollFactor)}px` }}>
        {trains}
    </div>
  );
};

export default ScrollAnimation;
