import React, { useContext, useEffect, useRef } from "react";
import { ReactComponent as NamePlateSVG } from "../Images/NamePlate.svg";
import { ReactComponent as NamePlateSVGMobile } from "../Images/NamePlateMobile.svg";
import { WindowContext } from "../WindowContext";

export const Hero = () => {
  const aboutMeRef = useRef<HTMLParagraphElement>(null);
  const { clientHeight, clientWidth, mobile } = useContext(WindowContext);
  // Save height to prevent height from changing on mobile when the bottom nav bar disappears.
  const height = React.useMemo( () => clientHeight, [] );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
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

  
  return (
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
          background: "linear-gradient(#040a1200, #040a12ff)",
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
  );
};
