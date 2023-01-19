import React, { SetStateAction, useContext, useEffect, useRef} from "react";
import { Interests } from "../AboutMenu/Interests";
import { PageNames} from "../AboutMenu/Pages";
import "../animations.css";
import { WindowContext } from "../WindowContext";
import { AboutMenuItems } from "./AboutMenuItems";

interface AboutMenuProps {
  page: PageNames;
  setPage: React.Dispatch<SetStateAction<PageNames>>;
}

export const AboutMenu: React.FC<AboutMenuProps> = ({page, setPage}) => {
  const { mobile } = useContext(WindowContext);
  const menuRef = useRef(null);
  const menuItemOne = useRef(null);
  const menuItemTwo = useRef(null);
  const menuItemThree = useRef(null);
  const menuItemRefs = [menuItemOne, menuItemTwo, menuItemThree];

  const staggerEffects = (
    elements: React.RefObject<HTMLParagraphElement>[],
    index: number
  ) => {
    if (index >= elements.length) return;
    setTimeout(() => {
      elements[index].current?.classList.remove("Invisible");
      elements[index].current?.classList.add("Flow-In");
      staggerEffects(elements, index + 1);
    }, 250);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("Invisible");
            entry.target.classList.add("Fade-In");
            staggerEffects(menuItemRefs, 0);
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
  }, [menuRef, menuItemRefs, mobile]);

  return (
    <>
    <div
      style={{
        display: "flex",
        width: "75%",
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
          opacity: 1,
          flexDirection: mobile ? "column" : "row",
          padding: "0.25rem",
          borderRadius: ".75rem",
          backgroundColor: "#000",
          columnGap: "0.25rem",
          rowGap: "0.25rem",
        }}
      >
        <AboutMenuItems
          ref={menuItemOne}
          name="uxdesign"
          title="Why UX Design?"
          page={page}
          setPage={setPage}
        />
        <AboutMenuItems
          ref={menuItemTwo}
          name="interests"
          title="Interests"
          page={page}
          setPage={setPage}
        >
          <Interests />
        </AboutMenuItems>
        <AboutMenuItems
          ref={menuItemThree}
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
