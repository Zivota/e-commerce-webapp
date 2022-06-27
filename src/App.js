import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Watches from "./components/Watches";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import SingleWatch from "./components/SingleWatch";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="watches" element={<Watches />} />
        <Route path="watches/:watchId" element={<SingleWatch />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
