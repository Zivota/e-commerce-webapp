import React from "react";
import "../styles/cart.scss";
import plus from "../images/plus.png";
import minus from "../images/minus.png";

const CartItem = (props) => {
  const removeHandler = () => {
    const item = props.cart.find((item) => item.id === props.id);
    const dataItem = props.data.find((dataItem) => dataItem.id === props.id);

    const newState = props.cart.filter((el) => {
      if (el.id === item.id) {
        dataItem.inCart = false;
        el.inCart = false;
      }
      return el.id !== item.id;
    });

    props.setCart(newState);
  };

  const substractionHandler = () => {
    const item = props.cart.find((item) => item.id === props.id);

    const newState = props.cart.map((obj) => {
      if (obj.amount >= 2) {
        if (obj.id === item.id) {
          return { ...obj, amount: obj.amount - 1 };
        }
      }

      return obj;
    });

    props.setCart(newState);
  };

  const addingHandler = () => {
    const item = props.cart.find((item) => item.id === props.id);

    const newState = props.cart.map((obj) => {
      if (obj.id === item.id) {
        return { ...obj, amount: obj.amount + 1 };
      }

      return obj;
    });

    props.setCart(newState);
  };

  return (
    <div className="cartItem">
      <div className="cartItem__infoHolder">
        <img src={props.img} alt="watch img" />
        <div className="cartItem__info">
          <span>{props.title}</span>
          <button className="basicBtn" type="button" onClick={removeHandler}>
            Remove
          </button>
        </div>
      </div>

      <div className="cartItem__mathInfo">
        <div className="mathInfo__holder">
          <button type="button" onClick={substractionHandler}>
            <img src={minus} alt="minus icon" />
          </button>
          <span className="mathInfo__amount">{props.amount}</span>
          <button type="button" onClick={addingHandler}>
            <img src={plus} alt="plus icon" />
          </button>
        </div>
        <div className="mathInfo__holder">
          Price: <span>${props.price}</span>
        </div>
        <div className="mathInfo__holder">
          Total: <span>${props.amount * props.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
