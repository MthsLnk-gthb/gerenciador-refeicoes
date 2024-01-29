import PropTypes from "prop-types";
import "./style.css";

const CardRefeicao = ({ refeicao }) => {
  return (
    <>
    <article className="card-refeicao">
    <h2>{refeicao.nomeRefeicao}</h2>
      <ul className="infos-nutricionais">
        <li>
          <label>Kcal:</label>
          {refeicao.calorias}
        </li>
        <li>
          <label>Carbo:</label>
          {refeicao.carboidratos}g
        </li>
        <li>
          <label>Proteínas:</label>
          {refeicao.proteinas}g
        </li>
      </ul>
    </article>
    </>
  );
};

CardRefeicao.propTypes = {
  refeicao: PropTypes.shape({
    nomeRefeicao: PropTypes.string.isRequired,
    calorias: PropTypes.number.isRequired,
    carboidratos: PropTypes.number.isRequired,
    proteinas: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardRefeicao;
