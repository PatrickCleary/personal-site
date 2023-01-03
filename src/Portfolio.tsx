import React, { useContext, useState } from "react";
import "./Portfolio.css";
import { WindowContext } from "./WindowContext";
import { ReactComponent as TM } from "./Images/TM.svg";
import { ReactComponent as AE } from "./Images/Burger.svg";
import { ReactComponent as CarGo } from "./Images/CarGo.svg";
import PortfolioBox from "./Components/PortfolioBox";

export const Portfolio = () => {
  const { mobile } = useContext(WindowContext);
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        `${window.scrollY / (document.body.offsetHeight - window.innerHeight)}`
      );
    },
    false
  );
  return (
    <div className="Portfolio">
      <div className="Header" style={{ width: mobile ? "95%" : "40%", alignSelf:'center' }}>
        <h1 className="Title" style={{ fontSize: mobile ? "2em" : "4em" }}>
          Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio
          Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio
          Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio Portfolio
        </h1>
      </div>
      <div className="Portfolio-Box-Container">
        <div className="Fade-Out-Box Left"></div>
        <div className="Fade-Out-Box Right"></div>

        <PortfolioBox name="tm" bg="2e2d2c">
          <TM
            width={"50%"}
            height={"50%"}
            className="TransitMattersLogo Icon"
          />
        </PortfolioBox>
        <PortfolioBox name="cargo" bg="fdc500">
          <CarGo width={"50%"} height={"50%"} className="CarGoLogo Icon" />
        </PortfolioBox>
        <PortfolioBox name="ae" bg="a62626">
          <AE
            width={"50%"}
            height={"50%"}
            className="AmherstEatsLogo Icon"
            opacity={0.1}
            color="white"
          />
        </PortfolioBox>

        <div className="Portfolio-Box"></div>
        <div className="Portfolio-Box"></div>
        <div className="Portfolio-Box"></div>
      </div>
    </div>
  );
};
