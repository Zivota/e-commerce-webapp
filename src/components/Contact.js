import React from "react";
import "../styles/contact.scss";
import contactImg from "../images/contact-img.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <form>
        <h2>Contact Us</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="number" placeholder="Phone Number" />
        <textarea placeholder="Message" />
        <button type="button" className="yellowBtn">
          SEND
        </button>
      </form>

      <div className="contact__imgHolder">
        <img src={contactImg} alt="contact img" />
      </div>
    </div>
  );
};

export default Contact;
