import "../styles/home.scss";
import fb from "../images/fb.png";
import ig from "../images/ig.png";
import tw from "../images/tw.png";
import lin from "../images/in.png";
import heroImg from "../images/slider-img.png";
import { Link } from "react-router-dom";
import Watches from "./Watches";
import About from "./About";
import Features from "./Features";
import Contact from "./Contact";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="sidebar">
          <img src={fb} alt="facebook icon" />
          <img src={tw} alt="twitter icon" />
          <img src={ig} alt="instagram icon" />
          <img src={lin} alt="linked in icon" />
        </div>
        <div className="hero">
          <div>
            <h1>Smart Watches</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              non quis exercitationem culpa nesciunt nihil aut nostrum
              explicabo.
            </p>
            <button className="yellowBtn">
              <Link to="contact">Contact Us</Link>
            </button>
          </div>
          <div>
            <img src={heroImg} alt="watches" />
          </div>
        </div>
      </div>

      <Watches />
      <About />
      <Features />
      <Contact />
      <Testimonials />
    </>
  );
};

export default Home;
