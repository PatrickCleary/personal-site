import React, { useContext, useEffect, useRef, useState } from "react";
import { WindowContext } from "../WindowContext";

interface AboutMenuItemsProps {
  name: string;
  index: number;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  children?: React.ReactNode;
}

export const AboutMenuItems = React.forwardRef<
  HTMLDivElement,
  AboutMenuItemsProps
>(({ name, index, selected, setSelected, children }, ref) => {
  const { mobile, clientWidth, clientHeight } = useContext(WindowContext);

  const [location, setLocation] = useState<DOMRect | null>(null);
  const refTwo = useRef<HTMLDivElement | null>(null);
  const isSelected = selected === index;

  const headerWidth = () => {
    if (mobile) return "100%";
    return 0.2 * clientWidth;
  };

  const headerHeight = () => {
    if (mobile) return 0.1 * clientHeight;
    return "100%";
  };

  return (
    <div
      ref={(element) => {
        refTwo.current = element;
        if (typeof ref === "function") {
          ref(element);
        } else if (ref) {
          ref.current = element;
        }
      }}
      style={{ zIndex: isSelected ? 1 : 0 }}
      className={`About-Menu-Item Invisible`}
      onClick={() => {
        if (!isSelected) {
          setSelected(index);
          document.body.style.overflow = "hidden";
          if (refTwo.current) {
            setLocation(refTwo.current.getBoundingClientRect());
          }
        }
      }}
    >
      <div
        className={`Inner-About-Menu-Item ${
          isSelected ? "Expanded-Div" : "Not-Expanded-Div"
        }`}
        style={{
          flexDirection: mobile ? "column" : "row",
          alignItems: "center",
          display: "flex",
          top: `-${location?.y || 0}px`,
          left: `-${location?.x || 0}px`,
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className={`${isSelected ? "Title-Expanded" : "Title-Not-Expanded"} ${
            mobile ? "Menu-Item-Title-Mobile" : "Menu-Item-Title-DT"
          }`}
          style={{
            display: 'flex',
            flexDirection: mobile ? 'row-reverse' : 'column',

            width: !isSelected ? "" : headerWidth(),
            height: !isSelected ? "" : headerHeight(),
          }}
        >
          <p
            style={{
              fontSize: mobile ? ".8rem" : "1.6rem",
              textAlign: "center",
              paddingLeft: isSelected ? "2rem" : "",
            }}
          >
            {name}
          </p>
          {isSelected && (
            <div
            className={"Fade-In"}
              onClick={() => {
                document.body.style.overflow = "auto";
                setSelected(-1);
              }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <p
                style={{
                  fontSize: mobile ? ".6rem" : "1.4rem",

                  position: "absolute",
                  marginTop: "2rem",
                  textDecoration: "underline",
                  paddingLeft: "2rem",
                }}
              >
                back
              </p>
            </div>
          )}
        </div>
        {isSelected && children}
      </div>
    </div>
  );
});
