import React, { useContext } from "react";
import { WatchesContext } from "../store/WatchesContext";
import "../styles/watches.scss";
import Watch from "./Watch";

const Watches = () => {
  const data = useContext(WatchesContext).watData;

  return (
    <div className="watches">
      <h2>Latest Watches</h2>
      {data.map((item) => (
        <Watch
          key={item.id}
          id={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
          className={item.className}
          inCart={item.inCart}
          amount={item.amount}
        />
      ))}
    </div>
  );
};

export default Watches;
