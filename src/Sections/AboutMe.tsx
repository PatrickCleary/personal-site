import type { SetStateAction } from "react";
import React, { useContext } from "react";
import "../animations.css";
import "./AboutMe.css";
import { WindowContext } from "../WindowContext";
import { AboutMenu } from "../Components/AboutMenu";
import type { PageNames } from "../AboutMenu/Pages";

interface AboutMeProps {
  page: PageNames;
  clicked: boolean;
  setPage: React.Dispatch<SetStateAction<PageNames>>;
}

export const AboutMe = React.forwardRef<HTMLDivElement, AboutMeProps>(
  ({ page, setPage, clicked }, ref) => {
    const { clientWidth, mobile } = useContext(WindowContext);
    return (
      <div
        className=" flex items-center z-10 relative pb-8 pt-8 lg:pt-16 lg:pb-16 flex-col bg-slate-950 backdrop-blur-lg bg-opacity-90"
        ref={ref}
      >
        <div className="max-w-[940px] w-full flex lg:items-center items-center lg:flex-row flex-col gap-8 h-fit px-4 lg:px-0">
          <img
            className="lg:items-start items-center rounded-sm h-64 w-64"
            src={"/headshot_1k.jpg"}
            alt="Headshot"
          />
          <div className="md:p-4 flex flex-col">
            <p>
              Patrick is a technology and design generalist – capable of
              developing and building aesthetic software solutions to complex
              problems. He specializes in city planning and urban design tools.
              <br />
              <br />
              Patrick's work on transportation has been used as a data source in
              the{" "}
              <a
                className="text-sky-500"
                href="https://www.bostonglobe.com/2023/08/23/metro/red-line-mbta-is-the-worst/"
              >
                Boston Globe
              </a>{" "}
              and on{" "}
              <a
                className="text-sky-500"
                href="https://www.cbsnews.com/boston/news/mbta-red-line-closure-slow-zone-travel-time/"
              >
                CBS
              </a>
              .
            </p>
            <AboutMenu page={page} setPage={setPage} />
          </div>
        </div>
        <div></div>
      </div>
    );
  }
);
