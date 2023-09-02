import React from "react";
// import "./style.module.css";
import vector from "../../img/newBack.svg";

const Intro = props => {
  return (
    <div className="intro">
      <div className="introName">Hello, I'm Faith,</div>
      <div className="introDes">
        A frontend developer with experience in React and React Native.
      </div>
      <div className="description">
        I write high-quality, scalable and maintainable codes
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
