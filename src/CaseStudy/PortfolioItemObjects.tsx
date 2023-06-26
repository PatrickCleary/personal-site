import type React from "react";
import TMAppScreenshots from "../Images/TM_App_ScreenShots.png";
import CarGoAppScreenshots from "../Images/CarGoAppScreenshots.png";
import { ReactComponent as TM } from "../Images/TM.svg";
import { ReactComponent as CG } from "../Images/CarGo.svg";

export interface PortfolioItem {
  name: "transit" | "cargo";
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
    name: "cargo",
    title: "CarGo",
    logo: CG,
    cardImage: CarGoAppScreenshots,
    text: "CarGo is an app that I designed and developed in collaboration with a small business owner. Our goal was to automate scheduling of delivery drivers and provide incentives for dependability.",
    color: "#1A1918",
  },
];
