import React, { SetStateAction } from "react";
import "./Portfolio.css";
import Header from "../Components/Header";
import PortfolioSlider from "../Components/PortfolioSlider";
import { PageNames } from "../AboutMenu/Pages";

interface PortfolioProps {
  setPage: React.Dispatch<SetStateAction<PageNames>>
}

export const Portfolio: React.FC<PortfolioProps> = ({setPage}) => {
  
  return (
    <div className="Portfolio">
      <Header title="PORTFOLIO" colorOne="#e8820e80" colorTwo="#cf0e0e80" />
      <PortfolioSlider setPage={setPage} />
    </div>
  );
};
