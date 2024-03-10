import type { SetStateAction } from "react";
import React, { useContext } from "react";
import Headshot from "../Images/Headshot.png";
import "../animations.css";
import "./AboutMe.css";
import { WindowContext } from "../WindowContext";
import { AboutMenu } from "../Components/AboutMenu";
import type { PageNames } from "../AboutMenu/Pages";
import { Header } from "../Components/Header";

interface AboutMeProps {
  page: PageNames;
  clicked: boolean;
  setPage: React.Dispatch<SetStateAction<PageNames>>;
}

export const AboutMe = React.forwardRef<HTMLDivElement, AboutMeProps>(
  ({ page, setPage, clicked }, ref) => {
    const { clientWidth, mobile } = useContext(WindowContext);
    return (
      <div className="About-Me relative" ref={ref}>
        <Header title={"about"} clicked={clicked} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: mobile ? "column" : "row",
            gap: "4rem",
            padding: "2rem",
            width: "66%",
          }}
        >
          <img
            className="Headshot"
            height={`${
              mobile
                ? `${Math.min(clientWidth * 0.65, 240)}px`
                : clientWidth * 0.2
            }px`}
            width={`${
              mobile
                ? `${Math.min(clientWidth * 0.65, 240)}px`
                : clientWidth * 0.2
            }px`}
            style={{
              borderRadius: "0.25rem",
              alignItems: mobile ? "center" : "flex-start",
            }}
            src={Headshot}
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
