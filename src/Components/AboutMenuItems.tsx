import React, { SetStateAction, useContext, useRef, useState } from "react";
import { PageNames } from "../AboutMenu/Pages";
import { WindowContext } from "../WindowContext";

interface AboutMenuItemsProps {
  name: PageNames;
  title: string;
  page: PageNames;
  setPage: React.Dispatch<SetStateAction<PageNames>>;
  children?: React.ReactNode;
}

export const AboutMenuItems = React.forwardRef<
  HTMLDivElement,
  AboutMenuItemsProps
>(({ name, title, page, setPage, children }) => {
  const { mobile } = useContext(WindowContext);
  const [location, setLocation] = useState<DOMRect | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const isSelected = name === page;

  return (
    <div
      ref={ref}
      className={`About-Menu-Item`}
      onClick={() => {
        if (!isSelected) {
          setPage(name);
          document.body.style.overflow = "hidden";
          if (ref.current) {
            setLocation(ref.current.getBoundingClientRect());
          }
        }
      }}
    >
      <div
        className={`Inner-About-Menu-Item Not-Expanded-Div`}
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
        <p
          style={{
            fontSize: mobile ? ".8rem" : "1.6rem",
            textAlign: "center",
          }}
        >
          {title}
        </p>
      </div>
    </div>
  );
});
