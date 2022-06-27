import React from "react";
import "../styles/features.scss";
import f1 from "../images/f1.png";
import f2 from "../images/f2.png";
import f3 from "../images/f3.png";
import f4 from "../images/f4.png";
import FeaturedCard from "./FeaturedCard";

const cardData = [
  {
    img: f1,
    title: "Fitness Tracking",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: 0,
  },
  {
    img: f2,
    title: "Alerts & Notifications",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: 1,
  },
  {
    img: f3,
    title: "Messages",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: 2,
  },
  {
    img: f4,
    title: "Bluetooth",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: 3,
  },
];

const Features = () => {
  return (
    <div className="features">
      <>
        <h2>Features of our Watches</h2>
        <span>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </span>
      </>
      <div className="features__cards">
        {cardData.map((card) => {
          return (
            <FeaturedCard
              key={card.id}
              img={card.img}
              title={card.title}
              desc={card.desc}
              longDesc={card.longDesc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
