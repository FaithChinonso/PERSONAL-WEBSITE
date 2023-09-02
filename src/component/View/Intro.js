import React from "react";
// import "./style.module.css";
import vector from "../../img/newBack.svg";
import { Roll, Slide, Fade } from "react-reveal";

const Intro = props => {
  return (
    <div className="intro">
      <Fade top>
        <div className="introName">Hello, I'm Faith,</div>{" "}
      </Fade>
      <Slide left>
        <div className="introDes">
          A frontend developer with experience in React and React Native.
        </div>{" "}
      </Slide>
      <Slide right>
        <div className="description">
          I write high-quality, scalable and maintainable codes
        </div>
      </Slide>
      <Roll>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:faithuchinonso@gmail.com"
          className={`${props.dark ? "introLinkDark" : "introLink"}`}
        >
          Send a Mail{" "}
        </a>{" "}
      </Roll>
    </div>
  );
};

export default Intro;
