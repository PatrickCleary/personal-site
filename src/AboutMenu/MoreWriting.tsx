import type { ContentItem } from "./Pages";
export const more: ContentItem[] = [
  { type: "h", text: "Resume" },

  { type: "button", label: "Open", href: "/resume.pdf" },
  { type: "h", text: "Interests" },
  {
    type: "ulist",
    text: [
      `Public Transit`,
      "Vision Zero",
      "Bicycling",
      "Infrastructure",
      `Running`,
      `Psychology`,
      `Snowboarding & Skiing`,
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
      "The Death and Life of Great American Cities - Jane Jacobs",
      "Don't Make Me Think - Steve Krug",
      "Wedding Toasts I'll Never Give - Ada Calhoun",
      "Learned Optimism - Martin Seligman",
      "Happy City - Charles Montgomery",
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
