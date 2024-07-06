import React from "react";
export const Footer = () => {
  return (
    <div
      style={{
        bottom: "0px",
        padding: ".5rem",
        display: "flex",
      }}
      className="justify-center w-full"
    >
      <p
        style={{ fontSize: ".8rem" }}
      >{`© Patrick Cleary ${new Date().getFullYear()}`}</p>
    </div>
  );
};
