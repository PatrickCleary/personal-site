import React, { useContext, useEffect, useRef, useState } from "react";
import "../animations.css";
import { WindowContext } from "../WindowContext";
import { AboutMenuItems } from "./AboutMenuItems";

export const AboutMenu = () => {
  const [selected, setSelected] = useState(0);
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
    setTimeout(
      () => {
        console.log(elements[index], index);
        elements[index].current?.classList.remove("Invisible");
        elements[index].current?.classList.add("Flow-In");
        staggerEffects(elements, index + 1);
      },
      mobile ? 250 : 250
    );
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
        rootMargin: mobile ? "-10px" : "-15%",
        threshold: 0.9,
      }
    );

    if (menuRef.current) {
      observer.observe(menuRef.current);
    }
  }, [menuRef, menuItemRefs, mobile]);

  return (
    <div
      style={{
        padding: mobile ? "1rem" : "0px",
        display: "flex",
        flexDirection: mobile ? "column" : "row",
        paddingTop: "4em",
        alignSelf: "center",
      }}
    >
      <div
        ref={menuRef}
        className="Invisible"
        style={{
          display: "flex",
          flexDirection: mobile ? "column" : "row",
          padding: "0.5em",
          borderRadius: "1em",
          backgroundColor: "#ffffff30",
          columnGap: "0.5rem",
          rowGap: "0.5rem",
        }}
      >
        <AboutMenuItems
          index={0}
          ref={menuItemOne}
          name="Why UX design?"
          selected={selected}
          setSelected={setSelected}
        />
        <AboutMenuItems
          index={1}
          ref={menuItemTwo}
          name="Other Interests"
          selected={selected}
          setSelected={setSelected}
        />
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
