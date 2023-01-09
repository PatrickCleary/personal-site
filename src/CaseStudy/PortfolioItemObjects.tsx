import TMAppScreenshots from "../Images/TM_App_ScreenShots.png";
import CargoAppScreenshots from "../Images/Cargo_App_Screenshots.png";
import { ReactComponent as TM } from "../Images/TM.svg";
import { ReactComponent as CG } from "../Images/CarGo.svg";
import React from "react";

interface PortfolioItems {
  name: string;
  title: string;
  cardImage: string;
  logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
  color: string;
}

export const portfolioItems: PortfolioItems[] = [
  {
    name: "TM",
    title: "TransitMatters",
    cardImage: TMAppScreenshots,
    logo: TM,
    text: "TransitMatters is a non-profit organization in Boston formed to advocate for better public transportation. I am working on a new version of their data dashboards.",
    color: "#3f3f3f",
  },
  {
    name: "CG",
    title: "CarGo",
    logo: CG,
    cardImage: CargoAppScreenshots,
    text: "CarGo is an app.",
    color: "#606060",
  },
];
