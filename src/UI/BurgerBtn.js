import "../styles/navbar.scss";

const BurgerBtn = (props) => {
  return (
    <div className="burgerBtn" onClick={props.onClick}>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerBtn;
