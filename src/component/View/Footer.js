import React from "react";
import "./style.css";

const Footer = props => {
  return (
    <div className="footer">
      <div>Copyright @ 2022 Faith Umunnakwe </div>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/faith-umunnakwe-095905161"
            className={`${props.dark ? "footerLinkDark" : "footerLink"}`}
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/FaithChinonso"
            className={`${props.dark ? "footerLinkDark" : "footerLink"}`}
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/faithchinonso"
            className={`${props.dark ? "footerLinkDark" : "footerLink"}`}
          >
            Codepen
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
