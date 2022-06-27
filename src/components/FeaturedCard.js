import React, { useState } from "react";
import "../styles/features.scss";
import rightArrow from "../images/rightArrow.png";

const FeaturedCard = (props) => {
  const [readMore, setReadMore] = useState(false);

  const loadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="features__card">
      <img src={props.img} alt="featured img" />
      <h3>{props.title}</h3>
      <p>{readMore ? props.longDesc : props.desc}</p>
      <button type="button" onClick={loadMore}>
        Read More <img src={rightArrow} alt="right arrow icon" />
      </button>
    </div>
  );
};

export default FeaturedCard;
