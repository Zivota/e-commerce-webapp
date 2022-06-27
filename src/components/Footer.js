import "../styles/footer.scss";
import fb from "../images/fb.png";
import tw from "../images/tw.png";
import lin from "../images/in.png";
import ig from "../images/ig.png";
import location from "../images/location.png";
import phone from "../images/phone.png";
import email from "../images/email.png";
import map from "../images/map.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__about">
        <h3>About</h3>
        <p>
          Necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with.
        </p>
        <div className="footer__imgs">
          <span>
            <img src={fb} alt="social media icon" />
          </span>
          <span>
            <img src={tw} alt="social media icon" />
          </span>
          <span>
            <img src={lin} alt="social media icon" />
          </span>
          <span>
            <img src={ig} alt="social media icon" />
          </span>
        </div>
      </div>

      <div className="footer__reach">
        <h3>Reach at...</h3>

        <div className="reachFlex">
          <div className="imgHolder">
            <img src={location} alt="location icon" />
          </div>
          <a href="/">Times Square, New York</a>
        </div>

        <div className="reachFlex">
          <div className="imgHolder">
            <img src={phone} alt="phone icon" />
          </div>
          <a href="/">Call +01 1234567890</a>
        </div>

        <div className="reachFlex">
          <div className="imgHolder">
            <img src={email} alt="email icon" />
          </div>
          <a href="/">demo@gmail.com</a>
        </div>
      </div>

      <div className="footer__subscribe">
        <h3>Subscribe</h3>
        <form>
          <input type="email" placeholder="Enter email" />
          <button type="button" className="yellowBtn">
            {" "}
            Subscribe
          </button>
        </form>
      </div>
      <div className="footer__map">
        <img src={map} alt="google map img" />
      </div>

      <p className="copyright">
        &copy; 2022 Made with love by Života Kovačević
      </p>
    </footer>
  );
};

export default Footer;
