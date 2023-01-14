import React, { useRef, useEffect, useContext } from "react";
import Headshot from "../Images/IMG_3836.jpg";
import "../animations.css";
import "./AboutMe.css";
import { WindowContext } from "../WindowContext";
import { AboutMenu } from "../Components/AboutMenu";
import Header from "../Components/Header";

const AboutMe = () => {
  const { clientWidth, mobile } = useContext(WindowContext);
  const topRowRef = useRef<HTMLImageElement>(null);
  
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
        threshold: .75,
      }
    );

    if (topRowRef.current) {
      observer.observe(topRowRef.current);
    }
  }, [topRowRef, mobile]);

  return (
    <div
      style={{
        zIndex: 1,
        position: "relative",
        background: "linear-gradient(to top, #0b0e11, #1d2229)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <Header title={"ABOUT ME"} colorOne={"#8366cc"} colorTwo={"#4a15cf"} />
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          flexDirection: mobile ? "column" : "row",
          gap: "4rem",
          padding: "2rem",
        }}
      >
        <img
          height={`${
            mobile ? `${clientWidth * 0.65}px` : clientWidth * 0.25
          }px`}
          width={`${mobile ? `${clientWidth * 0.65}px` : clientWidth * 0.25}px`}
          style={{
            borderRadius: "0.5rem",
            alignItems: mobile ? "center" : "flex-start",
          }}
          className="Headshot"
          src={Headshot}
          alt="CarGoLogo"
        />
        <div ref={topRowRef} className="About-Me-Text No-Show">
          <p style={{fontSize: mobile? '1rem' : '1.6em'}}>
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
            This multidisciplinary experience allows me to understand the needs of
            the users in a unique way, and deliver on all aspects of a project.
          </p>
          <AboutMenu />
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default AboutMe;
