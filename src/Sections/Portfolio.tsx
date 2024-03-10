import type { SetStateAction } from "react";
import React from "react";
import "./Portfolio.css";
import type { PageNames } from "../AboutMenu/Pages";
import { PortfolioSlider } from "../Components/PortfolioSlider";
import { Header } from "../Components/Header";

interface PortfolioProps {
  setPage: React.Dispatch<SetStateAction<PageNames>>;
  clicked: boolean;
}

export const Portfolio = React.forwardRef<HTMLDivElement, PortfolioProps>(
  ({ setPage, clicked }, ref) => {
    return (
      <div className="Portfolio relative" ref={ref}>
        <Header title="portfolio" clicked={clicked} />
        <PortfolioSlider setPage={setPage} />
      </div>
    );
  }
);
