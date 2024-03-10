import "./App.css";
import React, { useRef, useState } from "react";
import { Portfolio } from "./Sections/Portfolio";
import { Contact } from "./Sections/Contact";
import { Hero } from "./Sections/Hero";
import type { PageNames } from "./AboutMenu/Pages";
import { AboutMe } from "./Sections/AboutMe";
import { PopUpPage } from "./Components/PopUpPage";
import { NavBar } from "./Components/NavBar";

function App() {
  const [page, setPage] = useState<PageNames>(null);
  const [clicked, setClicked] = useState<number>(-1);
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-[100svh] w-[100vw]">
      <NavBar
        refs={[aboutRef, portfolioRef, connectRef]}
        setClicked={setClicked}
      />
      <Hero />
      {page && <PopUpPage pageName={page} setPage={setPage} />}
      <AboutMe
        page={page}
        setPage={setPage}
        ref={aboutRef}
        clicked={clicked === 0}
      />
      <Portfolio setPage={setPage} ref={portfolioRef} clicked={clicked === 1} />
      <Contact ref={connectRef} clickedLink={clicked === 2} />
    </div>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
