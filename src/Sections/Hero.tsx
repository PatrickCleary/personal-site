import React, { useContext } from "react";
import { ReactComponent as NamePlateSVG } from "../Images/NamePlate.svg";
import { ReactComponent as NamePlateSVGMobile } from "../Images/NamePlateMobile.svg";
import { WindowContext } from "../WindowContext";

export const Hero = () => {
  const { clientHeight, clientWidth, mobile } = useContext(WindowContext);
  // Save height to prevent height from changing on mobile when the bottom nav bar disappears.
  const height = React.useMemo(() => clientHeight, [clientHeight]);

  return (
    <>
      <div
        className="NamePlateBackground"
        style={{
          backgroundAttachment: "fixed",
          display: "flex",
          height: height,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {mobile ? (
          <NamePlateSVGMobile
            className="NamePlate"
            width={0.85 * clientWidth}
            style={{ position: "fixed", zIndex: 0 }}
          />
        ) : (
          <NamePlateSVG
            className="NamePlate"
            width={0.85 * clientWidth}
            style={{ position: "fixed", zIndex: 0 }}
          />
        )}
      </div>
    </>
  );
};
