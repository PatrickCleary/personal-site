import React from "react";
import type { ContentItem } from "../AboutMenu/Pages";
import desktopScreen from "../Images/bbdata_dt.png";

export const bbdata: ContentItem[] = [
  { type: "h", text: "Blue Bike Data" },
  { type: "img", location: desktopScreen },
  {
    type: "custom",
    content: (
      <p className="pt-4">
        Blue Bike data is a web app I have been building to provide insight into
        the micromobility network in Boston, MA.
        <br />
        <br />
        <a className="text-sky-400" href="https://dev.bluebikedata.com">
          Check it out
        </a>
      </p>
    ),
  },
];
