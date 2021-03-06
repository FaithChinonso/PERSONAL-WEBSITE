import React, { useState } from "react";
// import "./style.css";
// import "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = props => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(prev => !prev);
  };
  return (
    <div
      className="nav"
      onClick={() => {
        console.log("uuu");
      }}
    >
      <div>Faith Umunnakwe</div>
      <button onClick={() => handleToggle()}>
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
            href="https://drive.google.com/file/d/1GrQGsvRVVHsS0jmYu5DGdHi7X4CSHIsZ/view?usp=sharing"
            target="_blank"
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
          <a href="#work" onClick={handleToggle}>
            My Personal Projects
          </a>
        </li>
        <li onClick={handleToggle}>
          <a href="#pwork">My Professional Projects</a>
        </li>
        <li onClick={handleToggle}>
          <a
            href="https://drive.google.com/file/d/1GrQGsvRVVHsS0jmYu5DGdHi7X4CSHIsZ/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
        <li onClick={handleToggle}>
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
