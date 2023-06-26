import React, { useRef } from "react";

// I didn't end up using this, but I like it so will keep for now.
export const More = () => {
  const listRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={listRef}
      className="No-Display"
      style={{
        justifyContent: "center",
        width: "100%",
        height: "100%",
        alignItems: "flex-end",
        overflow: "hidden",
      }}
    ></div>
  );
};
