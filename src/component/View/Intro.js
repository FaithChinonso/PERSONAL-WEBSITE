import React from "react";
import "../style.css";

const Intro = props => {
  return (
    <div className="intro">
      <div className="introName">Hello, I'm Faith</div>
      <div className="introDes">
        A purpose-driven front-end developer based in Lagos, Nigeria.
      </div>
      <div className="description">
        Currently looking for junior-level work, preferably in Lagos, or remotly
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
