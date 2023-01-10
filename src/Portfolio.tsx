import React, { useContext, useState } from "react";
import "./Portfolio.css";
import { WindowContext } from "./WindowContext";
import { ReactComponent as TM } from "./Images/TM.svg";
import { ReactComponent as AE } from "./Images/Burger.svg";
import { ReactComponent as CarGo } from "./Images/CarGo.svg";
import Header from "./Components/Header";
import PortfolioSlider from "./Components/PortfolioSlider";
import TransitMattersPage from "./TransitMattersPage";

export const Portfolio = () => {
  const { mobile } = useContext(WindowContext);
  const [page, setPage] = useState("None");
  
  return (
    <div className="Portfolio">
      <Header title="PORTFOLIO" colorOne="#ffffff" colorTwo="#ffffff20" />
      <PortfolioSlider setPage={setPage} />
      {page === "TM" && <TransitMattersPage setPage={setPage} />}
    </div>
  );
};
