import React, { useContext, useEffect, useRef } from "react";
import "./Header.css";
import { WindowContext } from "../WindowContext";

interface HeaderProps {
  title: string;
  colorOne: string;
  colorTwo: string;
}

const Header: React.FC<HeaderProps> = ({ title, colorOne, colorTwo }) => {
  const headerRef = useRef(null);
  const { mobile, clientHeight } = useContext(WindowContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("Invisible");
            entry.target.classList.add("Slide-Up");
          }
        });
      },
      {
        root: null,
        rootMargin: mobile ? '-25px' : '-25%',
        threshold: .90,
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
      style={{ width: mobile ? "95%" : "40%", alignSelf: "center" }}
    >
      <h1
        className="Title"
        style={{
          fontSize: mobile ? "2em" : "4em",
          backgroundImage: `linear-gradient(to top, ${colorTwo}, ${colorOne})`,
        }}
      >
        {title}
      </h1>
    </div>
  );
};

export default Header;
