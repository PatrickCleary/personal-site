import type React from "react";
import TMAppScreenshots from "../Images/transit_hero.png";
import CarGoAppScreenshots from "../Images/CarGoAppScreenshots.png";
import BBDataScreenshots from "../Images/BBData_portfolio_hero.png";
import { ReactComponent as TM } from "../Images/TM.svg";
import { ReactComponent as CG } from "../Images/CarGo.svg";
import { ReactComponent as bb } from "../Images/bbdata.svg";

export interface PortfolioItem {
  name: "transit" | "cargo" | "bbdata";
  title: string;
  cardImage: string;
  logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
  color: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    name: "transit",
    title: "TransitMatters",
    cardImage: TMAppScreenshots,
    logo: TM,
    text: "I led the redesign of a high-profile and impactful transit advocacy tool for TransitMatters – a Boston based organization. The redesign provided a more mobile-friendly and intuitive experience.",
    color: "#141313",
  },

  {
    name: "bbdata",
    title: "Blue Bike Data",
    logo: bb,
    cardImage: BBDataScreenshots,
    text: "Blue Bike data is a web app that provides insight into the micromobility network in Boston.",
    color: "#0A141A",
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
