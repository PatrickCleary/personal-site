import { experience } from "./Experience";
import { uxdesign } from "./UXDesign";
import { transit } from "../CaseStudy/TransitMattersWriting";
import { interests } from "./InterestsWriting";
import { cargo } from "../CaseStudy/CarGo";

export type PageNames = PageNamesNonNull | null;
export type PageNamesNonNull =
  | "uxdesign"
  | "experience"
  | "interests"
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
  interests: {
    title: "Interests",
    content: interests,
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
