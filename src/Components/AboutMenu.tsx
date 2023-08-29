import type { SetStateAction } from "react";
import React from "react";
import type { PageNames } from "../AboutMenu/Pages";
import "../animations.css";
import { AboutMenuItems } from "./AboutMenuItems";

interface AboutMenuProps {
  page: PageNames;
  setPage: React.Dispatch<SetStateAction<PageNames>>;
}

export const AboutMenu: React.FC<AboutMenuProps> = ({ page, setPage }) => {
  return (
    <>
      <div className="flex w-full flex-col md:flex-row pt-4 self-center">
        <AboutMenuItems
          name="more"
          title="More"
          page={page}
          setPage={setPage}
        />
      </div>
    </>
  );
};
