import React from "react";
// import "./style.module.css";
import vector from "../../img/newBack.svg";

const Intro = props => {
  return (
    <div className="intro">
      <div className="introName">Hello, I'm Faith</div>
      <div className="introDes">
        A purpose-driven front-end developer based in Lagos, Nigeria.
      </div>
      <div className="description">
        Currently looking to work on projects, preferably in Lagos, or remotely
        in any part of the world.
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href="mailto:faithuchinonso@gmail.com"
        className={`${props.dark ? "introLinkDark" : "introLink"}`}
      >
        Send a Mail{" "}
      </a>
    </div>
  );
};

export default Intro;
