import React, {
  SetStateAction,
  useContext,
  useRef,
  useState,
} from "react";
import { PageNames } from "../AboutMenu/Pages";
import { WindowContext } from "../WindowContext";

interface AboutMenuItemsProps {
  name: PageNames;
  title: string;
  page: PageNames;
  setPage: React.Dispatch<SetStateAction<PageNames>>;
  children?: React.ReactNode;
}

export const AboutMenuItems = React.forwardRef<
  HTMLDivElement,
  AboutMenuItemsProps
>(({ name, title, page, setPage, children }, ref) => {
  const { mobile } = useContext(WindowContext);
  const [location, setLocation] = useState<DOMRect | null>(null);
  const refTwo = useRef<HTMLDivElement | null>(null);
  const isSelected = name === page;

  return (
    <div
      ref={(element) => {
        refTwo.current = element;
        if (typeof ref === "function") {
          ref(element);
        } else if (ref) {
          ref.current = element;
        }
      }}
      className={`About-Menu-Item Invisible`}
      onClick={() => {
        if (!isSelected) {
          setPage(name);
          document.body.style.overflow = "hidden";
          if (refTwo.current) {
            setLocation(refTwo.current.getBoundingClientRect());
          }
        }
      }}
    >
      <div
        className={`Inner-About-Menu-Item Not-Expanded-Div`}
        style={{
          flexDirection: mobile ? "column" : "row",
          alignItems: "center",
          display: "flex",
          top: `-${location?.y || 0}px`,
          left: `-${location?.x || 0}px`,
          width: "100%",
          height: "100%",
        }}
      >
          <p
            style={{
              fontSize: mobile ? ".8rem" : "1.6rem",
              textAlign: "center",
            }}
          >
            {title}
          </p>
      </div>
    </div>
  );
});
