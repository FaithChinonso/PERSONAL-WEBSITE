import React from "react";
import expense from "../../img/expensetracker.png";
import foodorderapp from "../../img/foodorder.png";
import justdoit from "../../img/justdoitt.png";
import shopfay from "../../img/shopfayy.png";

import "../style.css";

const PersonalProjects = () => {
  const projects = [
    {
      name: "ShopFay",
      des: "HTML,CSS, JAVASCRIPT,React AND REDUX ",
      id: "1",
      img: shopfay,
      link: "https://faithchinonso.github.io/MINI-SHOPPING-APP",
      github: "https://github.com/FaithChinonso/MINI-SHOPPING-APP",
    },
    {
      name: "Expense Tracker",
      des: " HTML,CSS, JAVASCRIPT AND REACT",
      id: "2",
      img: expense,
      link: "https://faithchinonso.github.io/EXPENSE-TRACKER",
      github: "https://github.com/FaithChinonso/EXPENSE-TRACKER",
    },
    {
      name: "Just Do It",
      des: " A TODO APP BUILT WITH HTML,CSS,JAVASCRIPT, TYPESCRIPT, REACT ",
      id: "3",
      img: justdoit,
      link: "https://thriving-custard-8be762.netlify.app",
      github: "https://github.com/FaithChinonso/justdoit",
    },
    {
      name: "Food Order App",
      des: " HTML,CSS, JAVASCRIPT AND React",
      id: "4",
      img: foodorderapp,
      link: "https://faithchinonso.github.io/FOOD-ORDER-APP",
      github: "https://github.com/FaithChinonso/FOOD-ORDER-APP",
    },
  ];
  return (
    <div className="proProjects" id="work">
      <div className="text">I have also done these</div>
      <div className="projectContainer">
        {projects.map(pro => (
          <div className="perProjectCard">
            <figure className="slide-figure">
              <img src={pro.img} alt={pro.name} className="slide-img" />

              <figcaption className="slide-caption">
                <h3 className="slide-heading">{pro.name}</h3>
                <p className="slide-text">{pro.des}</p>
                <div className="slider-buttons">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={pro.github}
                    className="slider-links"
                  >
                    View on Github
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={pro.link}
                    className="slider-links"
                  >
                    View Live Site
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalProjects;
