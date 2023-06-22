import { experience } from "./Experience";
import { uxdesign } from "./UXDesign";
import { transit } from "../CaseStudy/TransitMattersWriting";
import { more } from "./MoreWriting";
import { cargo } from "../CaseStudy/CarGo";

export type PageNames = PageNamesNonNull | null;
export type PageNamesNonNull =
  | "uxdesign"
  | "experience"
  | "more"
  | "transit"
  | "cargo";

export const Pages = {
  uxdesign: {
    title: "Why UX Design?",
    content: uxdesign,
  },
  experience: {
    title: "Experience",
    content: experience,
  },
  more: {
    title: "More",
    content: more,
  },
  transit: {
    title: "TransitMatters",
    content: transit,
  },
  cargo: {
    title: "CarGo",
    content: cargo,
  },
};
