import React, { useContext, useRef, useState } from "react";
import type {
  ContentItem,
  PageNames,
  PageNamesNonNull,
} from "../AboutMenu/Pages";
import { Pages } from "../AboutMenu/Pages";
import "./PopUpPage.css";
import { WindowContext } from "../WindowContext";
import { ReactComponent as Close } from "../Images/Close.svg";
import Figma from "../Images/Figma.png";
import Github from "../Images/Github.png";
import { ScrollingAnimation } from "./ScrollingAnimation";

interface PopUpPageProps {
  pageName: PageNamesNonNull;
  setPage: React.Dispatch<React.SetStateAction<PageNames>>;
}

export const PopUpPage: React.FC<PopUpPageProps> = ({ pageName, setPage }) => {
  const { mobile, clientHeight } = useContext(WindowContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const pageRef = useRef(null);

  const { content } = Pages[pageName];

  const renderContent = (contentItem: ContentItem) => {
    if (contentItem.type === "p")
      return (
        <p
          className={`CS-Paragraph ${
            mobile ? "CS-Paragraph-Mobile" : "CS-Paragraph-DT"
          }`}
        >
          {contentItem.text}
        </p>
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
              width: "20rem",
              alignItems: "center",
              borderRadius: "4px",
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
      return <img src={contentItem.location} width={mobile ? "85%" : "75%"} />; //TODO: add Alt text
    if (contentItem.type === "list") {
      return (
        <ol
          style={{ rowGap: ".5rem", display: "flex", flexDirection: "column" }}
        >
          {contentItem.text.map((listItem: string, index: number) => {
            return (
              <p
                key={index}
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
          {contentItem.text.map((listItem: string, index: number) => {
            return (
              <li key={index} style={{ color: "white" }}>
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
        <div className="flex flex-row pt-8 gap-y-12 gap-x-8">
          {contentItem.links.figmaLink && (
            <a
              href={`https://www.figma.com/file/bLBzzBX3r6tG2CoS6vWglD/Dashboard---V4?node-id=1%3A55&t=ci7douClyjtiNNaG-1`}
            >
              <div className="shadow-md rounded-lg flex p-2 mt-8 md:mt-0  w-24 h-24 cursor-pointer bg-[#323232] items-center justify-center">
                <img src={Figma} className="w-12 h-12" alt={"Figma Link"} />
              </div>
            </a>
          )}
          {contentItem.links.githubLink && (
            <div className="shadow-md rounded-lg flex p-2 mt-8 md:mt-0  w-24 h-24 cursor-pointer bg-[#fff] items-center justify-center">
              <a href="https://github.com/transitmatters/t-performance-dash/tree/dashboard-v4">
                <img src={Github} className="w-12 h-12" alt={"Github Link"} />
              </a>
            </div>
          )}
        </div>
      );
    }
    if (contentItem.type === "custom") {
      return contentItem.content;
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
        className="Slide-Up-Pop-Up   fixed w-full h-[100vh] left-0 top-0 z-50 overflow-y-scroll bg-[#2e2d2c] flex flex-col"
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
          className="flex justify-center width-full mb-8 pb-16"
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
            {content.map((contentItem: ContentItem) => {
              return renderContent(contentItem);
            })}
          </div>
        </div>
      </div>
    </>
  );
};
