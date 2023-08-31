import type React from "react";
import { transit } from "../CaseStudy/TransitMattersWriting";
import { bbdata } from "../CaseStudy/BBData";
import { cargo } from "../CaseStudy/CarGo";
import { experience } from "./Experience";
import { uxdesign } from "./UXDesign";
import { more } from "./MoreWriting";

export type PageNames = PageNamesNonNull | null;
export type PageNamesNonNull =
  | "uxdesign"
  | "experience"
  | "more"
  | "transit"
  | "bbdata"
  | "cargo";

export type textItem = { type: "p" | "h"; text: string };
export type imageItem = { type: "img"; location: string };
export type listItem = { type: "list"; text: string[] };
export type uListItem = { type: "ulist"; text: string[] };
export type buttonItem = { type: "button"; label: string; href: string };
export type linksItem = { type: "links"; links: Links };
export type Links = Record<string, string>;
export type customItem = { type: "custom"; content: React.ReactNode };
export type ContentItem =
  | textItem
  | listItem
  | uListItem
  | linksItem
  | buttonItem
  | customItem
  | imageItem;

export const Pages: {
  [key in PageNamesNonNull]: { title: string; content: ContentItem[] };
} = {
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
  bbdata: {
    title: "Blue Bike Data",
    content: bbdata,
  },
};
