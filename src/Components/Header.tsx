import React, { useContext, useEffect, useRef } from "react";
import "./Header.css";
import "../animations.css";
import { WindowContext } from "../WindowContext";

interface HeaderProps {
  title: string;
  clicked?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, clicked }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const { mobile } = useContext(WindowContext);

  if (clicked && headerRef.current) {
    headerRef.current.classList.remove("Invisible");
    headerRef.current.classList.add("Flow-In");
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("Invisible");
            entry.target.classList.add("Flow-In");
          }
        });
      },
      {
        root: null,
        rootMargin: mobile ? "-25px" : "-15%",
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
      style={{
        width: mobile ? "85%" : "40%",
        marginBottom: mobile ? "2rem" : "4rem",
      }}
    >
      <h1
        className="Title"
        style={{
          fontSize: mobile ? "3rem" : "4rem",
        }}
      >
        {title}
      </h1>
    </div>
  );
};
