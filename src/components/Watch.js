import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/watch.scss";
import { WatchesContext } from "../store/WatchesContext";

const Watch = (props) => {
  const data = useContext(WatchesContext).watData;
  const cart = useContext(WatchesContext).cart;
  const setCart = useContext(WatchesContext).setCart;

  const addToCart = () => {
    const item = data.find((item) => item.id === props.id);

    if (item.inCart === false) {
      item.inCart = true;
      setCart((current) => [
        ...current,
        {
          id: item.id,
          title: item.title,
          img: item.img,
          inCart: true,
          amount: 1,
          price: item.price,
        },
      ]);
    }
  };
  return (
    <div className={props.className}>
      <img src={props.img} alt="single watch" />
      <div className="watch__info">
        <p>{props.title}</p>
        <p>
          Price: $<span>{props.price}</span>
        </p>
      </div>

      <div className="infoHolder">
        <button type="button" className="yellowBtn">
          <Link to={`/watches/${props.id}`}>Learn more</Link>
        </button>
        <button type="button" className="yellowBtn" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Watch;
