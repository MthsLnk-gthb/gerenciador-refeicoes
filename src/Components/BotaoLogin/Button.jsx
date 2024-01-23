import "./button.css";

const Button = ({ Text, onClick, Type = "button" }) => {
  return (
    <button className="botao-login" type={Type} onClick={onClick}>
      {Text}
    </button>
  );
};

export default Button;
