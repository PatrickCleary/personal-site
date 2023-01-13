import React, { useEffect, useRef, useContext } from "react";
import "./App.css";
import CarGoLogo from "./Animations/CarGoBWCropped.png";
import { ReactComponent as NamePlateSVG } from "./Images/NamePlate.svg";
import { ReactComponent as NamePlateSVGMobile } from "./Images/NamePlateMobile.svg";
import AboutMe from "./AboutMe";
import { WindowContext } from "./WindowContext";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";

function App() {
  const logoRef = useRef<HTMLImageElement>(null);
  const aboutMeRef = useRef<HTMLParagraphElement>(null);
  const { clientHeight, clientWidth, mobile } = useContext(WindowContext);
  const height = React.useMemo( () => clientHeight, [] );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("Fade-Out");
          }
        });
      },
      {
        root: null,
        rootMargin: '-25%',
        threshold: 0,
      }
    );
    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }
  }, [aboutMeRef]);

  // TODO: move this to CarGo Page.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("No-Show");
            entry.target.classList.add(
              mobile ? "CarGo-Slide-In-Mobile" : "CarGo-Slide-In-Desktop"
            );
          }
        });
      },
      {
        root: null,
        rootMargin: "-25%",
        threshold: 0,
      }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }
  }, [mobile, logoRef]);

  return (
    <div className="App">
      <div
        className="NamePlateBackground"
        style={{
          backgroundAttachment: "fixed",
          display: "flex",
          height: height,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {mobile ? (
          <NamePlateSVGMobile
            className="NamePlate"
            width={0.85 * clientWidth}
            style={{ position: "fixed", zIndex: 0 }}
          />
        ) : (
          <NamePlateSVG
            className="NamePlate"
            width={0.85 * clientWidth}
            style={{ position: "fixed", zIndex: 0 }}
          />
        )}
        <div
          onClick={() => {
            window.scrollTo({ top: clientHeight, behavior: "smooth" });
          }}
          style={{
            display: "flex",
            position: "absolute",
            alignItems: "flex-end",
            justifyContent: "center",
            alignSelf: "flex-end",
            width: "100%",
            height: "10%",
            background: "linear-gradient(#1d222900, #1d2229ff)",
            cursor: "pointer",
          }}
        >
          <p
            ref={aboutMeRef}
            style={{
              zIndex: 5,
              fontSize: "1.2rem",
              color: "white",
            }}
          >
            About Me
          </p>
        </div>
      </div>
      <AboutMe />
      <Portfolio />
      <Contact />
{/*       
      <div className="CarGo" style={{ zIndex: 3, position: "relative" }}>
        <img
          ref={logoRef}
          className="CarGo-Logo No-Show"
          src={CarGoLogo}
          alt="CarGoLogo"
          height={Math.min(0.25 * clientHeight, 0.25 * clientWidth)}
          style={{ position: "relative" }}
        />
        <p className="PortfolioHeader">CarGo</p>
        <p>
          CarGo is an app that I designed and developed in collaboration with a
          small business owner. Our goal was to improve the reliability of his
          delivery driver workforce.
        </p>
      </div> */}
    </div>
  );
}

export default App;
