import React, { useContext } from "react";
import "./TransitMattersPage.css";
import { content } from "./CaseStudy/TransitMattersWriting";
import { ReactComponent as Close } from "./Images/Close.svg";
import Figma from "./Images/Figma.png";
import Github from "./Images/Github.png";
import { WindowContext } from "./WindowContext";

interface TransitMattersPageProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}
const TransitMattersPage: React.FC<TransitMattersPageProps> = ({ setPage }) => {
  const { mobile } = useContext(WindowContext);

  const renderContent = (contentItem: any) => {
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
    if (contentItem.type === "img")
      return (
        <img
          src={contentItem.location}
          width={"100%"}
          alt={contentItem.caption}
        />
      ); //TODO: add Alt text
    if (contentItem.type === "list") {
      return (
        <ol>
          {contentItem.text.map((listItem: any, index: number) => {
            return (
              <p
                className={mobile ? "CS-Paragraph-Mobile" : "CS-Paragraph-DT"}
              >{`${index + 1}. ${listItem}`}</p>
            );
          })}
        </ol>
      );
    }
  };

  return (
    <div className="Slide-Up Container">
      <div className="Top-Bar">
        <div
          className="Exit"
          onClick={() => {
            setPage("None");
            document.body.style.overflow = "auto";
          }}
        >
          <Close width="50%" height="50%" />
        </div>
        <div className="TMHeader">
          <h3
            className={`PageTitle ${
              mobile ? "PageTitle-Mobile" : "PageTitle-DT"
            }`}
          >
            TransitMatters
          </h3>
        </div>
      </div>
      <div className="Main-Div">
        <div
          className={`Main-Content ${
            mobile ? "Main-Content-Mobile" : "Main-Content-DT"
          }`}
        >
          {content.map((contentItem) => {
            return renderContent(contentItem);
          })}
          <div className={`Links ${mobile ? "Links-Mobile" : "Links-DT"}`}>
            <div className={`Figma Link ${mobile && "Link-Mobile"}`}>
              <a
                href={`https://www.figma.com/file/bLBzzBX3r6tG2CoS6vWglD/Dashboard---V4?node-id=1%3A55&t=ci7douClyjtiNNaG-1`}
              >
                <img src={Figma} className="Link-Icon" alt={"Figma Link"} />
              </a>
            </div>
            <div className={`Github Link ${mobile && "Link-Mobile"}`}>
              <a href="https://github.com/transitmatters/t-performance-dash/tree/dashboard-v4">
                <img src={Github} className="Link-Icon" alt={"Github Link"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransitMattersPage;
