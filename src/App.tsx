import "./App.css";
import AboutMe from "./Sections/AboutMe";
import { Portfolio } from "./Sections/Portfolio";
import { Contact } from "./Sections/Contact";
import { Hero } from "./Sections/Hero";
import PopUpPage from "./Components/PopUpPage";
import { useState } from "react";
import { PageNames } from "./AboutMenu/Pages";

function App() {
  const [page, setPage] = useState<PageNames>(null);

  return (
    <div className="App">
      <Hero />
      {page && <PopUpPage pageName={page} setPage={setPage} />}
      <AboutMe page={page} setPage={setPage} />
      <Portfolio setPage={setPage} />
      <Contact />
    </div>
  );
}

export default App;
