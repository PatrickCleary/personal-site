import React, { useContext, useEffect, useRef, useState } from "react";
import { Interests } from "../AboutMenu/Interests";
import "../animations.css";
import { WindowContext } from "../WindowContext";
import { AboutMenuItems } from "./AboutMenuItems";

export const AboutMenu = () => {
  const [selected, setSelected] = useState(-1);
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
          backgroundColor: "#ffffff30",
          columnGap: "0.25rem",
          rowGap: "0.25rem",
        }}
      >
        <AboutMenuItems
          index={0}
          ref={menuItemOne}
          name="Why UX Design?"
          selected={selected}
          setSelected={setSelected}
        />
        <AboutMenuItems
          index={1}
          ref={menuItemTwo}
          name="Stuff I Like"
          selected={selected}
          setSelected={setSelected}
        >
          <Interests />
        </AboutMenuItems>
        <AboutMenuItems
          index={2}
          ref={menuItemThree}
          name="Software Experience"
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
};
