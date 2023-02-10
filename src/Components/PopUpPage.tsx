import { useContext, useRef, useState } from "react";
import { PageNames, PageNamesNonNull, Pages } from "../AboutMenu/Pages";
import "./PopUpPage.css";
import { WindowContext } from "../WindowContext";
import { ReactComponent as Close } from "../Images/Close.svg";
import Figma from "../Images/Figma.png";
import Github from "../Images/Github.png";
import ScrollingAnimation from "./ScrollingAnimation";

interface PopUpPageProps {
  pageName: PageNamesNonNull;
  setPage: React.Dispatch<React.SetStateAction<PageNames>>;
}

export const PopUpPage: React.FC<PopUpPageProps> = ({ pageName, setPage }) => {
  const { mobile, clientHeight } = useContext(WindowContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const pageRef = useRef(null);

  const content = Pages[pageName].content;

  const renderContent = (contentItem: any) => {
    if (contentItem.type === "p")
      return (
        <p
          className={`CS-Paragraph ${
            mobile ? "CS-Paragraph-Mobile" : "CS-Paragraph-DT"
          }`}
          style={{ textAlign: contentItem.center ? "center" : "left" }}
        >
          {contentItem.text}
        </p>
      );
    if (contentItem.type === "a")
      return (
        <a href={contentItem.href}>
          <p
            className={`CS-Paragraph ${
              mobile ? "CS-Paragraph-Mobile" : "CS-Paragraph-DT"
            }`}
          >
            {contentItem.href}
          </p>
        </a>
      );
    if (contentItem.type === "h")
      return (
        <h3
          className={`CS-Header ${
            mobile ? "CS-Header-Mobile" : "CS-Header-DT"
          }`}
        >
          {contentItem.text}
        </h3>
      );
    if (contentItem.type === "button")
      return (
        <a href={contentItem.href} style={{ textDecoration: "none" }}>
          <div
            style={{
              backgroundColor: "#fff",

              alignItems: "center",
              boxShadow: "2px 2px 2px #dfdfdf",
              display: "flex",
              justifyContent: "center",
              margin: "1rem",
            }}
          >
            <p style={{ color: "#000" }}>{contentItem.label}</p>
          </div>
        </a>
      );
    if (contentItem.type === "img")
      return (
        <img
          src={contentItem.location}
          width={mobile ? "85%" : "75%"}
          alt={contentItem.caption}
        />
      ); //TODO: add Alt text
    if (contentItem.type === "list") {
      return (
        <ol>
          {contentItem.text.map((listItem: any, index: number) => {
            if (listItem.element) {
              return listItem.element;
            }
            return (
              <p
                className={mobile ? "CS-Paragraph-Mobile" : "CS-Paragraph-DT"}
              >{`${index + 1}. ${listItem}`}</p>
            );
          })}
        </ol>
      );
    }
    if (contentItem.type === "ulist") {
      return (
        <ul>
          {contentItem.text.map((listItem: any, index: number) => {
            return (
              <li style={{ color: "white" }}>
                <p
                  className={mobile ? "CS-Paragraph-Mobile" : "CS-Paragraph-DT"}
                >
                  {listItem}
                </p>
              </li>
            );
          })}
        </ul>
      );
    }
    if (contentItem.type === "links") {
      return (
        <div className={`Links ${mobile ? "Links-Mobile" : "Links-DT"}`}>
          {contentItem.figmaLink && (
            <div className={`Figma Link ${mobile && "Link-Mobile"}`}>
              <a
                href={`https://www.figma.com/file/bLBzzBX3r6tG2CoS6vWglD/Dashboard---V4?node-id=1%3A55&t=ci7douClyjtiNNaG-1`}
              >
                <img src={Figma} className="Link-Icon" alt={"Figma Link"} />
              </a>
            </div>
          )}
          {contentItem.githubLink && (
            <div className={`Github Link ${mobile && "Link-Mobile"}`}>
              <a href="https://github.com/transitmatters/t-performance-dash/tree/dashboard-v4">
                <img src={Github} className="Link-Icon" alt={"Github Link"} />
              </a>
            </div>
          )}
        </div>
      );
    }
    if (contentItem.type === "custom") {
      return mobile && contentItem.mobile
        ? contentItem.mobile
        : contentItem.content;
    }
  };

  const handleScroll = (pageRef: React.MutableRefObject<any>) => {
    const scrollPosition = pageRef.current.scrollTop; // => scroll position
    const pageWidth = pageRef.current.clientWidth;
    const pageHeight = clientHeight;
    const totalHeight = pageRef.current.scrollHeight;
    const scrollCompletion = scrollPosition / (totalHeight - pageHeight);
    setScrollPosition(pageWidth * scrollCompletion);
  };

  return (
    <>
      {pageName === "transit" && (
        <ScrollingAnimation position={scrollPosition} />
      )}

      <div
        className="Slide-Up-Pop-Up Pop-Up-Container"
        onScroll={() => handleScroll(pageRef)}
        ref={pageRef}
      >
        <div className="Top-Bar">
          <div style={{ position: "absolute", left: "1rem" }}>
            <div
              className="Exit"
              onClick={() => {
                setPage(null);
                document.body.style.overflow = "auto";
              }}
            >
              <Close width="50%" height="50%" />
            </div>
          </div>
          <div className="TMHeader">
            <h3
              className={`PageTitle ${
                mobile ? "PageTitle-Mobile" : "PageTitle-DT"
              }`}
            >
              {Pages[pageName].title}
            </h3>
          </div>
        </div>
        <div
          className="Main-Div"
          ref={pageRef}
          onScroll={() => {
            handleScroll(pageRef);
          }}
        >
          <div
            className={`Main-Content ${
              mobile ? "Main-Content-Mobile" : "Main-Content-DT"
            }`}
          >
            {content.map((contentItem: any) => {
              return renderContent(contentItem);
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpPage;
