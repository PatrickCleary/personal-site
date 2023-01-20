import React, {
  useRef,
  useEffect,
  useContext,
  SetStateAction,
} from "react";
import Headshot from "../Images/Headshot.png";
import "../animations.css";
import "./AboutMe.css";
import { WindowContext } from "../WindowContext";
import { AboutMenu } from "../Components/AboutMenu";
import Header from "../Components/Header";
import { PageNames } from "../AboutMenu/Pages";

interface AboutMeProps {
  page: PageNames;
  setPage: React.Dispatch<SetStateAction<PageNames>>;
}

const AboutMe: React.FC<AboutMeProps> = ({page, setPage}) => {
  const { clientWidth, mobile } = useContext(WindowContext);
  const topRowRef = useRef<HTMLDivElement>(null);
  const headshotRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("No-Show");
            entry.target.classList.add("AboutMe-Top-Row-Fade-In");
          }
        });
      },
      {
        root: null,
        threshold: 0.75,
      }
    );

    if (topRowRef.current) {
      observer.observe(topRowRef.current);
    }

    if (headshotRef.current) {
      observer.observe(headshotRef.current);
    }
  }, [topRowRef, headshotRef, mobile]);

  return (
    <div className="About-Me">
      <Header title={"ABOUT ME"} colorOne={"#081b38"} colorTwo={"#040a12"} />
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
          className="No-Show Headshot"
          ref={headshotRef}
          height={`${
            mobile
              ? `${Math.min(clientWidth * 0.65, 240)}px`
              : clientWidth * 0.25
          }px`}
          width={`${
            mobile
              ? `${Math.min(clientWidth * 0.65, 240)}px`
              : clientWidth * 0.25
          }px`}
          style={{
            borderRadius: "0.5rem",
            alignItems: mobile ? "center" : "flex-start",
          }}
          src={Headshot}
          alt="CarGoLogo"
        />
        <div ref={topRowRef} className="About-Me-Text No-Show">
          <p style={{ fontSize: mobile ? "1rem" : "1.6em" }}>
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
            , and now a UX/UI{" "}
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
            This multidisciplinary experience allows me to understand the needs
            of the users in a unique way, and deliver on all aspects of a
            project.
          </p>
          <AboutMenu page={page} setPage={setPage} />
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default AboutMe;
