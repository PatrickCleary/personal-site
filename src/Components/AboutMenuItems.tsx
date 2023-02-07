import React, { SetStateAction, useContext, useRef, useState } from "react";
import { PageNames } from "../AboutMenu/Pages";

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
  const [location, setLocation] = useState<DOMRect | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const isSelected = name === page;

  return (
    <div
      ref={ref}
      className={"About-Menu-Item"}
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
      <p
        style={{
          textAlign: "center",
          fontFamily: "chillax",
        }}
      >
        {title}
      </p>
    </div>
  );
});
