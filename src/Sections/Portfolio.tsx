import type { SetStateAction } from "react";
import React from "react";
import "./Portfolio.css";
import type { PageNames } from "../AboutMenu/Pages";
import { PortfolioSlider } from "../components/PortfolioSlider";
import { Header } from "../components/Header";

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
