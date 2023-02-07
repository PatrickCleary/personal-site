import React, { SetStateAction, useContext, useEffect, useRef } from "react";
import { Interests } from "../AboutMenu/Interests";
import { PageNames } from "../AboutMenu/Pages";
import "../animations.css";
import { WindowContext } from "../WindowContext";
import { AboutMenuItems } from "./AboutMenuItems";

interface AboutMenuProps {
  page: PageNames;
  setPage: React.Dispatch<SetStateAction<PageNames>>;
}

export const AboutMenu: React.FC<AboutMenuProps> = ({ page, setPage }) => {
  const { mobile } = useContext(WindowContext);
  const menuRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("Invisible");
            entry.target.classList.add("Fade-In");
          }
        });
      },
      {
        root: null,
        rootMargin: mobile ? "-45px" : "-15%",
        threshold: 0.75,
      }
    );

    if (menuRef.current) {
      observer.observe(menuRef.current);
    }
  }, [menuRef, mobile]);

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: mobile ? "column" : "row",
          padding: mobile ? "1rem" : "2rem 0px 0px",
          alignSelf: "center",
        }}
      >
        <div
          ref={menuRef}
          className="Invisible"
          style={{
            display: "flex",
            width: "100%",
            flexDirection: mobile ? "column" : "row",
            rowGap: "1rem",
            columnGap: "1rem",
          }}
        >
          <AboutMenuItems
            name="uxdesign"
            title="Why UX Design?"
            page={page}
            setPage={setPage}
          />
          <AboutMenuItems
            name="interests"
            title="Interests"
            page={page}
            setPage={setPage}
          >
            <Interests />
          </AboutMenuItems>
          <AboutMenuItems
            name="software"
            title="Software Experience"
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </>
  );
};
