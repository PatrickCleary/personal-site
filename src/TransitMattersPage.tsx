import React from "react";
import "./TransitMattersPage.css";
import { text } from "./CaseStudy/TransitMattersWriting";

interface TransitMattersPageProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const TransitMattersPage: React.FC<TransitMattersPageProps> = ({ setPage }) => {
  return (
    <div className="Slide-Up Container">
      <div className="Main-Div">
        <div
          className="Exit"
          onClick={() => {
            setPage("None");
            document.body.style.overflow = "auto";
          }}
        ></div>
        <div className="Main-Content">
          <p className="Text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TransitMattersPage;
