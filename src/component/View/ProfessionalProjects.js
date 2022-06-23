import React from "react";
import linx from "../../img/linx.png";
import cooper from "../../img/cooper.png";
import "./style.css";
const ProfessionalProjects = props => {
  const projects = [
    {
      name: "Linx Platform",
      des: "Manage your business operations and finances with ease",
      id: "1",
      img: linx,
      link: "https://linxplatform.com/",
    },
    {
      name: "Cooper",
      des: "Create and manage cooperatives and assign task",
      id: "2",
      img: cooper,
      link: "",
    },
  ];
  return (
    <div className="proProjects">
      <div className="text">Some select work</div>
      <div className="projectContainer">
        {projects.map(pro => (
          <div
            className={`${
              props.dark ? "proProjectCardDark" : "proProjectCard"
            }`}
          >
            <img src={pro.img} className="projectImage" />
            <div className="flex">
              <div className="title">{pro.name}</div>
              <div className="description">{pro.des}</div>
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
