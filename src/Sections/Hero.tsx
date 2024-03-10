import React, { useContext } from "react";
import { ReactComponent as NamePlateSVGMobile } from "../Images/NamePlateMobile.svg";
import { WindowContext } from "../WindowContext";

export const Hero = () => {
  const { clientHeight, clientWidth, mobile } = useContext(WindowContext);
  // Save height to prevent height from changing on mobile when the bottom nav bar disappears.
  const height = React.useMemo(() => clientHeight, [clientHeight]);
  return (
    <>
      <div className="bg-sky-100 h-[100svh] w-[100vw]">
        {mobile ? (
          <NamePlateSVGMobile
            className="NamePlate"
            width={0.85 * clientWidth}
            style={{ position: "fixed", zIndex: 0 }}
          />
        ) : (
          <h2
            className="text-[320px] fixed top-0 leading-5 text-neutral-950"
            style={{ fontFamily: "RegerexSemiBold" }}
          >
            PATRICK
          </h2>
        )}
      </div>
    </>
  );
};
