import React, { useContext, useState } from "react";
import "./Contact.css";
import Github from "../Images/GitHubStyled.png";
import LinkedIn from "../Images/LinkedInStyled.png";
import Twitter from "../Images/TwitterStyled.png";
import { WindowContext } from "../WindowContext";
import { Footer } from "../Components/Footer";

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
        width: mobile ? 0.05 * clientWidth : 0.025 * clientWidth,
        height: mobile ? 0.05 * clientWidth : 0.025 * clientWidth,

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

    return (
      <div
        className="bg-slate-950 flex items-center bg-opacity-90 backdrop-blur-lg w-full pt-16 pb-2 flex-col relative"
        ref={ref}
      >
        <div className="max-w-[940px] w-full items-center">
          <div className="flex flex-col items-center relative">
            <p className="text-base">patrickdaviscleary@gmail.com</p>
          </div>
          <div className="flex flex-col items-center mb-4">
            <div className="mt-2 grid gap-4 grid-cols-3 ">
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
      </div>
    );
  }
);
