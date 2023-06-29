import React, { useContext, useEffect, useRef, useState } from "react";
import "./Contact.css";
import Github from "../Images/GitHubStyled.png";
import LinkedIn from "../Images/LinkedInStyled.png";
import Twitter from "../Images/TwitterStyled.png";
import { WindowContext } from "../WindowContext";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const sites = [
  {
    name: "Github - PatrickCleary",
    icon: Github,
    link: "https://github.com/PatrickCleary",
  },
  {
    name: "Twitter - PatrickDCleary",
    icon: Twitter,
    link: "https://twitter.com/PatrickDCleary",
  },
  {
    name: "LinkedIn - pdcleary",
    icon: LinkedIn,
    link: "https://www.linkedin.com/in/pdcleary/",
  },
];

interface ContactBoxProps {
  name: string;
  icon: string;
  link: string;
}

const ContactBox: React.FC<ContactBoxProps> = ({ name, icon, link }) => {
  const { mobile, clientWidth } = useContext(WindowContext);
  return (
    <div
      style={{
        width: mobile ? 0.1 * clientWidth : 0.05 * clientWidth,
        height: mobile ? 0.1 * clientWidth : 0.05 * clientWidth,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <a href={link}>
        <img
          src={icon}
          alt={`Link to ${name}`}
          width={mobile ? 0.1 * clientWidth : 0.05 * clientWidth}
        />
      </a>
    </div>
  );
};

interface ContactProps {
  clickedLink: boolean;
}

export const Contact = React.forwardRef<HTMLDivElement, ContactProps>(
  ({ clickedLink }, ref) => {
    const [clicked, setClicked] = useState(false);
    const [clickable, setClickable] = useState(true);
    const { mobile } = useContext(WindowContext);
    const contactInfoRefOne = useRef(null);
    const contactInfoRefTwo = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("No-Show");
              entry.target.classList.add("Slide-Up");
            }
          });
        },
        {
          root: null,
          threshold: mobile ? 1 : 1,
        }
      );

      if (contactInfoRefOne.current) {
        observer.observe(contactInfoRefOne.current);
      }
      if (contactInfoRefTwo.current) {
        observer.observe(contactInfoRefTwo.current);
      }
    }, [contactInfoRefOne, contactInfoRefTwo, mobile]);

    return (
      <div className="Contact" ref={ref}>
        {" "}
        <Header title="CONTACT" clicked={clickedLink} />
        <div
          className="No-Show"
          ref={contactInfoRefOne}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            className="Email"
            style={{ cursor: "pointer", fontSize: "1.25rem" }}
            onClick={() => {
              if (clickable) {
                setClicked(true);
                setClickable(false);
                setTimeout(() => {
                  setClickable(true);
                  setClicked(false);
                }, 2000);
              }
              navigator.clipboard.writeText("PatrickDavisCleary@gmail.com");
            }}
          >
            PatrickDavisCleary@gmail.com
          </p>

          <p
            className={clicked ? "Fade-Out-Clipboard" : "Invisible"}
            style={{ fontSize: ".8rem", opacity: 0 }}
          >
            Copied to clipboard!
          </p>
        </div>
        <div
          className="No-Show flex flex-col items-center"
          ref={contactInfoRefTwo}
        >
          <div className="Contact-Me-Main-Content mt-4">
            {sites.map((site) => {
              return (
                <ContactBox
                  key={site.name}
                  icon={site.icon}
                  link={site.link}
                  name={site.name}
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
);
