import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Nav from "./component/View/Nav";
import Intro from "./component/View/Intro";
import PersonalProjects from "./component/View/PersonalProject";
import ProfessionalProjects from "./component/View/ProfessionalProjects";
import Footer from "./component/View/Footer";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={`${dark ? "appDark" : "app"}`}>
      <Nav />
      <Intro />
      <ProfessionalProjects />
      <PersonalProjects />
      <Footer />
    </div>
  );
}

export default App;
