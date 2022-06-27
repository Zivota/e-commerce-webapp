import "../styles/testimonials.scss";
import quotesImg from "../images/quotes.png";

const TestimonialCard = (props) => {
  return (
    <div className="testimonials__testimonial">
      <div className="testimonials__imgHolder">
        <img src={props.img} alt="testimonial img" />
      </div>
      <h3>{props.title}</h3>
      <span>CUSTOMER</span>
      <img src={quotesImg} alt="quotes" />
      <p>{props.desc}</p>
    </div>
  );
};

export default TestimonialCard;
