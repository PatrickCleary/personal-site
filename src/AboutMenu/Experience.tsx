import React from "react";
import type { ContentItem } from "./Pages";
export const experience: ContentItem[] = [
  {
    type: "custom",
    content: (
      <p>
        I started my career as a backend software engineer working at Amazon. I
        have since discovered that my interests fall more on the product side of
        software. I built{" "}
        <a href="https://dashboard-v4-beta.labs.transitmatters.org/">
          this dashboard
        </a>{" "}
        for a non-profit and now I am looking for a role as a product designer
        or product manager.
        <br />
      </p>
    ),
  },
  { type: "button", label: "GitHub", href: "https://github.com/PatrickCleary" },
  { type: "button", label: "Resume", href: "/resume.pdf" },
];
