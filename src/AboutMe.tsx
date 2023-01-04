import React, { useRef, useEffect, useContext } from "react";
import Headshot from "./Images/IMG_3836.jpg";
import "./animations.css";
import "./AboutMe.css";
import { WindowContext } from "./WindowContext";
import { AboutMenu } from "./Components/AboutMenu";
import Header from "./Components/Header";

const AboutMe = () => {
  const { clientHeight, clientWidth, mobile } = useContext(WindowContext);
  const topRowRef = useRef<HTMLImageElement>(null);
  const wordOneRef = useRef<HTMLParagraphElement>(null);
  const wordTwoRef = useRef<HTMLParagraphElement>(null);
  const wordThreeRef = useRef<HTMLParagraphElement>(null);
  const wordRefs = [wordOneRef, wordTwoRef, wordThreeRef];

  const staggerEffects = (
    elements: React.RefObject<HTMLParagraphElement>[],
    index: number
  ) => {
    if (index >= elements.length) return;
    setTimeout(
      () => {
        elements[index].current?.classList.remove("Invisible");
        elements[index].current?.classList.add("Flow-In");
        staggerEffects(elements, index + 1);
      },
      mobile ? 1000 : 500
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("No-Show");
            entry.target.classList.add("AboutMe-Top-Row-Fade-In");
            staggerEffects(wordRefs, 0);
          }
        });
      },
      {
        root: null,
        threshold: mobile ? 0.2 : 0.5,
      }
    );

    if (topRowRef.current) {
      observer.observe(topRowRef.current);
    }
  }, [topRowRef]);

  return (
    <div
      style={{
        zIndex: 1,
        position: "relative",
        background: "linear-gradient(to top, #0b0e11, #1d2229)",
        paddingTop: "8em",
        paddingBottom: "8em",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <Header title={"About Me"} colorOne={"#ffffff"} colorTwo={"#ffffff20"} />
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          alignItems: mobile ? "center" : "flex-start",
          flexDirection: mobile ? "column" : "row",
          gap: "4rem",
          padding: "2rem",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <img
          height={`${mobile ? `${clientWidth * 0.65}px` : clientWidth * 0.25}px`}
          width={`${mobile ? `${clientWidth * 0.65}px` : clientWidth * 0.25}px`}
          style={{
            borderRadius: "0.5rem",
            alignItems: mobile ? "center" : "flex-start",
          }}
          className="Headshot"
          src={Headshot}
          alt="CarGoLogo"
        />
        <div ref={topRowRef} className="No-Show">
          <p>
            I have experience as
            <br />
            a full-stack software <br />
            <b
              className="Invisible"
              ref={wordOneRef}
              style={{ fontFamily: "ChillaxBold", position: "relative", borderRadius:'100px' }}
            >
              engineer
            </b>
            {mobile ? <br /> : null}
            <br />a startup <br />
            <b
              className="Invisible"
              ref={wordTwoRef}
              style={{ fontFamily: "ChillaxBold", position: "relative", borderRadius:'100px' }}
            >
              founder
            </b>
            {mobile ? <br /> : null}
            <br />
            and now a UX/UI
            <br />
            <b
              className="Invisible"
              ref={wordThreeRef}
              style={{ fontFamily: "ChillaxBold", position: "relative", borderRadius:'100px' }}
            >
              designer
            </b>
            {mobile ? <br /> : null}
            <br />
            <br /> This multidisciplinary experience helps me understand the
            needs of the users in a unique way, and deliver on all aspects of a
            project.
          </p>
        </div>
      </div>
      <AboutMenu />
      <div></div>
    </div>
  );
};
export default AboutMe;
