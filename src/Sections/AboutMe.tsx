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
      <div className="About-Me" ref={ref}>
        <Header title={"ABOUT"} clicked={clicked} />
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
              I have experience as a full-stack software{" "}
              <b
                style={{
                  fontFamily: "ChillaxBold",
                  position: "relative",
                  borderRadius: "100px",
                }}
              >
                engineer
              </b>
              , a startup{" "}
              <b
                style={{
                  fontFamily: "ChillaxBold",
                  position: "relative",
                  borderRadius: "100px",
                }}
              >
                founder
              </b>
              , and a UX/UI{" "}
              <b
                style={{
                  fontFamily: "ChillaxBold",
                  position: "relative",
                  borderRadius: "100px",
                }}
              >
                designer
              </b>
              .
              <br />
              <br />
              This multidisciplinary experience allows me to understand the
              needs of users in a unique way, and deliver on all aspects of a
              project.
            </p>
            <AboutMenu page={page} setPage={setPage} />
          </div>
        </div>
        <div></div>
      </div>
    );
  }
);
