import "./App.css";
import AboutMe from "./Sections/AboutMe";
import { Portfolio } from "./Sections/Portfolio";
import { Contact } from "./Sections/Contact";
import { Hero } from "./Sections/Hero";

function App() {


  return (
    <div className="App">
      <Hero />
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
