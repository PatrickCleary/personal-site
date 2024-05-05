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
        className="z-10 relative pt-16 pb-16 flex flex-col bg-slate-950 backdrop-blur-lg bg-opacity-90"
        ref={ref}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: mobile ? "column" : "row",
            gap: "4rem",
            padding: "2rem",
          }}
        >
          <img
            className="Headshot"
            height={`${
              mobile
                ? `${Math.min(clientWidth * 0.45, 240)}px`
                : clientWidth * 0.15
            }px`}
            width={`${
              mobile
                ? `${Math.min(clientWidth * 0.45, 240)}px`
                : clientWidth * 0.15
            }px`}
            style={{
              alignItems: mobile ? "center" : "flex-start",
            }}
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
