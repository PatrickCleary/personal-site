import React, { SetStateAction } from "react";
import "./Portfolio.css";
import Header from "../Components/Header";
import PortfolioSlider from "../Components/PortfolioSlider";
import { PageNames } from "../AboutMenu/Pages";

interface PortfolioProps {
  setPage: React.Dispatch<SetStateAction<PageNames>>;
  clicked: boolean;
}

export const Portfolio = React.forwardRef<HTMLDivElement, PortfolioProps>(
  ({ setPage, clicked }, ref) => {
    return (
      <div className="Portfolio" ref={ref}>
        <Header title="PORTFOLIO" clicked={clicked} />
        <PortfolioSlider setPage={setPage} />
      </div>
    );
  }
);
