import TMAppScreenshots from "../Images/TM_App_ScreenShots.png";
import CarGoAppScreenshots from "../Images/CarGoAppScreenshots.png";
import { ReactComponent as TM } from "../Images/TM.svg";
import { ReactComponent as CG } from "../Images/CarGo.svg";
import React from "react";

interface PortfolioItems {
  name: "transit" | "cargo";
  title: string;
  cardImage: string;
  logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
  color: string;
}

export const portfolioItems: PortfolioItems[] = [
  {
    name: "transit",
    title: "TransitMatters",
    cardImage: TMAppScreenshots,
    logo: TM,
    text: "TransitMatters is a non-profit organization in Boston formed to advocate for better public transportation. I am working on a new version of their data dashboards.",
    color: "#141313",
  },
  {
    name: "cargo",
    title: "CarGo",
    logo: CG,
    cardImage: CarGoAppScreenshots,
    text: "CarGo is an app that I designed and developed in collaboration with a small business owner. Our goal was to automate scheduling of delivery drivers and provide incentives for dependability.",
    color: "#1A1918",
  },
];
