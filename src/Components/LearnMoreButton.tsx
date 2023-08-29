import React from "react";
import "./LearnMoreButton.css";

interface LearnMoreButtonProps {
  setPage: (pageName?: string) => void;
}

export const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({
  setPage,
}) => {
  return (
    // Need this div to prevent .Learn-More-Div from expanding to 100% width.
    <div style={{ display: "flex" }}>
      <div
        className="flex flex-row items-center gap-x-8 rounded-sm border-2 border-light border-opacity-20 bg-light bg-opacity-10  cursor-pointer py-4 px-8 hover:bg-opacity-100 group"
        onClick={() => {
          setPage();
          document.body.style.overflow = "hidden";
        }}
      >
        <p className="group-hover:text-dark">Learn More</p>
      </div>
    </div>
  );
};
