import React, { useContext } from "react";
import "./ScrollingAnimation.css";
import Train from "../Images/Train.png";
import LastTrain from "../Images/LastTrain.png";
import { WindowContext } from "../WindowContext";

interface ScrollAnimationProps {
  position: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  position,
}) => {
    const {mobile, clientWidth} = useContext(WindowContext);
    let numTrains = mobile ? 4 : 5;
    const scrollFactor = mobile ? 1.25 : 1.1;
    const trains = [];
    for(let i =0; i < numTrains; i ++ ) {
        trains.push(<img className={`${mobile ? "Animation-Image-Mobile" : "Animation-Image-DT"}`} src={i === 0 ? LastTrain: Train } alt={'Scrolling Animation'}  />)
    }
    

  return (
    <div className="Scrolling-Animation" style={{ left: `${position - (clientWidth*scrollFactor)}px`, display:"flex", justifyContent:'flex-end', width: mobile ? '125vw' : '110vw' }}>
        {trains}
    </div>
  );
};

export default ScrollAnimation;
