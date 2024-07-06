import type { SetStateAction } from "react";
import React from "react";

interface NavBarProps {
  refs: React.RefObject<HTMLDivElement>[];
  setClicked: React.Dispatch<SetStateAction<number>>;
}

export const NavBar: React.FC<NavBarProps> = ({ refs, setClicked }) => {
  const navBarOptions = ["About", "Portfolio", "Contact"];

  return (
    <div className="w-full justify-center items-center fixed top-0 flex z-50 md:fixed md:top-0 md:right-0 md:w-auto">
      <div className="flex w-full md:w-auto flex-row md:flex-col justify-center md:justify-end bg-dark md:bg-transparent px-4 md:px-0 py-1 md:py-0 rounded-md cursor-pointer select-none gap-2 md:mr-2  md:mt-2">
        {navBarOptions.map((option, index) => {
          return (
            <div
              key={index}
              className="md:px-6 w-full text-sm py-1 rounded-sm border-light border-opacity-20 border-b-[1px] bg-dark md:bg-transparent box-border hover:bg-light hover:bg-opacity-30"
              onClick={() => {
                refs[index]?.current?.scrollIntoView();
                setClicked(index);
              }}
            >
              <p style={{ textAlign: "center", fontSize: ".80rem" }}>
                {option}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
