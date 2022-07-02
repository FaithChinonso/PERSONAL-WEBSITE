import React from "react";
import linx from "../../img/linx.png";
import cooper from "../../img/cooper.png";
// import "./style.css";
// import "./style.module.css";
const ProfessionalProjects = props => {
  const projects = [
    {
      name: "Linx Platform",
      des: " Built the landing page and other associated pages using React. Ensured the whole platform is responsive on all screen size",
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
      des: "Building the new Radeus official website using react and tailwind css",
      id: "2",
      img: null,
      link: "",
    },
  ];
  return (
    <div className="proProjects" id="pwork">
      <div className="text">Professional Projects</div>
      <div className="projectContainer">
        {projects?.map(pro => (
          <div
            className={`${
              props.dark ? "proProjectCardDark" : "proProjectCard"
            }`}
          >
            <img src={pro.img} className="projectImage" />
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
