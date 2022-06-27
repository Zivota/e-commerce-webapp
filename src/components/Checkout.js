import Overlay from "../UI/Overlay";
import "../styles/checkout.scss";
import creditCards from "../images/creditcards.png";
import moreinfo from "../images/moreinfo.png";

import React, { useState } from "react";

const Checkout = (props) => {
  const [changed, setChanged] = useState(false);

  const closeCheckout = () => {
    props.setShowCheckout(false);
  };

  let totalPrice = props.totalPrice;

  const getOption = (e) => {
    if (e.target.value === "premium" && changed === false) {
      setChanged(true);
      props.setTotalPrice(totalPrice + 20);
    } else {
      setChanged(false);
      props.setTotalPrice(totalPrice - 20);
    }
  };

  return (
    <>
      <Overlay onClick={closeCheckout} />
      <div className="checkout">
        <div className="checkout__flex">
          <h3>TOTAL</h3>
          <button type="button" onClick={closeCheckout}>
            X
          </button>
        </div>

        <div className="checkout__info">
          <div className="checkout__flex">
            <h5>Sub-total</h5>
            <span>${totalPrice}</span>
          </div>
          <div className="checkout__flex">
            <h5>Delivery</h5>
            <span>
              <img src={moreinfo} alt="more info icon" />
            </span>
          </div>
          <select name="delivery" onChange={getOption}>
            <option default value="standard">
              Standard Delivery (Free)
            </option>
            <option value="premium">Fast Delivery - $20 </option>
          </select>

          <button type="button" className="yellowBtn">
            Continue
          </button>

          <div className="checkout__cards">
            <h5>WE ACCEPT:</h5>
            <img src={creditCards} alt="credit cards" />
            <p>Got a discount code? Add it in the next step.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
