import React, { useContext, useState } from "react";
import "./Portfolio.css";
import { WindowContext } from "../WindowContext";
import Header from "../Components/Header";
import PortfolioSlider from "../Components/PortfolioSlider";
import TransitMattersPage from "../TransitMattersPage";

export const Portfolio = () => {
  const { mobile } = useContext(WindowContext);
  const [page, setPage] = useState("None");
  
  return (
    <div className="Portfolio">
      <Header title="PORTFOLIO" colorOne="#e8820e80" colorTwo="#cf0e0e80" />
      <PortfolioSlider setPage={setPage} />
      {page === "TM" && <TransitMattersPage setPage={setPage} />}
    </div>
  );
};
