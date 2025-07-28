import "./App.css";
import { useState } from "react";
import Nav from "./component/View/Nav";
import Intro from "./component/View/Intro";
import ProfessionalProjects from "./component/View/ProfessionalProjects";
import Footer from "./component/View/Footer";
import vector from "../src/img/newBack.svg";
import Switch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faMoon } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [dark, setDark] = useState(true);
  const switchmodeHandler = () => {
    setDark((prev) => !prev);
  };
  return (
    <div className={`${dark ? "appDark" : "app"}`}>
      <div>
        <img src={vector} className="backdrop" alt="backdrop" />
      </div>
      <div className="switch">
        <Switch
          onChange={switchmodeHandler}
          checked={dark}
          offColor="#353535"
          onColor="#f1f1f1"
          offHandleColor="#77DD77"
          onHandleColor="#4a6741"
          height={20}
          width={45}
          activeBoxShadow="0 0 2px 3px #4a6741"
          checkedIcon={<FontAwesomeIcon icon={faBolt} color="#77DD77" />}
          uncheckedIcon={<FontAwesomeIcon icon={faMoon} color="#fff" />}
        />
      </div>

      <Nav dark={dark} />
      <Intro dark={dark} />
      <ProfessionalProjects dark={dark} />

      <Footer dark={dark} />
    </div>
  );
}

export default App;
