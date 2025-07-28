import React from "react";
import linx from "../../img/bankit.png";
import driver from "../../img/stakestack.png";
import fleet from "../../img/FleetManager.png";
import rider from "../../img/hermoney.png";
import driverr from "../../img/sme.png";
import { Flip } from "react-reveal";
import digits from "../../img/mhino.png";

// import "./style.css";
// import "./style.module.css";
const ProfessionalProjects = (props) => {
  const projects = [
    {
      name: "My SME App",
      des: "mySME App from Ecobank is your one-stop digital platform for all your business needs. It enables your business send and receive payments quickly and securely. You can now complete business and banking transactions at your fingertips",
      id: "1",
      img: driverr,
      link: "https://apps.apple.com/us/app/my-sme-app/id6449704155",
    },
    {
      name: "Hermoney",
      des: "HerMoney partners with your employers to give you access to financial services and benefits that help you build financial resilience while living your best life.",
      id: "2",
      img: rider,
      link: "https://apps.apple.com/ng/app/hermoney-mfb/id6741193668",
    },
    {
      name: "Bankit",
      des: "Say goodbye to traditional banking and hello to a smarter, more exciting way to manage your money! With Bankit, every step of your financial journey becomes an opportunity to grow, learn, and thrive. From sending money in seconds to managing your bills with ease, Bankit is the ultimate financial companion designed to help you stay in control and ahead of the game",
      id: "3",
      img: linx,
      link: "https://play.google.com/store/apps/details?id=com.bankitmfbapp.app&pcampaignid=web_share&pli=1",
    },
    {
      name: "StakeStack AI",
      des: "From onboarding to assessments, stakestack has seamlessly integrated all the tools you need to to design, customize, and launch impactful learning experiences.",
      id: "4",
      img: driver,
      link: " https://stakestackai.com/",
    },
    {
      name: "ITranxit",
      des: "The platform offers tailored logistics solutions to meet diverse business needs. Whether it is last-mile delivery, or warehousing,  Itranxit offers flexible options that align with specific requirementsS",
      id: "5",
      img: fleet,
      link: "https://fleet-itranxit.vercel.app/",
    },
    {
      name: "Mhino",
      des: "Access quality healthcare without financial strain. With Mhino, you can pay for health insurance in small, flexible amounts—ensuring you and your loved ones are always covered.",
      id: "6",
      img: digits,
      link: "https://www.mhino.com/",
    },
  ];
  return (
    <div className="proProjects" id="work">
      <div className="text"> Projects</div>
      <div className="proProjectContainer">
        {projects?.map((pro, index) => (
          <Flip bottom key={`${pro.id}-${index}`}>
            <div
              className={`${
                props.dark ? "proProjectCardDark" : "proProjectCard"
              }`}
            >
              <div className="projectImageDiv">
                <img src={pro.img} className="projectImage" alt={pro.name} />
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
          </Flip>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalProjects;
