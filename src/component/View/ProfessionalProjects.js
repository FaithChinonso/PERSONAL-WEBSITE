import React from "react";
import linx from "../../img/linxp.png";
import driver from "../../img/Driver.png";
import fleet from "../../img/FleetManager.png";
import admin from "../../img/admin.png";
import radeus from "../../img/radeus.png";
import riby from "../../img/riby.png";
import digits from "../../img/digit.png";

// import "./style.css";
// import "./style.module.css";
const ProfessionalProjects = props => {
  const projects = [
    {
      name: "Linx Platform",
      des: " Was a core member of the team that built the landing page and the service provider feature using React, Typescript and SASS.",
      id: "1",
      img: linx,
      link: "https://linxplatform.com/",
    },
    {
      name: "ITranxit Driver",
      des: "Built the Tranxit Driver using  React,Next,js,Typescript,Firebase and SCSS",
      id: "3",
      img: driver,
      link: " https://driver.itranxit.com/",
    },
    {
      name: "ITranxit Vendors Dashboard",
      des: "Built the  Tranxit Vendors dashboard using React,Next,js,Typescript,Firebase and SCSS",
      id: "3",
      img: fleet,
      link: "https://fleet-itranxit.vercel.app/",
    },
    {
      name: "iTranxit Admin Dashboard",
      des: "Built the iTranxit Admin using React and tailwind css",
      id: "32",
      img: admin,
      link: "",
    },
    {
      name: "Riby Website",
      des: "Built the new Riby Inc official website using React, Next,js and tailwind css",
      id: "4",
      img: riby,
      link: "https://ribyinc.com/",
    },
    {
      name: "Digits Admin",
      des: "Building the admin platform of an e-commerce website using React, Next,js and tailwind css",
      id: "5",
      img: digits,
      link: "",
    },
  ];
  return (
    <div className="proProjects" id="work">
      <div className="text"> Projects</div>
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
