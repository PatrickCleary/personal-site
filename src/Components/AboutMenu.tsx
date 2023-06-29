import type { SetStateAction } from "react";
import React, { useContext, useRef } from "react";
import type { PageNames } from "../AboutMenu/Pages";
import "../animations.css";
import { WindowContext } from "../WindowContext";
import { AboutMenuItems } from "./AboutMenuItems";

interface AboutMenuProps {
  page: PageNames;
  setPage: React.Dispatch<SetStateAction<PageNames>>;
}

export const AboutMenu: React.FC<AboutMenuProps> = ({ page, setPage }) => {
  const { mobile } = useContext(WindowContext);
  const menuRef = useRef(null);

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: mobile ? "column" : "row",
          padding: mobile ? "1rem" : "2rem 0px 0px",
          alignSelf: "center",
        }}
      >
        <div
          ref={menuRef}
          style={{
            display: "flex",
            width: "100%",
            flexDirection: mobile ? "column" : "row",
            rowGap: "1rem",
            columnGap: "1rem",
          }}
        >
          <AboutMenuItems
            name="more"
            title="More"
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
    </>
  );
};
