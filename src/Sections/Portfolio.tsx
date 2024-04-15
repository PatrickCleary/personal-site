import type { SetStateAction } from "react";
import React from "react";
import "./Portfolio.css";
import type { PageNames } from "../AboutMenu/Pages";

interface PortfolioProps {
  setPage: React.Dispatch<SetStateAction<PageNames>>;
  clicked: boolean;
}

export const Portfolio = React.forwardRef<HTMLDivElement, PortfolioProps>(
  ({ setPage, clicked }, ref) => {
    return (
      <div
        className="bg-slate-950 bg-opacity-90 backdrop-blur-lg z-20 pt-16 pb-16 flex flex-row flex-wrap relative overflow-x-hidden w-full px-2 lg:px-8 gap-2 lg:gap-8"
        ref={ref}
      >
        <a
          className="w-1/2 lg:w-1/3 hover:bg-slate-200 cursor-pointer group rounded-md"
          href="https://bluebikedata.com"
        >
          <img src={"/portfolio/bb.jpg"} className="" />
          <h3 className="text-lg italic group-hover:text-slate-950">
            Blue Bike Data
          </h3>
        </a>
        <a
          className="w-1/2 lg:w-1/3 hover:bg-slate-200 cursor-pointer group rounded-md"
          href="https://main.d1q4dlkv82pltq.amplifyapp.com"
        >
          <img src={"/portfolio/ca.jpg"} />
          <h3 className="text-lg italic group-hover:text-slate-950">
            Civic Atlas (WIP)
          </h3>
        </a>
        <a
          className="w-1/2 lg:w-1/3 hover:bg-slate-200 cursor-pointer group rounded-md"
          href="https://humanity.land"
        >
          <img src={"/portfolio/hl.jpg"} />
          <h3 className="text-lg italic group-hover:text-slate-950">
            Humanity Land
          </h3>
        </a>
        <a
          className="w-1/2 lg:w-1/3 hover:bg-slate-200 cursor-pointer group rounded-md"
          href="https://dashboard.transitmatters.org"
        >
          <img src={"/portfolio/tm.jpg"} />
          <h3 className="text-lg italic group-hover:text-slate-950">
            TransitMatters Data Dashboard
          </h3>
        </a>
        <a
          className="w-1/2 lg:w-1/3 hover:bg-slate-200 cursor-pointer group rounded-md"
          href="https://dcschoolboundaryexplorer.com"
        >
          <img src={"/portfolio/dc.jpg"} />
          <h3 className="text-lg italic group-hover:text-slate-950">
            Washington D.C. school boundary explorer
          </h3>
        </a>
      </div>
    );
  }
);
