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
      className="w-full group px-2 py-1 rounded-sm border border-light border-opacity-20 bg-light bg-opacity-10 box-border flex cursor-pointer items-center justify-center hover:bg-opacity-100 hover:text-dark"
      onClick={() => {
        if (!isSelected) {
          setPage(name);
          document.body.style.overflow = "hidden";
        }
      }}
    >
      <p className="text-center group-hover:text-dark" style={{}}>
        {title}
      </p>
    </div>
  );
});
