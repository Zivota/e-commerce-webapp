import React, { useState, useContext } from "react";
import { WatchesContext } from "../store/WatchesContext";
import "../styles/cart.scss";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = () => {
  const cart = useContext(WatchesContext).cart;
  const setCart = useContext(WatchesContext).setCart;
  const data = useContext(WatchesContext).watData;

  const [totalPrice, setTotalPrice] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);

  const cartItems = cart.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      img={item.img}
      title={item.title}
      amount={item.amount}
      price={item.price}
      cart={cart}
      setCart={setCart}
      data={data}
    />
  ));

  const checkoutHandler = () => {
    let sum = 0;

    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].amount * cart[i].price;
    }

    setTotalPrice(sum);
    setShowCheckout(true);
  };
  const holder = (
    <>
      {cartItems}
      <button type="button" className="yellowBtn" onClick={checkoutHandler}>
        Checkout
      </button>
      {showCheckout ? (
        <Checkout
          setShowCheckout={setShowCheckout}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
      ) : null}
    </>
  );

  return (
    <div className="cart">
      {cart.length > 0 ? holder : <h2>Your cart is empty.</h2>}
    </div>
  );
};

export default Cart;
