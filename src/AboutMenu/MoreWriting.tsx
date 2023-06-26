import React from "react";
import type { ContentItem } from "./Pages";
export const more: ContentItem[] = [
  { type: "h", text: "Work" },

  {
    type: "custom",
    content: (
      <p>
        I started my career as a backend software engineer working at Amazon. I
        have since discovered that my interests fall more on the product side of
        software. I built{" "}
        <a
          style={{ color: "#00ffff" }}
          href="https://dashboard-v4-beta.labs.transitmatters.org/"
        >
          this dashboard
        </a>{" "}
        for a non-profit and now I am looking for a role as a product designer
        or product manager.
        <br />
      </p>
    ),
  },
  { type: "button", label: "Resume", href: "/resume.pdf" },
  { type: "h", text: "Things I Do & Enjoy:" },
  {
    type: "ulist",
    text: [
      `Public Transit Advocate`,
      "Avid bike rider",
      `Snowboarding & Skiing`,
      `Running (1st marathon in 2022)`,
      `Psychology`,
      `Boston sports`,
      `Hiking`,
    ],
  },
  {
    type: "h",
    text: `What I'm Reading`,
  },
  {
    type: "p",
    text: `2023`,
  },
  {
    type: "ulist",
    text: [
      "The Design of Everyday Things - Don Norman",
      "Don't Make Me Think - Steve Krug",
      "Calypso - David Sedaris",
      "When We Cease to Understand the World - Benjamín Labatut",
      "Creative Selection - Ken Kocienda",
      "When You Are Engulfed in Flames - David Sedaris",
      "Sources of Power - Gary Klein",
      "Tomorrow, and Tomorrow, and Tomorrow - Gabrielle Zevin",
    ],
  },
  {
    type: "p",
    text: `2022`,
  },
  {
    type: "ulist",
    text: [
      "Factfulness - Hans Rosling",
      "Everything Is F*cked - Mark Manson",
      "When to Rob a Bank - Stephen J. Dubner & Stephen Levitt",
      "Recursion - Blake Crouch",
      "The Splendid and the Vile - Erik Larson",
      "The Stranger - Albert Camus",
      "Man's Search for Meaning - Viktor Frankl",
      "Happy Go-Lucky - David Sedaris",
      "Invisible Things - Mat Johnson",
      "In the Garden of Beasts - Erik Larson",
      "Slaughterhouse-Five - Kurt Vonnegut",
      "Me Talk Pretty One Day - David Sedaris",
      "Zero to One - Peter Thiel",
      "Click - Ori Brafman & Rom Brafman",
      "Think Like a Freak - Stephen J. Dubner & Stephen Levitt",
    ],
  },
];
