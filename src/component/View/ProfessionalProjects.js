import React from "react";
import linx from "../../img/linxp.png";
import cooper from "../../img/cooperc.png";
import radeus from "../../img/radeus.png";
import riby from "../../img/riby.png";

// import "./style.css";
// import "./style.module.css";
const ProfessionalProjects = props => {
  const projects = [
    {
      name: "Linx Platform",
      des: " Built the landing page and other associated pages using React, typescript and SASS. Ensured the whole platform is responsive on all screen size",
      id: "1",
      img: linx,
      link: "https://linxplatform.com/",
    },
    {
      name: "Cooper",
      des: "Building the frontend part of the entire platform using React",
      id: "2",
      img: cooper,
      link: "",
    },
    {
      name: "Radeus Website",
      des: "Building the new Radeus official website using React and tailwind css",
      id: "2",
      img: radeus,
      link: "",
    },
    {
      name: "Riby Website",
      des: "Building the new Riby Inc official website using React, Next,js and tailwind css",
      id: "2",
      img: riby,
      link: "",
    },
  ];
  return (
    <div className="proProjects" id="pwork">
      <div className="text">Professional Projects</div>
      <div className="proProjectContainer">
        {projects?.map(pro => (
          <div
            className={`${
              props.dark ? "proProjectCardDark" : "proProjectCard"
            }`}
          >
            <div className="projectImageDiv">
              <img src={pro.img} className="projectImage" />
            </div>

            <div className="flex">
              <div className="title">{pro.name}</div>
              <div className="descriptionn">{pro.des}</div>
              {pro.link === "" ? (
                <div className="link">Coming Soon</div>
              ) : (
                <a
                  href={pro.link}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  Visit Link{" "}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalProjects;
