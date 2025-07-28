import React from "react";

import { Roll, Slide, Fade } from "react-reveal";

const Intro = (props) => {
  return (
    <div className="intro">
      <Fade top>
        <div className="introName">Hello, I'm Faith,</div>{" "}
      </Fade>
      <Slide left>
        <div className="introDes">
          A frontend developer with experience in Vue, React and React Native.
        </div>{" "}
      </Slide>
      <Slide right>
        <div className="description">
          Crafting Clean Code & Sleek Interfaces
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
