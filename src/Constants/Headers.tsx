import type React from "react";
import { ReactComponent as ABOUTSVG } from "../Images/Headers/ABOUT.svg";
import { ReactComponent as PORTFOLIOSVG } from "../Images/Headers/PORTFOLIO.svg";
import { ReactComponent as CONTACTSVG } from "../Images/Headers/CONTACT.svg";

export const headerImages: {
  [key in "about" | "portfolio" | "contact"]: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
} = {
  about: ABOUTSVG,
  portfolio: PORTFOLIOSVG,
  contact: CONTACTSVG,
};
