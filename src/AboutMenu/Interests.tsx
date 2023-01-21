import React, { useContext, useEffect, useRef } from "react";
import { WindowContext } from "../WindowContext";


// I didn't end up using this, but I like it so will keep for now.
export const Interests = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const { mobile } = useContext(WindowContext);
  useEffect(() => {
    if (listRef) {
      staggerEffects(listRef);
    }
  }, [listRef]);

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const staggerEffects = async (listRef: React.RefObject<HTMLDivElement>) => {
    await sleep(1000);
    if (listRef.current) listRef.current.classList.remove("Invisible");
    if (listRef.current) listRef.current.classList.add("Grid");
    const interestItems =
      listRef.current?.getElementsByClassName("Interests") || [];
    for (let i = 0; i < interestItems.length; i++) {
      interestItems[i].classList.remove("Fade-Out");
      interestItems[i].classList.add("Fade-In");
      await sleep(1000);
      interestItems[i].classList.remove("Fade-In");
      interestItems[i].classList.add("Fade-Out");
      await sleep(randomSleep());
    }
    await sleep(1000);
    staggerEffects(listRef);
  };

  const randomSleep = () => {
    return Math.random() * 500 + 250;
  };

  const randomOffset = () => {
    return Math.random() * 90;
  };

  return (
    <div
      ref={listRef}
      className="No-Display"
      style={{
        justifyContent: "center",
        width: "100%",
        height: "100%",
        alignItems: "flex-end",
        overflow: "hidden",
      }}
    >
      {/* {InterestsList.map((interest) => {
        return (
          <p
            className="Interests"
            key={interest}
            style={{
              textAlign: "center",
              fontSize: mobile ? "2rem" : "4rem",
              opacity: 0,
              gridArea: "1 / 1",
              top: `-${randomOffset()}%`,
              position: "relative",
            }}
          >
            {interest}
          </p>
        );
      })} */}
    </div>
  );
};
