import "../styles/about.scss";
import { Link, useLocation } from "react-router-dom";
import aboutImg from "../images/about-img.png";

const About = () => {
  const location = useLocation();

  const linkAbout = <Link to="about"> Read More</Link>;
  const linkHome = <Link to="/"> Back Home</Link>;

  return (
    <div className="about">
      <div className="about__imgHolder">
        <img src={aboutImg} alt="red smartwatch" />
      </div>
      <div className="about__infoHolder">
        <h2>About us</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors.
        </p>

        <button className="yellowBtn" type="button">
          {location.pathname === "/" ? linkAbout : linkHome}
        </button>
      </div>
    </div>
  );
};

export default About;
