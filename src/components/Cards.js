import React from "react";
import "./Cards.css";

import Styles1 from "./cards components/Styles1";
import Styles2 from "./cards components/Styles2";
import Styles3 from "./cards components/Styles3";

const cardData = [
  {
    component: Styles1,
  },
  {
    component: Styles2,
  },
  {
    component: Styles3,
  },
];

function Card() {
  return (
    <div className="cards">
      <h1>Explore Our Services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          {cardData.map((item, index) => {
            const Component = item.component;
            return <Component key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
