import React, { useState, createContext } from "react";
import w1 from "../images/w1.png";
import w2 from "../images/w2.png";
import w3 from "../images/w3.png";
import w4 from "../images/w4.png";
import w5 from "../images/w5.png";
import w6 from "../images/w6.png";

const watData = [
  {
    img: w1,
    title: "Smartwatch",
    price: 300,
    id: 0,
    className: "watch featured",
    amount: 0,
    inCart: false,
  },
  {
    img: w2,
    title: "Smartwatch",
    price: 125,
    id: 1,
    className: "watch",
    amount: 0,
    inCart: false,
  },
  {
    img: w3,
    title: "Smartwatch",
    price: 110,
    id: 2,
    className: "watch",
    amount: 0,
    inCart: false,
  },
  {
    img: w4,
    title: "Smartwatch",
    price: 145,
    id: 3,
    className: "watch",
    amount: 0,
    inCart: false,
  },
  {
    img: w5,
    title: "Smartwatch",
    price: 195,
    id: 4,
    className: "watch",
    amount: 0,
    inCart: false,
  },
  {
    img: w6,
    title: "Smartwatch",
    price: 170,
    id: 5,
    className: "watch",
    amount: 0,
    inCart: false,
  },
  {
    img: w1,
    title: "Smartwatch",
    price: 230,
    id: 6,
    className: "watch",
    amount: 0,
    inCart: false,
  },
];

export const WatchesContext = createContext();

const WatchesProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <WatchesContext.Provider value={{ watData, cart, setCart }}>
      {children}
    </WatchesContext.Provider>
  );
};

const WatchesData = (Child) => (props) => {
  <WatchesContext.Consumer>
    {(context) => <Child {...props} {...context} />}
  </WatchesContext.Consumer>;
};

export { WatchesProvider, WatchesData };
