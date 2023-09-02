import React from "react";
import linx from "../../img/linxp.png";
import driver from "../../img/Driver.png";
import fleet from "../../img/FleetManager.png";
import rider from "../../img/cueRIder.png";
import driverr from "../../img/cueDriver.png";
import riby from "../../img/riby.png";
import digits from "../../img/digit.png";

// import "./style.css";
// import "./style.module.css";
const ProfessionalProjects = props => {
  const projects = [
    {
      name: "Linx Platform",
      des: "Linx offers business owners a full range of operations and marketing services to help reach more customers, improve efficiency, and increase revenue",
      id: "1",
      img: linx,
      link: "https://linxplatform.com/",
    },
    {
      name: "ITranxit Driver",
      des: "The platform offers tailored logistics solutions to meet diverse business needs. Whether it is last-mile delivery, or warehousing,  Itranxit offers flexible options that align with specific requirements",
      id: "3",
      img: driver,
      link: " https://driver.itranxit.com/",
    },
    {
      name: "ITranxit Vendors Dashboard",
      des: "The platform offers tailored logistics solutions to meet diverse business needs. Whether it is last-mile delivery, or warehousing,  Itranxit offers flexible options that align with specific requirementsS",
      id: "3",
      img: fleet,
      link: "https://fleet-itranxit.vercel.app/",
    },
    {
      name: "Digits Admin",
      des: "This is an administrative platform that serves as the backend system for both Flip, an e-commerce website, and Cue, a ride-hailing app. This platform is responsible for overseeing and managing a wide range of activities, including user administration, product and service management, order tracking, ride monitoring, driver oversight, and global settings.",
      id: "32",
      img: digits,
      link: "",
    },
    {
      name: "Cue Driver",
      des: "Cue is your ultimate ride-hailing solution, offering you a seamless and secure way to get around town. With a strong focus on safety, our top-notch features ensure that you can enjoy a worry-free ride every time",
      id: "4",
      img: driverr,
      link: "https://apps.apple.com/ng/app/cue-driver/id6446055971",
    },
    {
      name: "Cue Rider",
      des: "Cue is your ultimate ride-hailing solution, offering you a seamless and secure way to get around town. With a strong focus on safety, our top-notch features ensure that you can enjoy a worry-free ride every time",
      id: "5",
      img: rider,
      link: "https://apps.apple.com/us/app/cue-rider/id6446066197",
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
                <div className="link coming-soon ">Coming Soon</div>
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
