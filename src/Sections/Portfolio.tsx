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
        className="flex items-center justify-center bg-slate-950 bg-opacity-90 backdrop-blur-lg z-20 pb-8 pt-8 lg:pt-16 lg:pb-16 relative overflow-x-hidden"
        ref={ref}
      >
        <div className="max-w-[940px] w-full lg:items-start items-center flex-col">
          <div className=" grid gap-4 xl:grid-cols-3 lg:gap-8 grid-cols-2 px-4 lg:px-0">
            <a
              className=" hover:bg-slate-200 cursor-pointer group rounded-sm overflow-hidden"
              href="https://parkingregulations.nyc"
            >
              <img src={"/portfolio/nycpr.jpg"} className="" />
              <h3 className="px-1 text-lg italic group-hover:text-slate-950">
                NYC Parking Regulations
              </h3>
            </a>
            <a
              className=" hover:bg-slate-200 cursor-pointer group rounded-sm overflow-hidden"
              href="https://bluebikedata.com"
            >
              <img src={"/portfolio/bb.jpg"} className="" />
              <h3 className="px-1 text-lg italic group-hover:text-slate-950">
                Blue Bike Data
              </h3>
            </a>
            <a
              className=" hover:bg-slate-200 cursor-pointer group rounded-sm overflow-hidden"
              href="https://app.civicatlas.net"
            >
              <img src={"/portfolio/ca.jpg"} />
              <h3 className="px-1 text-lg italic group-hover:text-slate-950">
                Civic Atlas (WIP)
              </h3>
            </a>
            <a
              className=" hover:bg-slate-200 cursor-pointer group rounded-sm overflow-hidden"
              href="https://humanity.land"
            >
              <img src={"/portfolio/hl.jpg"} />
              <h3 className="px-1 text-lg italic group-hover:text-slate-950">
                Humanity Land (Desktop only)
              </h3>
            </a>
            <a
              className=" hover:bg-slate-200 cursor-pointer group rounded-sm overflow-hidden"
              href="https://dashboard.transitmatters.org"
            >
              <img src={"/portfolio/tm.jpg"} />
              <h3 className="px-1 text-lg italic group-hover:text-slate-950">
                TransitMatters Data Dashboard
              </h3>
            </a>
            <a
              className=" hover:bg-slate-200 cursor-pointer group rounded-sm overflow-hidden"
              href="https://dcschoolboundaryexplorer.com"
            >
              <img src={"/portfolio/dc.jpg"} />
              <h3 className="px-1 text-lg italic group-hover:text-slate-950">
                Washington D.C. school boundary explorer
              </h3>
            </a>
          </div>
        </div>
      </div>
    );
  }
);
