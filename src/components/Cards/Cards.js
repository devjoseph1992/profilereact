import React from "react";
import CardItem from "../CardItem/CardItem";

import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out my Project</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="../../../images/img-9.jpg"
              text="Explore my Project"
              label="project1"
              path="/portfolio"
            />
            <CardItem
              src="../../../images/img-9.jpg"
              text="Explore my Project"
              label="project1"
              path="/portfolio"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="../../../images/img-9.jpg"
              text="Explore my Project"
              label="project1"
              path="/portfolio"
            />
            <CardItem
              src="../../../images/img-9.jpg"
              text="Explore my Project"
              label="project1"
              path="/portfolio"
            />
            <CardItem
              src="../../../images/img-9.jpg"
              text="Explore my Project"
              label="project1"
              path="/portfolio"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
