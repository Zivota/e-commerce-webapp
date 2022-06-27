import React, { useState } from "react";
import "../styles/testimonials.scss";
import TestimonialCard from "./TestimonialCard";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";
import c4 from "../images/c4.jpg";

const testData = [
  {
    title: "MARK THOMAS",
    img: c1,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.",
    id: 0,
  },
  {
    title: "ANNA HANS",
    img: c2,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.",
    id: 1,
  },
  {
    title: "JOHN DOE",
    img: c4,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.",
    id: 2,
  },
  {
    title: "NOAH TERRY",
    img: c3,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.",
    id: 3,
  },
];

const Testimonials = () => {
  const [changer1, setChanger1] = useState(0);
  const [changer2, setChanger2] = useState(1);

  const incrementChanger = () => {
    if (changer1 < 3) {
      setChanger1(changer1 + 1);
    } else {
      setChanger1(0);
    }
    if (changer2 < 3) {
      setChanger2(changer2 + 1);
    } else {
      setChanger2(0);
    }
  };

  const decrementChanger = () => {
    if (changer1 > 0) {
      setChanger1(changer1 - 1);
    } else {
      setChanger1(3);
    }
    if (changer2 > 0) {
      setChanger2(changer2 - 1);
    } else {
      setChanger2(3);
    }
  };

  return (
    <div className="testimonials">
      <h2>Testimonial</h2>
      <div className="testimonials__testimonialHolder">
        <div>
          <TestimonialCard
            key={testData[changer1].id}
            img={testData[changer1].img}
            title={testData[changer1].title}
            desc={testData[changer1].desc}
          />
        </div>
        <div className="hidden">
          <TestimonialCard
            key={testData[changer2].id}
            img={testData[changer2].img}
            title={testData[changer2].title}
            desc={testData[changer2].desc}
          />
        </div>
      </div>
      <div className="testimonials__btnsHolder">
        <button type="button" className="yellowBtn" onClick={decrementChanger}>
          {"<"}
        </button>
        <button type="button" className="yellowBtn" onClick={incrementChanger}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
