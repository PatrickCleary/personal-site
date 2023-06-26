import type { SetStateAction } from "react";
import React, { useRef } from "react";
import type { PageNames } from "../AboutMenu/Pages";

interface AboutMenuItemsProps {
  name: PageNames;
  title: string;
  page: PageNames;
  setPage: React.Dispatch<SetStateAction<PageNames>>;
}

export const AboutMenuItems = React.forwardRef<
  HTMLDivElement,
  AboutMenuItemsProps
>(({ name, title, page, setPage }) => {
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
