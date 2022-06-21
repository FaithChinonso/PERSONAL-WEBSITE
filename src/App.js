import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Nav from "./component/View/Nav";
import Intro from "./component/View/Intro";
import PersonalProjects from "./component/View/PersonalProject";
import ProfessionalProjects from "./component/View/ProfessionalProjects";
import Footer from "./component/View/Footer";
import vector from "../src/img/backdrop.svg";

function App() {
  const [dark, setDark] = useState(false);
  const switchmodeHandler = () => {
    setDark(prev => !prev);
  };
  return (
    <div className={`${dark ? "appDark" : "app"}`}>
      <div onClick={switchmodeHandler} className="switch">
        Switch Mode
      </div>
      {!dark && <img src={vector} className="backdrop" />}

      <Nav dark={dark} />
      <Intro dark={dark} />
      <ProfessionalProjects dark={dark} />
      <PersonalProjects dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}

export default App;
