import React, { useContext, useEffect, useRef } from "react";
import "./Header.css";
import "../animations.css";
import { WindowContext } from "../WindowContext";

interface HeaderProps {
  title: string;
  colorOne: string;
  colorTwo: string;
}

const Header: React.FC<HeaderProps> = ({ title, colorOne, colorTwo }) => {
  const headerRef = useRef(null);
  const { mobile } = useContext(WindowContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("Invisible");
            entry.target.classList.add("Flow-In");
          }
        });
      },
      {
        root: null,
        rootMargin: mobile ? '-25px' : '-15%',
        threshold: 1,
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
  }, [headerRef, mobile]);

  return (
    <div
      ref={headerRef}
      className="Header Invisible"
      style={{ width: mobile ? "85%" : "40%", alignSelf: "center", marginBottom: mobile ? '2rem' : '6rem',   background: `radial-gradient(ellipse at top, #000, transparent), radial-gradient(ellipse at bottom, #303030, transparent)` }}
    >
      <h1
        className="Title"
        style={{
          fontSize: mobile ? "3rem" : "4rem",
          backgroundImage: `linear-gradient(to top, ${colorTwo}, ${colorOne})`,
        }}
      >
        {title}
      </h1>
    </div>
  );
};

export default Header;
