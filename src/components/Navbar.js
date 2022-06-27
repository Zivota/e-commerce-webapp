import React, { useState, useEffect } from "react";
import "../styles/navbar.scss";
import BurgerBtn from "../UI/BurgerBtn";
import Menu from "../components/Menu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scWidth, setScWidth] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setScWidth({
        width: window.innerWidth,
      });
    };

    const timer = setTimeout(() => {
      window.addEventListener("resize", handleResize);

      if (scWidth.width > 768) {
        setMenuOpen(false);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [scWidth]);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menu = () => {
    setMenuOpen(true);
  };

  return (
    <>
      <div className="navbar">
        <h2>Timups</h2>

        {scWidth.width < 768 ? <BurgerBtn onClick={openMenu} /> : <Menu />}
      </div>
      {menuOpen ? <Menu /> : ""}
    </>
  );
};

export default Navbar;
