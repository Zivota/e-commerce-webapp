import React, { useContext } from "react";
import "../styles/menu.scss";
import { Link } from "react-router-dom";
import cartImg from "../images/cart.png";
import { WatchesContext } from "../store/WatchesContext";

const Menu = () => {
  const cart = useContext(WatchesContext).cart;

  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/"> HOME</Link>
        </li>
        <li>
          <Link to="watches"> WATCHES</Link>
        </li>
        <li>
          <Link to="about"> ABOUT</Link>
        </li>
        <li>
          <Link to="contact"> CONTACT</Link>
        </li>
        <li id="cartImg">
          <Link to="cart">
            <img src={cartImg} alt="cart icon" />
            {cart.length ? <span>{cart.length}</span> : ""}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
