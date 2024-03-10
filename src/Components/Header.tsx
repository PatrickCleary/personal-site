import React, { useContext, useEffect, useRef } from "react";
import "./Header.css";
import "../animations.css";
import { WindowContext } from "../WindowContext";
import { headerImages } from "../Constants/Headers";

interface HeaderProps {
  title: "contact" | "portfolio" | "about";
  clicked?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, clicked }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const { mobile } = useContext(WindowContext);
  const TitleImage = headerImages[title];

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
      className="rounded-sm flex flex-col gap-4 absolute z-100 right-0 top-0"
      // style={{
      //   width: "100%",
      //   alignSelf: "center",
      //   marginBottom: mobile ? "2rem" : "4rem",
      // }}
    >
      <TitleImage className="w-12 opacity-70" />
      <TitleImage className="w-12 opacity-70" />
      <TitleImage className="w-12 opacity-70" />
      <TitleImage className="w-12 opacity-70" />
      <TitleImage className="w-12 opacity-70" />
      <TitleImage className="w-12 opacity-70" />
    </div>
  );
};
