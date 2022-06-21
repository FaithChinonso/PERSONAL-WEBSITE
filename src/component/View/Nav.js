import React, { useState } from "react";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = props => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(prev => !prev);
  };
  return (
    <div className="nav">
      <div>Faith Umunnakwe</div>
      <button onClick={handleToggle}>
        {navbarOpen ? (
          <FontAwesomeIcon icon={faTimes} className="navigation-icon" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="navigation-icon" />
        )}
      </button>
      <ul className={`${props.dark ? "navListDark" : "navList"}`}>
        <li>
          <a href="#work">My Work</a>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/u/0/d/1Fqr-OfRtTHQCbec9SYK9qNnDqbvdnWY06RcFkqupK_g/mobilebasic"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:faithuchinonso@gmail.com"
          >
            Send a Mail{" "}
          </a>
        </li>
      </ul>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        <li>
          <a href="#work">My Work</a>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/u/0/d/1Fqr-OfRtTHQCbec9SYK9qNnDqbvdnWY06RcFkqupK_g/mobilebasic"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:faithuchinonso@gmail.com"
          >
            Send a Mail{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
