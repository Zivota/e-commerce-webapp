import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { WatchesContext } from "../store/WatchesContext";
import "../styles/singleWatch.scss";
import backArrow from "../images/back.png";

const SingleWatch = () => {
  const data = useContext(WatchesContext).watData;
  const setCart = useContext(WatchesContext).setCart;

  const { watchId } = useParams();

  const watch = data.find((watch) => watch.id.toString() === watchId);

  const addToCart = () => {
    if (watch.inCart === false) {
      watch.inCart = true;
      setCart((current) => [
        ...current,
        {
          id: watch.id,
          title: watch.title,
          img: watch.img,
          inCart: true,
          amount: 1,
          price: watch.price,
        },
      ]);
    }
  };

  return (
    <div className="singleWatch">
      <div className="singleWatch__imgHolder">
        <img src={watch.img} alt="img" />
      </div>
      <div className="singleWatch__info">
        <h3> {watch.title}</h3>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur.
        </p>
        <button className="yellowBtn" onClick={addToCart}>
          Add to Cart
        </button>
        <button className="basicBtn">
          <Link to="/watches">
            <img src={backArrow} alt="back arrow" /> Go back
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SingleWatch;
